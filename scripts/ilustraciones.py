"""Ilustraciones de Lumen, capítulo 1. Estilo plano, colores cálidos, personajes redondeados.
Genera SVG en public/ilustraciones/."""
import math, os, sys

OUT = sys.argv[1]
W, H = 1200, 750

C = dict(
    hair="#2b1d15", eye="#2b1d15", cheek="#e8907c",
    skin1="#c68b5e", skin2="#b0764c", skin3="#d8a374",
    linen="#ece0c4", linen2="#d9c8a3", brown="#8a5a3b", rust="#b5653d", olive="#7d8c4a",
    blue="#4f6f93", blue2="#3e5a7a", ochre="#d39a43", red="#b23a2e", gold="#e3b341",
    stone="#dcc6a2", stone2="#c9ae86", stone3="#b39370", door="#7c5034", sand="#e8d2a6",
    leaf="#7e9150", leaf2="#647a3c", trunk="#6e5138",
)

def g(*parts, t=None):
    tr = f' transform="{t}"' if t else ""
    return f"<g{tr}>" + "".join(parts) + "</g>"

def circle(x, y, r, fill, extra=""):
    return f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" fill="{fill}" {extra}/>'

def ellipse(x, y, rx, ry, fill, extra=""):
    return f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="{fill}" {extra}/>'

def rect(x, y, w, h, fill, rx=0, extra=""):
    return f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{rx}" fill="{fill}" {extra}/>'

def path(d, fill="none", extra=""):
    return f'<path d="{d}" fill="{fill}" {extra}/>'

def line(x1, y1, x2, y2, color, width, extra=""):
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{color}" stroke-width="{width}" stroke-linecap="round" {extra}/>'

HANDS = {"down": (60, -105), "up": (78, -300), "out": (108, -175), "front": (28, -150), "hold": (40, -165), "low": (70, -130)}

def person(x, y, s=1.0, skin=C["skin1"], hair="curly", tunic=C["linen"], sleeve=None, stripe=None,
           belt=C["brown"], mantle=None, left="down", right="down", seated=False, mouth="smile",
           helmet=False, armor=False, flip=False, look=0, hair_color=None):
    """Persona de frente, pies en (x, y). look desplaza los ojos (-1 izquierda, 1 derecha)."""
    sleeve = sleeve or tunic
    HC = hair_color or C["hair"]
    dy = 80 if seated else 0
    p = []
    # piernas (de pie); sentado, el regazo se dibuja después de la túnica
    if not seated:
        p.append(rect(-24, -62, 17, 58, skin, 6))
        p.append(rect(7, -62, 17, 58, skin, 6))
        p.append(ellipse(-16, -3, 17, 7, C["brown"]))
        p.append(ellipse(16, -3, 17, 7, C["brown"]))
    T = lambda yy: yy + dy  # baja el cuerpo si está sentado
    # manto por detrás (cabeza y hombros)
    if mantle:
        p.append(path(f"M -58,{T(-80)} L -52,{T(-215)} Q -60,{T(-300)} 0,{T(-315)} Q 60,{T(-300)} 52,{T(-215)} L 58,{T(-80)} Z", mantle))
    # brazos (detrás del cuerpo si van abajo)
    def arm(side, pose):
        hx, hy = HANDS[pose]
        sx, sy = 40 * side, T(-198)
        hx, hy = hx * side, T(hy)
        mx, my = (sx + hx) / 2 + 10 * side, (sy + hy) / 2
        return [path(f"M {sx},{sy} Q {mx},{my} {hx},{hy}", extra=f'stroke="{sleeve}" stroke-width="22" stroke-linecap="round"'),
                circle(hx, hy, 12, skin)]
    back_arms, front_arms = [], []
    for side, pose in ((-1, left), (1, right)):
        (front_arms if pose in ("front", "hold") else back_arms).extend(arm(side, pose))
    p += back_arms
    # túnica
    hem = -105 if seated else -55
    p.append(path(f"M -44,{T(-212)} Q 0,{T(-224)} 44,{T(-212)} L {62},{T(hem)} Q 0,{T(hem+10)} -62,{T(hem)} Z", tunic))
    if seated:
        p.append(ellipse(0, -24, 84, 26, tunic))
        p.append(ellipse(0, -24, 84, 26, "#000", 'opacity="0.07"'))
        p.append(ellipse(-60, -8, 16, 9, C["brown"]))
        p.append(ellipse(60, -8, 16, 9, C["brown"]))
    if stripe:
        p.append(path(f"M -14,{T(-216)} L -18,{T(hem+6)} L -9,{T(hem+7)} L -6,{T(-218)} Z", stripe))
        p.append(path(f"M 14,{T(-216)} L 18,{T(hem+6)} L 9,{T(hem+7)} L 6,{T(-218)} Z", stripe))
    if armor:
        p.append(path(f"M -42,{T(-208)} Q 0,{T(-220)} 42,{T(-208)} L 46,{T(-128)} Q 0,{T(-120)} -46,{T(-128)} Z", "#9aa4ad"))
        for k in range(4):
            yy = T(-195 + k * 18)
            p.append(line(-40, yy, 40, yy, "#7d8790", 3))
    p.append(rect(-54, T(-140), 108, 12, belt, 5))
    if mantle:
        p.append(path(f"M -50,{T(-212)} Q -64,{T(-150)} -58,{T(-80)} L -40,{T(-80)} Q -44,{T(-150)} -30,{T(-205)} Z", mantle))
        p.append(path(f"M 50,{T(-212)} Q 64,{T(-150)} 58,{T(-80)} L 40,{T(-80)} Q 44,{T(-150)} 30,{T(-205)} Z", mantle))
    # cuello y cabeza
    p.append(rect(-10, T(-235), 20, 30, skin, 6))
    hx_, hy_ = 0, T(-262)
    if hair == "curly":
        for a in range(190, 355, 22):
            r = math.radians(a)
            p.append(circle(37 * math.cos(r), hy_ + 37 * math.sin(r), 17, HC))
    if hair in ("short", "beard"):
        p.append(path(f"M -41,{hy_+4} Q -44,{hy_-48} 0,{hy_-46} Q 44,{hy_-48} 41,{hy_+4} Z", HC))
    p.append(circle(hx_, hy_, 40, skin))
    if hair == "curly":
        for a in range(205, 340, 26):
            r = math.radians(a)
            p.append(circle(30 * math.cos(r), hy_ - 8 + 30 * math.sin(r), 13, HC))
    if hair in ("short", "beard"):
        p.append(path(f"M -38,{hy_-6} Q -30,{hy_-44} 0,{hy_-42} Q 30,{hy_-44} 38,{hy_-6} Q 20,{hy_-24} 0,{hy_-22} Q -20,{hy_-24} -38,{hy_-6} Z", HC))
    if hair == "beard":
        p.append(path(f"M -38,{hy_+2} Q -36,{hy_+48} 0,{hy_+52} Q 36,{hy_+48} 38,{hy_+2} Q 30,{hy_+28} 0,{hy_+24} Q -30,{hy_+28} -38,{hy_+2} Z", HC))
    if hair == "veil" and mantle:
        p.append(path(f"M -42,{hy_+6} Q -46,{hy_-50} 0,{hy_-52} Q 46,{hy_-50} 42,{hy_+6} Q 34,{hy_-26} 0,{hy_-30} Q -34,{hy_-26} -42,{hy_+6} Z", mantle))
    if helmet:
        p.append(path(f"M -44,{hy_+2} Q -46,{hy_-50} 0,{hy_-50} Q 46,{hy_-50} 44,{hy_+2} L 36,{hy_+2} Q 30,{hy_-22} 0,{hy_-24} Q -30,{hy_-22} -36,{hy_+2} Z", "#a7afb6"))
        p.append(rect(-40, hy_ - 4, 12, 30, "#a7afb6", 5))
        p.append(rect(28, hy_ - 4, 12, 30, "#a7afb6", 5))
        p.append(path(f"M -30,{hy_-48} Q 0,{hy_-92} 30,{hy_-48} Q 0,{hy_-62} -30,{hy_-48} Z", C["red"]))
    # cara
    ex = 6 * look
    p.append(circle(-14 + ex, hy_ - 2, 4.6, C["eye"]))
    p.append(circle(14 + ex, hy_ - 2, 4.6, C["eye"]))
    p.append(circle(-24, hy_ + 13, 6.5, C["cheek"], 'opacity="0.55"'))
    p.append(circle(24, hy_ + 13, 6.5, C["cheek"], 'opacity="0.55"'))
    if hair != "beard":
        if mouth == "flat":
            p.append(line(-9, hy_ + 19, 9, hy_ + 19, C["eye"], 3.5))
        elif mouth == "open":
            p.append(path(f"M -10,{hy_+15} Q 0,{hy_+30} 10,{hy_+15} Z", "#7a3524"))
        else:
            p.append(path(f"M -11,{hy_+16} Q 0,{hy_+25} 11,{hy_+16}", extra=f'stroke="{C["eye"]}" stroke-width="3.5" stroke-linecap="round"'))
    else:
        p.append(path(f"M -9,{hy_+20} Q 0,{hy_+27} 9,{hy_+20}", extra='stroke="#f2e2cf" stroke-width="3" stroke-linecap="round"'))
    p += front_arms
    t = f"translate({x},{y}) scale({-s if flip else s},{s})"
    return g(*p, t=t)

def shield(x, y, s=1):
    return g(rect(-36, -66, 72, 132, C["red"], 14), rect(-30, -60, 60, 120, "none", 10, f'stroke="{C["gold"]}" stroke-width="5"'),
             circle(0, 0, 12, C["gold"]), t=f"translate({x},{y}) scale({s})")

def house(x, y, w, h, door=True, window=True, shade=0):
    wall = [C["stone"], C["stone2"]][shade]
    p = [rect(x, y - h, w, h, wall, 6)]
    for i in range(int(h // 34)):
        for j in range(int(w // 60) + 1):
            ox = x + 8 + j * 60 + (30 if i % 2 else 0)
            if ox + 40 < x + w:
                p.append(rect(ox, y - h + 10 + i * 34, 40, 20, C["stone3"], 6, 'opacity="0.25"'))
    p.append(rect(x - 8, y - h - 12, w + 16, 16, C["stone3"], 5))
    if door:
        p.append(path(f"M {x+w*0.38},{y} L {x+w*0.38},{y-70} Q {x+w*0.5},{y-92} {x+w*0.62},{y-70} L {x+w*0.62},{y} Z", C["door"]))
    if window and h > 120:
        p.append(rect(x + w * 0.72, y - h + 30, 26, 22, C["door"], 4))
    return "".join(p)

def olive(x, y, s=1):
    return g(path("M -10,0 Q -14,-60 -2,-110 L 10,-110 Q 2,-60 12,0 Z", C["trunk"]),
             ellipse(0, -150, 80, 52, C["leaf2"]), ellipse(-40, -130, 50, 36, C["leaf"]),
             ellipse(38, -138, 52, 38, C["leaf"]), ellipse(0, -175, 52, 34, C["leaf"]),
             t=f"translate({x},{y}) scale({s})")

def donkey(x, y, s=1, load=True):
    col = "#8f8478"
    p = [rect(-70, -70, 18, 70, col, 8), rect(-40, -70, 18, 70, col, 8), rect(30, -70, 18, 70, col, 8), rect(55, -70, 18, 70, col, 8),
         ellipse(0, -95, 90, 45, col), path("M 70,-120 L 105,-185 L 135,-170 L 100,-105 Z", col),
         ellipse(128, -170, 26, 20, col), path("M 108,-188 L 102,-225 L 116,-192 Z", col), path("M 120,-190 L 124,-228 L 130,-190 Z", col),
         circle(132, -176, 4, C["eye"]), path("M -88,-100 Q -110,-80 -100,-55", extra=f'stroke="{col}" stroke-width="8" stroke-linecap="round"')]
    if load:
        p += [rect(-45, -150, 90, 40, C["rust"], 10), rect(-55, -128, 30, 50, C["ochre"], 8), rect(25, -128, 30, 50, C["ochre"], 8)]
    return g(*p, t=f"translate({x},{y}) scale({s})")

def fish(x, y, s=1, col="#7f9fb3", rot=0):
    return g(ellipse(0, 0, 22, 10, col), path("M 18,0 L 34,-10 L 34,10 Z", col), circle(-12, -2, 2.4, C["eye"]),
             t=f"translate({x},{y}) rotate({rot}) scale({s})")

def cloud(x, y, s=1):
    return g(ellipse(0, 0, 70, 26, "#ffffff", 'opacity="0.85"'), ellipse(-40, 8, 46, 20, "#ffffff", 'opacity="0.85"'),
             ellipse(38, 6, 50, 22, "#ffffff", 'opacity="0.85"'), ellipse(5, -18, 42, 24, "#ffffff", 'opacity="0.85"'), t=f"translate({x},{y}) scale({s})")

def birds(x, y):
    return "".join(path(f"M {x+dx},{y+dy} q 10,-10 20,0 q 10,-10 20,0", extra='stroke="#5d6470" stroke-width="3" stroke-linecap="round"') for dx, dy in ((0, 0), (50, -20), (95, 8)))

def svg(body, title, defs=""):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="{title}">'
            f"<title>{title}</title><defs>{defs}</defs>{body}</svg>")

def sky(id_, top, bottom):
    return f'<linearGradient id="{id_}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{top}"/><stop offset="1" stop-color="{bottom}"/></linearGradient>'

scenes = {}

# 1. Natán saluda en una calle de Nazaret
scenes["natan"] = svg(
    rect(0, 0, W, H, "url(#cielo)")
    + circle(1010, 120, 60, "#f6d47a") + circle(1010, 120, 90, "#f6d47a", 'opacity="0.25"')
    + cloud(250, 120, 1.1) + cloud(620, 200, 0.8) + birds(420, 90)
    + path("M 0,430 Q 200,330 420,400 T 820,380 T 1200,360 L 1200,750 L 0,750 Z", "#b7c68b")
    + path("M 0,480 Q 260,410 520,470 T 1200,450 L 1200,750 L 0,750 Z", "#a3b571")
    + house(70, 600, 240, 210) + house(330, 590, 170, 150, window=False, shade=1)
    + house(830, 600, 280, 230) + olive(700, 600, 1.1)
    + rect(0, 590, W, 160, C["sand"]) + path("M 0,640 Q 600,610 1200,650", extra='stroke="#d9be8c" stroke-width="10" opacity="0.6"')
    + person(560, 700, 1.05, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], left="down", right="up", mouth="open"),
    "Natán, un niño de Nazaret, saluda sonriendo en una calle de su pueblo.",
    sky("cielo", "#bfe0f0", "#f6e9cf"),
)

# 2. La familia come dentro de casa
wall = rect(0, 0, W, H, "#cdb48e")
for i in range(0, 14):
    for j in range(0, 12):
        ox = j * 110 + (55 if i % 2 else 0) - 30
        wall += rect(ox, i * 52 + 8, 96, 40, "#d5bd96", 10)
scenes["casa"] = svg(
    wall
    + path("M 860,170 L 860,120 Q 930,70 1000,120 L 1000,170 Z", "#8c6e4c") + rect(860, 165, 140, 14, "#8c6e4c")
    + circle(930, 140, 120, "url(#luz)") + ellipse(930, 150, 30, 12, "#a7683b") + path("M 950,146 Q 975,120 962,100 Q 958,128 945,140 Z", "#f6c24b")
    + rect(0, 560, W, 190, "#a98b64") + ellipse(600, 650, 500, 80, "#c4813f") + ellipse(600, 650, 470, 66, "#d6974f")
    + person(270, 640, 0.95, skin=C["skin2"], hair="beard", tunic=C["linen2"], belt=C["brown"], seated=True, left="down", right="front")
    + person(470, 635, 0.92, skin=C["skin3"], hair="veil", tunic="#d8b07a", mantle=C["blue"], seated=True, left="front", right="down")
    + person(740, 630, 0.78, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], seated=True, left="hold", right="down", mouth="open")
    + person(930, 632, 0.68, skin=C["skin3"], hair="veil", tunic="#e5a477", mantle="#c7684d", seated=True, left="down", right="front")
    + ellipse(600, 660, 70, 22, "#8a5a3b") + ellipse(600, 654, 58, 16, "#6f7f45")
    + "".join(circle(575 + k * 12, 650 + (k % 2) * 4, 6, "#3f4a2a") for k in range(5))
    + ellipse(520, 650, 34, 10, "#e9c58a") + ellipse(690, 652, 32, 10, "#e9c58a"),
    "Una familia de Nazaret come pan y aceitunas sentada en el suelo de su casa, a la luz de una lámpara de aceite.",
    '<radialGradient id="luz"><stop offset="0" stop-color="#ffe29a" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe29a" stop-opacity="0"/></radialGradient>',
)

# 3. Hacer pan en el horno de barro
scenes["pan"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + circle(180, 130, 55, "#f8d77e") + cloud(480, 110, 0.9)
    + house(640, 590, 420, 300) + olive(1120, 600, 0.9)
    + rect(0, 560, W, 190, C["sand"])
    + path("M 130,610 Q 130,420 300,420 Q 470,420 470,610 Z", "#b46a3c") + path("M 160,610 Q 160,450 300,450 Q 440,450 440,610 Z", "#c57a48")
    + path("M 240,610 Q 240,545 300,545 Q 360,545 360,610 Z", "#4a2a1c") + ellipse(300, 600, 40, 14, "#f39b3a") + ellipse(300, 596, 22, 8, "#ffd36b")
    + path("M 300,420 Q 290,370 310,330 Q 330,300 315,260", extra='stroke="#ffffff" stroke-width="10" opacity="0.5" stroke-linecap="round"')
    + person(560, 690, 0.95, skin=C["skin3"], hair="veil", tunic="#d8b07a", mantle=C["blue"], seated=True, left="front", right="front")
    + ellipse(560, 560, 60, 14, "#ecd09a")
    + person(760, 700, 0.82, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], left="hold", right="down", mouth="open", look=-1)
    + ellipse(728, 568, 34, 12, "#ecd09a"),
    "Una madre y su hijo hacen pan plano junto a un horno de barro, delante de su casa.",
    sky("cielo", "#f5d9b6", "#f8eedb"),
)

# 4. Soldados romanos por un camino de Galilea
wheat = "".join(path(f"M {x},{y} q 4,-30 0,-60", extra='stroke="#c79a3a" stroke-width="5" stroke-linecap="round"') for x in range(20, 1200, 26) for y in (520, 560))
scenes["soldados"] = svg(
    rect(0, 0, W, H, "url(#cielo)")
    + cloud(300, 120) + cloud(900, 90, 1.2) + birds(560, 150)
    + path("M 0,380 Q 300,300 600,360 T 1200,330 L 1200,750 L 0,750 Z", "#b7c68b")
    + rect(0, 450, W, 300, "#e2bb5c") + wheat
    + path("M 0,640 Q 600,580 1200,620 L 1200,750 L 0,750 Z", C["sand"])
    + person(150, 520, 0.7, skin=C["skin2"], hair="beard", tunic=C["linen2"], left="down", right="down", look=1)
    + person(280, 530, 0.62, skin=C["skin3"], hair="veil", tunic="#d8b07a", mantle=C["olive"], left="front", right="down", look=1)
    + person(640, 720, 1.0, skin=C["skin3"], hair="short", tunic=C["red"], belt="#5a3b2a", armor=True, helmet=True, left="down", right="out", look=-1, mouth="flat")
    + line(748, 545, 760, 230, "#6e5138", 7) + path("M 752,240 L 760,190 L 770,240 Z", "#a7afb6")
    + shield(575, 600)
    + person(900, 725, 1.0, skin=C["skin1"], hair="short", tunic=C["red"], belt="#5a3b2a", armor=True, helmet=True, left="down", right="down", look=-1, mouth="flat")
    + shield(835, 605),
    "Dos soldados romanos con casco y escudo pasan por un camino de Galilea mientras unos campesinos los miran desde el campo de trigo.",
    sky("cielo", "#bfe0f0", "#f3ead6"),
)

# 5. Peregrinos camino de Jerusalén
temple = (rect(690, 175, 440, 55, "#e3d6b8") + "".join(rect(700 + k * 30, 165, 16, 12, "#e3d6b8") for k in range(15))
          + rect(820, 95, 180, 80, "#f6f0e2") + "".join(rect(832 + k * 30, 110, 12, 65, "#e8dcc2") for k in range(6))
          + rect(870, 45, 80, 60, "#fbf7ee") + rect(866, 38, 88, 10, C["gold"]) + rect(814, 88, 192, 10, C["gold"])
          + path("M 893,105 L 893,72 Q 910,58 927,72 L 927,105 Z", C["gold"]))
scenes["peregrinos"] = svg(
    rect(0, 0, W, H, "url(#cielo)")
    + path("M 600,260 Q 900,150 1200,230 L 1200,750 L 600,750 Z", "#c9b98f") + temple
    + path("M 0,330 Q 400,250 700,330 T 1200,360 L 1200,750 L 0,750 Z", "#b7c68b")
    + path("M 0,450 Q 350,380 700,450 T 1200,470 L 1200,750 L 0,750 Z", "#a3b571")
    + path("M -20,750 Q 300,560 700,520 T 1220,470 L 1220,520 Q 800,570 520,640 T 180,750 Z", C["sand"])
    + donkey(270, 690, 0.85)
    + person(130, 715, 0.95, skin=C["skin2"], hair="beard", tunic=C["linen2"], mantle="#8b6b4a", left="down", right="out", look=1)
    + person(470, 700, 0.9, skin=C["skin3"], hair="veil", tunic="#d8b07a", mantle=C["blue"], left="down", right="front", look=1)
    + person(590, 690, 0.66, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], left="up", right="down", mouth="open", look=1)
    + person(780, 610, 0.62, skin=C["skin1"], hair="short", tunic=C["ochre"], left="down", right="down", look=1)
    + person(860, 600, 0.55, skin=C["skin3"], hair="veil", tunic="#e5a477", mantle="#c7684d", left="down", right="down", look=1),
    "Familias con niños y un burro caminan hacia Jerusalén; al fondo, sobre la colina, se ve el Templo blanco y dorado.",
    sky("cielo", "#bfe0f0", "#f6ecd5"),
)

# 6. Aprender a leer en la sinagoga
cols = "".join(rect(x, 120, 50, 430, "#e6d5b3", 6) + rect(x - 10, 110, 70, 22, "#d4bf97", 4) for x in (90, 1060))
scenes["sinagoga"] = svg(
    rect(0, 0, W, H, "#d9c29c") + rect(0, 0, W, 110, "#c9ae86") + cols
    + "".join(rect(x, 200, 120, 90, "#cbb38d", 10) for x in (260, 540, 820))
    + rect(0, 540, W, 210, "#b99c74") + rect(150, 560, 900, 40, "#a88a63", 8)
    + person(600, 650, 1.05, skin=C["skin2"], hair="beard", tunic=C["linen"], mantle="#f2ece0", stripe=C["blue"], left="hold", right="hold")
    + rect(520, 470, 160, 46, "#f1e4c6", 6) + rect(505, 462, 22, 62, "#8a5a3b", 8) + rect(673, 462, 22, 62, "#8a5a3b", 8)
    + "".join(rect(540, 480 + k * 9, 120, 3, "#8e7a5a") for k in range(3))
    + person(250, 710, 0.62, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], seated=True, left="down", right="down", look=1)
    + person(380, 715, 0.6, skin=C["skin3"], hair="short", tunic=C["ochre"], seated=True, left="front", right="down", look=1)
    + person(830, 715, 0.6, skin=C["skin2"], hair="curly", tunic="#c9d3a3", seated=True, left="down", right="up", mouth="open", look=-1)
    + person(960, 712, 0.62, skin=C["skin1"], hair="short", tunic=C["linen2"], seated=True, left="down", right="down", look=-1),
    "Un maestro enseña a leer un rollo de las Escrituras a un grupo de niños en una sinagoga de piedra.",
)

# 7. Pescadores en el lago de Galilea al amanecer
net = "".join(line(560 + k * 22, 470, 520 + k * 26, 640, "#6b5640", 2) for k in range(9)) + "".join(path(f"M 520,{480+k*30} Q 640,{500+k*30} 770,{480+k*30}", extra='stroke="#6b5640" stroke-width="2"') for k in range(6))
scenes["pescadores"] = svg(
    rect(0, 0, W, H, "url(#alba)") + circle(960, 330, 90, "#ffd27a") + circle(960, 330, 140, "#ffd27a", 'opacity="0.2"')
    + path("M 0,330 Q 250,250 500,320 T 1200,300 L 1200,360 L 0,360 Z", "#9a8fa6")
    + rect(0, 350, W, 400, "url(#agua)")
    + "".join(path(f"M {x},{y} q 20,-8 40,0", extra='stroke="#ffffff" stroke-width="4" opacity="0.35" stroke-linecap="round"') for x, y in ((80, 420), (300, 470), (980, 450), (1080, 560), (150, 640), (900, 680)))
    + person(330, 540, 0.95, skin=C["skin2"], hair="beard", tunic=C["linen2"], left="front", right="out", look=1)
    + person(560, 545, 0.9, skin=C["skin1"], hair="short", tunic="#9fb3c4", left="front", right="front", look=1)
    + path("M 150,520 Q 160,610 420,620 Q 640,620 700,520 Z", "#7a4f32") + path("M 150,520 L 700,520 L 690,540 L 160,540 Z", "#5f3b25")
    + line(420, 520, 420, 260, "#5f3b25", 8)
    + net + "".join(fish(560 + (k % 5) * 40, 520 + (k // 5) * 40, 0.9, ["#7f9fb3", "#a3b6c2", "#c9a85c"][k % 3], (k * 37) % 60 - 30) for k in range(13)),
    "Dos pescadores en una barca del lago de Galilea recogen al amanecer una red llena de peces.",
    sky("alba", "#f3b38a", "#fbe3c0") + sky("agua", "#7fa3b8", "#4e7891"),
)

# 8. Niños jugando a las tabas en la calle
BONE = 'stroke="#a8875f" stroke-width="1.5"'
bones = "".join(g(circle(-8, 0, 6, "#fffaf0", BONE), circle(8, 0, 6, "#fffaf0", BONE), rect(-10, -5, 20, 10, "#fffaf0", 5), t=f"translate({x},{y}) rotate({r}) scale(1.7)") for x, y, r in ((560, 640, 10), (610, 652, -25), (650, 636, 40), (590, 668, 70), (700, 656, -10)))
scenes["juegos"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + cloud(900, 110) + birds(300, 120)
    + house(40, 560, 300, 260) + house(860, 560, 300, 240, shade=1) + olive(420, 560, 0.9)
    + rect(0, 540, W, 210, C["sand"])
    + person(470, 700, 0.75, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], seated=True, left="down", right="front", mouth="open", look=1)
    + person(780, 700, 0.72, skin=C["skin3"], hair="veil", tunic="#e5a477", mantle="#c7684d", seated=True, left="front", right="down", look=-1)
    + bones + g(circle(-8, 0, 6, "#fffaf0", BONE), circle(8, 0, 6, "#fffaf0", BONE), rect(-10, -5, 20, 10, "#fffaf0", 5), t="translate(640,470) rotate(30) scale(1.7)")
    + person(1000, 720, 0.7, skin=C["skin2"], hair="short", tunic=C["ochre"], left="up", right="up", mouth="open", look=-1),
    "Niños de Nazaret juegan a las tabas sentados en la calle, delante de sus casas de piedra.",
    sky("cielo", "#bfe0f0", "#f6e9cf"),
)

def sheep(x, y, s=1):
    wool = "".join(circle(dx, dy, 22, "#f7f3ea") for dx, dy in ((-30, 0), (-10, -12), (12, -12), (30, 0), (0, 8), (-20, 10), (20, 10)))
    return g(rect(-28, 10, 9, 34, "#3b3330", 4), rect(18, 10, 9, 34, "#3b3330", 4), wool,
             ellipse(46, -6, 16, 20, "#3b3330"), ellipse(36, -18, 9, 5, "#3b3330"), circle(50, -10, 3, "#f7f3ea"), t=f"translate({x},{y}) scale({s})")

def flower(x, y, col):
    return g(line(0, 0, 0, -36, "#5c7a3a", 4), *[circle(9 * math.cos(math.radians(a)), -40 + 9 * math.sin(math.radians(a)), 7, col) for a in range(0, 360, 72)], circle(0, -40, 5, "#f6c24b"), t=f"translate({x},{y})")

# 9. Amigos de Nazaret de la mano
scenes["amigos"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + cloud(220, 110) + cloud(950, 160, 0.8) + circle(1050, 90, 50, "#f6d47a")
    + path("M 0,430 Q 300,350 600,410 T 1200,390 L 1200,750 L 0,750 Z", "#b7c68b")
    + house(60, 560, 260, 230) + house(880, 560, 260, 210, shade=1)
    + rect(0, 540, W, 210, C["sand"])
    + person(345, 700, 0.78, skin=C["skin3"], hair="veil", tunic="#e5a477", mantle="#c7684d", left="up", right="out", mouth="open")
    + person(505, 700, 0.8, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], left="out", right="out", mouth="open")
    + person(668, 700, 0.74, skin=C["skin2"], hair="short", tunic=C["ochre"], left="out", right="out")
    + person(830, 700, 0.8, skin="#e2b48c", hair="veil", tunic="#c9d3a3", mantle=C["blue"], left="out", right="up", mouth="open"),
    "Cuatro niños de Nazaret, distintos entre sí, se dan la mano en la calle de su pueblo.",
    sky("cielo", "#bfe0f0", "#f6e9cf"),
)

# 10. Natán y su abuelo miran las estrellas
import random
random.seed(7)
stars = "".join(circle(random.randint(10, 1190), random.randint(10, 420), random.choice((1.5, 2, 2.5, 3.5)), "#fff6d8", f'opacity="{random.choice((0.6, 0.8, 1))}"') for _ in range(140))
scenes["estrellas"] = svg(
    rect(0, 0, W, H, "url(#noche)") + stars
    + circle(960, 140, 46, "#fff1bf") + circle(982, 126, 42, "#1d2750")
    + path("M 0,470 Q 300,400 600,450 T 1200,430 L 1200,750 L 0,750 Z", "#2f3b5c")
    + path("M 0,560 Q 400,520 800,560 T 1200,560 L 1200,750 L 0,750 Z", "#3a4a63")
    + house(80, 600, 220, 180, shade=1).replace(C["stone2"], "#6d6a77").replace(C["stone3"], "#4f4c5a")
    + person(560, 700, 0.95, skin=C["skin2"], hair="beard", hair_color="#e9e4dc", tunic="#9c8f7a", mantle="#5b6a86", seated=True, left="down", right="up", look=1)
    + person(760, 700, 0.75, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], seated=True, left="down", right="down", mouth="open", look=-1),
    "De noche, Natán y su abuelo miran juntos el cielo lleno de estrellas.",
    sky("noche", "#101736", "#33406b"),
)

# 11. La naturaleza: el mundo que Dios nos regala
scenes["naturaleza"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + circle(170, 120, 62, "#f8d77e") + circle(170, 120, 95, "#f8d77e", 'opacity="0.25"') + cloud(620, 100) + birds(840, 120) + birds(420, 180)
    + path("M 0,380 Q 250,300 520,370 T 1200,340 L 1200,750 L 0,750 Z", "#b7c68b")
    + ellipse(930, 525, 330, 75, "#7fa3b8")
    + fish(830, 520, 1.3, "#c9a85c", -20) + fish(980, 540, 1.2, "#a3b6c2", 15) + path("M 1060,500 q 15,-30 30,0", extra='stroke="#ffffff" stroke-width="4" opacity="0.6" stroke-linecap="round"')
    + path("M 0,520 Q 300,470 560,560 Q 800,620 1200,610 L 1200,750 L 0,750 Z", "#a3b571")
    + olive(130, 600, 1.1) + olive(560, 560, 0.8)
    + sheep(330, 610) + sheep(450, 650, 0.85) + donkey(780, 700, 0.7, load=False)
    + "".join(flower(x, 720, c) for x, c in ((60, "#e8907c"), (220, "#f6c24b"), (420, "#c7a4e6"), (620, "#e8907c"), (960, "#f6c24b"), (1100, "#c7a4e6"), (1160, "#e8907c"))),
    "Un paisaje lleno de vida: el sol, el cielo con pájaros, un lago con peces, árboles, flores, ovejas y un burro.",
    sky("cielo", "#bfe0f0", "#f3ead6"),
)

# 12. La corona de Adviento
leaves = "".join(ellipse(600 + 210 * math.cos(math.radians(a)), 560 + 60 * math.sin(math.radians(a)), 46, 22, ["#3f6b3a", "#557f45", "#2f5a2f"][k % 3], f'transform="rotate({a + 90} {600 + 210 * math.cos(math.radians(a)):.1f} {560 + 60 * math.sin(math.radians(a)):.1f})"') for k, a in enumerate(range(0, 360, 15)))
def candle(x, col, lit):
    flame = path(f"M {x},300 Q {x+16},330 {x},350 Q {x-16},330 {x},300 Z", "#f6c24b") + circle(x, 336, 40, "url(#luz)") if lit else ""
    return rect(x - 22, 360, 44, 190, col, 8) + line(x, 350, x, 362, "#3b3330", 3) + flame
scenes["corona"] = svg(
    rect(0, 0, W, H, "#e9dcc4") + rect(80, 60, 300, 260, "#22305a", 10) + "".join(circle(x, y, 2.5, "#fff6d8") for x, y in ((130, 110), (200, 160), (290, 100), (340, 200), (160, 250), (250, 280))) + rect(80, 180, 300, 8, "#c9ae86") + rect(226, 60, 8, 260, "#c9ae86")
    + rect(0, 560, W, 190, "#a8764e") + rect(0, 556, W, 12, "#8a5a3b")
    + ellipse(600, 570, 260, 80, "#3f6b3a") + leaves + "".join(circle(600 + 225 * math.cos(math.radians(a)), 565 + 66 * math.sin(math.radians(a)), 9, "#c0392b") for a in range(20, 360, 45))
    + candle(470, "#6b4a9b", True) + candle(560, "#6b4a9b", False) + candle(650, "#e7a1c0", False) + candle(740, "#6b4a9b", False),
    "Una corona de Adviento sobre la mesa: un círculo de ramas verdes con cuatro velas, tres moradas y una rosa; la primera está encendida.",
    '<radialGradient id="luz"><stop offset="0" stop-color="#ffe29a" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe29a" stop-opacity="0"/></radialGradient>',
)

# 13. Un belén en casa
mini = lambda x, y, **k: person(x, y, 0.32, **k)
scenes["belen"] = svg(
    rect(0, 0, W, H, "#efe3cd") + rect(0, 0, W, 380, "#1f2a52") + "".join(circle(x, y, 2.5, "#fff6d8") for x, y in ((100, 80), (260, 140), (420, 60), (700, 120), (880, 70), (1050, 150), (1150, 60), (560, 200)))
    + path("M 600,40 L 612,80 L 652,80 L 620,104 L 632,144 L 600,120 L 568,144 L 580,104 L 548,80 L 588,80 Z", "#f6c24b") + path("M 600,120 L 560,330", extra='stroke="#f6c24b" stroke-width="3" opacity="0.5"')
    + path("M 0,380 Q 200,330 420,370 T 820,360 T 1200,380 L 1200,750 L 0,750 Z", "#557f45")
    + path("M 0,470 Q 300,420 600,470 T 1200,460 L 1200,750 L 0,750 Z", "#6f9a4f")
    + path("M 120,750 Q 260,600 420,560 Q 560,530 640,600 Q 700,660 900,640 L 900,670 Q 700,690 620,630 Q 560,570 430,600 Q 300,640 170,750 Z", "#a9c7d8")
    + house(860, 470, 140, 110, window=False) + house(1020, 500, 120, 90, shade=1, window=False) + house(80, 470, 130, 100, window=False)
    + path("M 470,500 L 470,360 L 600,300 L 730,360 L 730,500 Z", "#8a5a3b") + path("M 450,370 L 600,290 L 750,370 L 740,385 L 600,312 L 460,385 Z", "#6e4a2f") + rect(490, 380, 220, 120, "#5a3a24")
    + mini(540, 500, skin=C["skin2"], hair="beard", tunic=C["linen2"], mantle="#8b6b4a", left="down", right="down", look=1)
    + mini(660, 500, skin=C["skin3"], hair="veil", tunic="#e9dcc0", mantle=C["blue"], seated=True, left="front", right="front", look=-1)
    + rect(578, 470, 46, 26, "#c9a26a", 4) + ellipse(601, 470, 24, 9, "#efe3c0") + circle(592, 466, 8, C["skin1"])
    + sheep(300, 560, 0.45) + sheep(360, 590, 0.4) + sheep(820, 600, 0.42)
    + mini(250, 620, skin=C["skin2"], hair="beard", tunic=C["ochre"], left="up", right="down", look=1)
    + mini(960, 640, skin=C["skin1"], hair="short", tunic="#9fb3c4", left="front", right="down", look=-1),
    "Un belén en casa: el portal con María, José y el Niño, la estrella, los pastores con ovejas, casitas y un río de papel de plata.",
)

# 14. Juan bautiza en el río Jordán
water = rect(0, 560, W, 190, "url(#rio)") + "".join(path(f"M {x},{y} q 20,-8 40,0", extra='stroke="#ffffff" stroke-width="4" opacity="0.4" stroke-linecap="round"') for x, y in ((90, 610), (300, 690), (820, 640), (1040, 700), (560, 720)))
scenes["rio"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + cloud(250, 120) + cloud(900, 90, 0.9) + birds(600, 150)
    + path("M 0,380 Q 300,320 600,370 T 1200,350 L 1200,600 L 0,600 Z", "#c9b98f")
    + path("M 0,470 Q 300,430 600,480 T 1200,470 L 1200,600 L 0,600 Z", "#b7c68b")
    + olive(1080, 560, 0.9) + olive(140, 540, 0.8)
    + person(170, 600, 0.7, skin=C["skin2"], hair="beard", tunic=C["linen2"], left="down", right="down", look=1)
    + person(270, 600, 0.66, skin=C["skin3"], hair="veil", tunic="#d8b07a", mantle=C["blue"], left="front", right="down", look=1)
    + person(1000, 600, 0.68, skin=C["skin1"], hair="short", tunic=C["ochre"], left="down", right="down", look=-1)
    + person(520, 760, 1.0, skin=C["skin2"], hair="beard", tunic="#8b6b4a", belt="#4a3424", left="down", right="up", look=1)
    + ellipse(590, 455, 30, 12, "#8a5a3b") + "".join(line(585 + k * 6, 470, 600 + k * 9, 540, "#cfe8f2", 3, 'opacity="0.8"') for k in range(4))
    + person(680, 760, 0.92, skin=C["skin1"], hair="short", tunic="#efe6d6", left="front", right="front", look=-1)
    + water,
    "En el río Jordán, Juan el Bautista bautiza a un hombre mientras mucha gente espera en la orilla.",
    sky("cielo", "#bfe0f0", "#f3ead6") + '<linearGradient id="rio" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb0c8" stop-opacity="0.85"/><stop offset="1" stop-color="#4f7f99"/></linearGradient>',
)

# 15. El pastor encuentra la oveja perdida
rocks = "".join(ellipse(x, y, rx, ry, c) for x, y, rx, ry, c in ((780, 610, 120, 60, "#a29a8c"), (900, 640, 90, 50, "#8f877a"), (260, 650, 110, 55, "#a29a8c"), (1100, 600, 80, 45, "#8f877a")))
scenes["pastor"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + circle(1030, 130, 55, "#f8d77e") + cloud(300, 110)
    + path("M 0,420 Q 300,300 650,390 T 1200,360 L 1200,750 L 0,750 Z", "#a9ba7a")
    + path("M 0,560 Q 400,500 800,560 T 1200,560 L 1200,750 L 0,750 Z", "#97ab68") + rocks
    + sheep(120, 560, 0.55) + sheep(200, 590, 0.5) + sheep(90, 610, 0.5) + sheep(170, 640, 0.55)
    + g(sheep(0, 0, 1.0), t="translate(590,440) scale(2.2,1.3)")
    + person(600, 720, 1.05, skin=C["skin2"], hair="beard", tunic=C["linen2"], mantle="#8b6b4a", left="up", right="up", look=0, mouth="open")
    + "".join(path(f"M {x},{y} c -10,-14 -30,-6 -22,8 l 22,20 l 22,-20 c 8,-14 -12,-22 -22,-8 z", "#e8907c") for x, y in ((470, 300), (740, 280))),
    "Un pastor ha encontrado a su oveja perdida y la lleva feliz sobre los hombros; al fondo espera el rebaño.",
    sky("cielo", "#bfe0f0", "#f3ead6"),
)

# 16. Zaqueo en el árbol
scenes["zaqueo"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + cloud(200, 100) + circle(1080, 110, 50, "#f8d77e")
    + rect(0, 520, W, 230, C["sand"]) + house(40, 540, 230, 200) + house(980, 540, 200, 180, shade=1)
    + path("M 620,540 Q 600,400 640,300 L 690,300 Q 660,420 700,540 Z", C["trunk"]) + path("M 650,330 Q 560,280 520,230", extra=f'stroke="{C["trunk"]}" stroke-width="22" stroke-linecap="round"') + path("M 670,320 Q 760,270 800,220", extra=f'stroke="{C["trunk"]}" stroke-width="22" stroke-linecap="round"')
    + ellipse(660, 200, 260, 120, C["leaf2"]) + ellipse(520, 230, 130, 80, C["leaf"])
    + ellipse(700, 120, 140, 70, C["leaf"]) + ellipse(820, 200, 110, 60, C["leaf"])
    + person(500, 300, 0.6, skin=C["skin1"], hair="beard", tunic=C["ochre"], stripe=C["red"], left="up", right="down", look=1, mouth="open")
    + ellipse(505, 300, 70, 26, C["leaf2"])
    + person(300, 720, 0.8, skin=C["skin2"], hair="beard", tunic=C["linen2"], left="down", right="up", look=1)
    + person(420, 730, 0.75, skin=C["skin3"], hair="veil", tunic="#d8b07a", mantle=C["blue"], left="front", right="down", look=1)
    + person(880, 730, 0.75, skin=C["skin1"], hair="short", tunic="#9fb3c4", left="down", right="down", look=-1)
    + person(1010, 735, 0.7, skin=C["skin3"], hair="veil", tunic="#e5a477", mantle="#c7684d", left="down", right="front", look=-1),
    "Zaqueo, un hombre bajito, se ha subido a un árbol para ver pasar a Jesús entre la gente.",
    sky("cielo", "#bfe0f0", "#f3ead6"),
)

# 17. Hacer las paces
hearts = "".join(path(f"M {x},{y} c -10,-14 -30,-6 -22,8 l 22,20 l 22,-20 c 8,-14 -12,-22 -22,-8 z", c) for x, y, c in ((560, 280, "#e8907c"), (620, 240, "#f2b53a"), (680, 290, "#e8907c")))
scenes["paces"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + cloud(900, 120) + birds(240, 120)
    + path("M 0,430 Q 300,350 600,410 T 1200,390 L 1200,750 L 0,750 Z", "#b7c68b")
    + house(60, 560, 280, 240) + house(860, 560, 280, 220, shade=1) + rect(0, 540, W, 210, C["sand"])
    + person(530, 720, 0.95, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], left="down", right="out", mouth="open", look=1)
    + person(735, 720, 0.92, skin=C["skin2"], hair="short", tunic="#c9d3a3", left="out", right="down", mouth="open", look=-1)
    + hearts + circle(340, 700, 18, "#c2593b") + path("M 330,688 q 10,-12 20,0", extra='stroke="#8a3a25" stroke-width="3"'),
    "Dos niños de Nazaret que se habían enfadado se dan la mano y sonríen; junto a ellos, su pelota.",
    sky("cielo", "#bfe0f0", "#f6e9cf"),
)

# 18. Domingo de Ramos
def palm(x, y, s=1):
    leaves = "".join(path(f"M 0,{-20 - k * 22} q {side * 40},-6 {side * 70},18", extra='stroke="#c7a54a" stroke-width="8" stroke-linecap="round"') for k in range(6) for side in (-1, 1))
    return g(line(0, 0, 0, -170, "#b8963c", 8), leaves, t=f"translate({x},{y}) scale({s})")
def olive_branch(x, y, s=1):
    return g(line(0, 0, 0, -140, "#6e5138", 6), *[ellipse(side * 18, -30 - k * 22, 18, 8, "#7e9150", f'transform="rotate({side * 30} {side * 18} {-30 - k * 22})"') for k in range(5) for side in (-1, 1)], t=f"translate({x},{y}) scale({s})")
scenes["ramos"] = svg(
    rect(0, 0, W, H, "url(#cielo)") + cloud(200, 120) + circle(1060, 110, 50, "#f8d77e")
    + rect(330, 150, 540, 420, "#f4efe4") + path("M 330,150 L 600,40 L 870,150 Z", "#e2d6bf") + rect(560, 0, 80, 150, "#f4efe4") + path("M 560,0 L 600,-40 L 640,0 Z", "#e2d6bf")
    + path("M 520,570 L 520,380 Q 600,300 680,380 L 680,570 Z", "#7c5034") + circle(600, 230, 48, "#bcd3e3") + line(600, 182, 600, 278, "#8a7a5c", 4) + line(552, 230, 648, 230, "#8a7a5c", 4)
    + rect(0, 560, W, 190, "#d9c9a8")
    + palm(250, 640, 1) + person(230, 720, 0.75, skin=C["skin1"], hair="curly", tunic="#e4574b", belt="#e4574b", left="down", right="up", mouth="open")
    + olive_branch(445, 600, 1.1) + person(430, 720, 0.7, skin=C["skin3"], hair="short", tunic="#4f8fd1", belt="#4f8fd1", left="up", right="down", mouth="open")
    + palm(790, 630, 1.05) + person(780, 720, 0.74, skin=C["skin2"], hair="curly", tunic="#f2b53a", belt="#f2b53a", left="down", right="up", mouth="open", look=-1)
    + olive_branch(985, 610, 1.05) + person(970, 725, 0.72, skin="#e2b48c", hair="short", tunic="#59a36b", belt="#59a36b", left="up", right="down", look=-1),
    "Niños de hoy con palmas y ramas de olivo celebran el Domingo de Ramos a la puerta de una iglesia.",
    sky("cielo", "#bfe0f0", "#f6e9cf"),
)

# 19. Procesión de Semana Santa
def nazareno(x, y, s=1, robe="#f3efe6", cap="#5b2a6e"):
    return g(path("M -40,0 L -30,-200 L 30,-200 L 40,0 Z", robe), path("M -26,-196 L 0,-330 L 26,-196 Z", cap), rect(-30, -205, 60, 26, cap, 6),
             rect(-10, -240, 7, 8, "#1b1b1b", 3), rect(4, -240, 7, 8, "#1b1b1b", 3), rect(-48, -120, 96, 12, cap, 5),
             rect(30, -150, 12, 120, "#f8f1df", 3), path("M 36,-152 Q 46,-166 36,-180 Q 26,-166 36,-152 Z", "#f6c24b"), circle(36, -164, 26, "url(#luz)"),
             t=f"translate({x},{y}) scale({s})")
candles = "".join(rect(x, 300, 10, 60, "#f8f1df", 3) + path(f"M {x+5},298 Q {x+12},288 {x+5},278 Q {x-2},288 {x+5},298 Z", "#f6c24b") + circle(x + 5, 290, 18, "url(#luz)") for x in range(560, 960, 34))
scenes["procesion"] = svg(
    rect(0, 0, W, H, "url(#noche)") + "".join(circle(x, y, 2.2, "#fff6d8") for x, y in ((80, 60), (200, 110), (330, 50), (1120, 90), (1010, 40)))
    + rect(0, 120, 300, 520, "#e9e4da") + rect(30, 220, 70, 110, "#5e6b85", 4) + rect(170, 220, 70, 110, "#5e6b85", 4) + rect(20, 330, 90, 10, "#3b3b3b") + rect(160, 330, 90, 10, "#3b3b3b")
    + rect(980, 140, 220, 500, "#ece6dc") + rect(1020, 240, 70, 110, "#5e6b85", 4) + rect(1010, 350, 90, 10, "#3b3b3b")
    + rect(0, 600, W, 150, "#5b5a62")
    + rect(520, 360, 470, 200, "#d4a53a", 10) + rect(500, 540, 510, 100, "#6b1f2e", 8) + "".join(circle(540 + k * 52, 380, 14, "#c0392b") for k in range(9))
    + candles + line(540, 360, 540, 130, "#d4a53a", 6) + line(970, 360, 970, 130, "#d4a53a", 6) + rect(520, 110, 470, 40, "#6b1f2e", 6) + "".join(rect(530 + k * 30, 150, 8, 22, "#d4a53a", 3) for k in range(15))
    + path("M 755,360 L 690,180 Q 755,140 820,180 Z", "#f3efe6") + path("M 700,360 L 755,190 L 810,360 Z", "#2c3f7a") + circle(755, 200, 26, C["skin3"]) + path("M 729,196 Q 755,160 781,196", extra='stroke="#f3efe6" stroke-width="10"') + path("M 732,176 L 755,150 L 778,176 L 770,168 L 755,158 L 740,168 Z", "#e3b341")
    + nazareno(150, 700, 0.8) + nazareno(330, 690, 0.8) + nazareno(430, 705, 0.75, cap="#2c3f7a")
    + person(1080, 735, 0.75, skin=C["skin1"], hair="short", tunic="#4f8fd1", belt="#4f8fd1", left="down", right="down", look=-1)
    + person(1170, 740, 0.6, skin=C["skin1"], hair="curly", tunic="#e4574b", belt="#e4574b", left="up", right="down", look=-1, mouth="open"),
    "De noche, un paso con flores y velas avanza por una calle; delante van nazarenos con cirios y una familia lo mira desde la acera.",
    sky("noche", "#141c3c", "#2c3866") + '<radialGradient id="luz"><stop offset="0" stop-color="#ffe29a" stop-opacity="0.85"/><stop offset="1" stop-color="#ffe29a" stop-opacity="0"/></radialGradient>',
)

os.makedirs(OUT, exist_ok=True)
for name, content in scenes.items():
    with open(os.path.join(OUT, f"{name}.svg"), "w") as f:
        f.write(content)
    print(name, len(content))

# Cara de Natán para el avatar del narrador
face = person(100, 372, 1.0, skin=C["skin1"], hair="curly", tunic=C["linen"], stripe=C["rust"], mouth="open")
with open(os.path.join(OUT, "natan-cara.svg"), "w") as f:
    f.write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 30 150 150"><circle cx="100" cy="105" r="75" fill="#f2b53a"/>'
            '<clipPath id="c"><circle cx="100" cy="105" r="75"/></clipPath><g clip-path="url(#c)">' + face + "</g></svg>")
