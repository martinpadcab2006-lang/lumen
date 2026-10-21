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
           helmet=False, armor=False, flip=False, look=0):
    """Persona de frente, pies en (x, y). look desplaza los ojos (-1 izquierda, 1 derecha)."""
    sleeve = sleeve or tunic
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
            p.append(circle(37 * math.cos(r), hy_ + 37 * math.sin(r), 17, C["hair"]))
    if hair in ("short", "beard"):
        p.append(path(f"M -41,{hy_+4} Q -44,{hy_-48} 0,{hy_-46} Q 44,{hy_-48} 41,{hy_+4} Z", C["hair"]))
    p.append(circle(hx_, hy_, 40, skin))
    if hair == "curly":
        for a in range(205, 340, 26):
            r = math.radians(a)
            p.append(circle(30 * math.cos(r), hy_ - 8 + 30 * math.sin(r), 13, C["hair"]))
    if hair in ("short", "beard"):
        p.append(path(f"M -38,{hy_-6} Q -30,{hy_-44} 0,{hy_-42} Q 30,{hy_-44} 38,{hy_-6} Q 20,{hy_-24} 0,{hy_-22} Q -20,{hy_-24} -38,{hy_-6} Z", C["hair"]))
    if hair == "beard":
        p.append(path(f"M -38,{hy_+2} Q -36,{hy_+48} 0,{hy_+52} Q 36,{hy_+48} 38,{hy_+2} Q 30,{hy_+28} 0,{hy_+24} Q -30,{hy_+28} -38,{hy_+2} Z", C["hair"]))
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
