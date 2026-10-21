import { cacheLife } from "next/cache";

/** Medios cuyos titulares se muestran en Actualidad. Elegidos para cubrir varias sensibilidades. */
export const newsFeeds = [
  { id: "vatican", name: "Vatican News", about: "El portal oficial de noticias de la Santa Sede.", url: "https://www.vaticannews.va/es.rss.xml" },
  { id: "alfayomega", name: "Alfa y Omega", about: "Semanario católico español, editado por el Arzobispado de Madrid.", url: "https://alfayomega.es/feed/" },
  { id: "religiondigital", name: "Religión Digital", about: "Diario digital independiente de información religiosa.", url: "https://www.religiondigital.org/rss/" },
  { id: "protestante", name: "Protestante Digital", about: "Diario evangélico en español.", url: "https://protestantedigital.com/rss/portada" },
] as const;

export type Headline = { title: string; link: string; date: string | null };
export type FeedHeadlines = { id: string; name: string; about: string; headlines: readonly Headline[] };

const entities: Readonly<Record<string, string>> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

const decode = (text: string): string =>
  text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name: string) => entities[name.toLowerCase()] ?? match)
    .replace(/\s+/g, " ")
    .trim();

const tag = (item: string, name: string): string | undefined => item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"))?.[1];

const parseDate = (raw: string | undefined): string | null => {
  if (!raw) return null;
  const text = decode(raw);
  const date = new Date(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(text) ? `${text.replace(" ", "T")}+02:00` : text);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};

const isWebLink = (link: string): boolean => link.startsWith("https://") || link.startsWith("http://");

export const parseFeed = (xml: string): Headline[] =>
  [...xml.matchAll(/<item[\s>][\s\S]*?<\/item>/gi)]
    .map((match) => match[0])
    .map((item) => ({ title: decode(tag(item, "title") ?? ""), link: decode(tag(item, "link") ?? ""), date: parseDate(tag(item, "pubDate")) }))
    .filter((headline) => headline.title.length > 0 && isWebLink(headline.link));

const readFeed = async (url: string): Promise<Headline[]> => {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(8000), headers: { "user-agent": "Lumen (lector de titulares)" } });
    if (!response.ok) return [];
    return parseFeed(await response.text());
  } catch {
    return [];
  }
};

const newestFirst = (a: Headline, b: Headline): number => (b.date ?? "").localeCompare(a.date ?? "");

/** Los últimos titulares de cada medio. Se guardan en caché y se renuevan cada pocas horas. */
export const getHeadlines = async (perFeed = 5): Promise<readonly FeedHeadlines[]> => {
  "use cache";
  cacheLife("hours");
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const isRecent = (headline: Headline) => headline.date === null || headline.date >= monthAgo;
  const results = await Promise.all(
    newsFeeds.map(async (feed) => ({ feed, headlines: (await readFeed(feed.url)).filter(isRecent) })),
  );
  return results
    .filter(({ headlines }) => headlines.length > 0)
    .map(({ feed, headlines }) => ({
      id: feed.id,
      name: feed.name,
      about: feed.about,
      headlines: [...headlines].sort(newestFirst).slice(0, perFeed),
    }));
};
