import { hiddenSectionMetadata } from "@/lib/visibility";

export const metadata = hiddenSectionMetadata;

export default function HiddenSectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
