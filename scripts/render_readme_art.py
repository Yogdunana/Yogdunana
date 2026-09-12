#!/usr/bin/env python3
"""Render GitHub profile README artwork. Fonts live in assets/fonts/ (not committed)."""

from __future__ import annotations

import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = ROOT / "assets" / "fonts"
OUT = ROOT / "assets"

BG = (12, 11, 10, 255)
INK = (244, 239, 230, 255)
INK_DIM = (183, 177, 166, 255)
INK_FAINT = (122, 116, 106, 255)
COPPER = (196, 165, 116, 255)
COPPER_DIM = (138, 115, 79, 255)
MIST = (143, 191, 184, 255)
ELEV = (20, 18, 16, 255)
LINE = (48, 44, 38, 255)
LINE_STRONG = (110, 92, 64, 255)

SCALE = 2


def s(n: float) -> int:
    return int(round(n * SCALE))


def font(name: str, size: float) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), s(size))


def canvas(w: float, h: float) -> Image.Image:
    img = Image.new("RGBA", (s(w), s(h)), BG)
    return img


def draw_radial(img: Image.Image) -> None:
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    px = overlay.load()
    w, h = img.size
    cx, cy = int(w * 0.78), int(h * 0.08)
    max_r = (w**2 + h**2) ** 0.5 * 0.55
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            a = max(0, 28 - int(28 * d / max_r))
            if a:
                px[x, y] = (196, 165, 116, a)
    img.alpha_composite(overlay.filter(ImageFilter.GaussianBlur(radius=s(18))))


def grain(img: Image.Image, amount: int = 14) -> None:
    noise = Image.new("RGBA", img.size, (0, 0, 0, 0))
    px = noise.load()
    w, h = img.size
    rng = random.Random(7)
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            v = rng.randint(0, amount)
            px[x, y] = (255, 255, 255, v)
    img.alpha_composite(noise)


def tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill,
    tracking: float,
) -> None:
    x, y = s(xy[0]), s(xy[1])
    gap = s(tracking)
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill, anchor="ls")
        x += int(draw.textlength(ch, font=fnt)) + gap


def round_rect(
    draw: ImageDraw.ImageDraw,
    box: tuple[float, float, float, float],
    radius: float,
    *,
    fill=None,
    outline=None,
    width: float = 1,
) -> None:
    x0, y0, x1, y1 = (s(v) for v in box)
    draw.rounded_rectangle(
        (x0, y0, x1, y1),
        radius=s(radius),
        fill=fill,
        outline=outline,
        width=s(width) if outline else 0,
    )


def chip(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float],
    text: str,
    fnt: ImageFont.FreeTypeFont,
) -> float:
    x, y = xy
    pad_x, pad_y = 14, 8
    tw = fnt.getlength(text) / SCALE
    th = 14
    round_rect(
        draw,
        (x, y, x + tw + pad_x * 2, y + th + pad_y * 2),
        2,
        outline=LINE_STRONG,
        width=1.2,
    )
    draw.text(
        (s(x + pad_x), s(y + pad_y + th)),
        text,
        font=fnt,
        fill=COPPER,
        anchor="ls",
    )
    return tw + pad_x * 2 + 10


def corners(draw: ImageDraw.ImageDraw, box: tuple[float, float, float, float], arm: float = 22) -> None:
    x0, y0, x1, y1 = box
    w = 1.4
    # top-left
    draw.line([(s(x0), s(y0 + arm)), (s(x0), s(y0)), (s(x0 + arm), s(y0))], fill=COPPER, width=s(w))
    # top-right
    draw.line([(s(x1 - arm), s(y0)), (s(x1), s(y0)), (s(x1), s(y0 + arm))], fill=COPPER, width=s(w))
    # bottom-left
    draw.line([(s(x0), s(y1 - arm)), (s(x0), s(y1)), (s(x0 + arm), s(y1))], fill=COPPER, width=s(w))
    # bottom-right
    draw.line([(s(x1 - arm), s(y1)), (s(x1), s(y1)), (s(x1), s(y1 - arm))], fill=COPPER, width=s(w))


def place_portrait(img: Image.Image, path: Path, box: tuple[float, float, float, float]) -> None:
    x, y, w, h = box
    src = Image.open(path).convert("RGB")
    tw, th = s(w), s(h)
    scale = max(tw / src.width, th / src.height)
    nw, nh = int(src.width * scale), int(src.height * scale)
    src = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = max(0, int((nh - th) * 0.12))
    src = src.crop((left, top, left + tw, top + th))
    img.paste(src, (s(x), s(y)))
    d = ImageDraw.Draw(img)
    d.rectangle((s(x), s(y), s(x + w), s(y + h)), outline=LINE_STRONG, width=s(1))
    corners(d, (x + 6, y + 6, x + w - 6, y + h - 6), 16)


def save(img: Image.Image, name: str) -> None:
    grain(img)
    out = img.convert("RGB")
    if SCALE != 1:
        out = out.resize((img.width // SCALE, img.height // SCALE), Image.Resampling.LANCZOS)
    dest = OUT / name
    out.save(dest, "PNG", optimize=True)
    print("wrote", dest, dest.stat().st_size)


def render_banner() -> None:
    w, h = 1920, 560
    img = canvas(w, h)
    draw_radial(img)
    d = ImageDraw.Draw(img)

    inset = 36
    corners(d, (inset, inset, w - inset, h - inset), 28)
    d.rectangle(
        (s(inset), s(inset), s(w - inset), s(h - inset)),
        outline=(*COPPER[:3],),
        width=s(1),
    )

    kicker = font("Outfit-400.ttf", 15)
    tracked(d, (80, 108), "SHENZHEN  ·  SMBU", kicker, COPPER, 6)

    name = font("NotoSerifSC-600.ttf", 118)
    d.text((s(80), s(250)), "段茗尧", font=name, fill=INK, anchor="ls")

    italic = font("Playfair-Italic-400.ttf", 34)
    d.text((s(84), s(318)), "MingYao Duan", font=italic, fill=COPPER, anchor="ls")

    body = font("NotoSansSC-Regular.ttf", 20)
    d.text(
        (s(84), s(392)),
        "深北莫的建造者  ·  计算机协会会长  ·  Founder",
        font=body,
        fill=INK_DIM,
        anchor="ls",
    )

    en = font("Outfit-400.ttf", 16)
    d.text(
        (s(84), s(428)),
        "Builder  ·  Computer Association President  ·  Founder",
        font=en,
        fill=INK_FAINT,
        anchor="ls",
    )

    chip_font = font("NotoSansSC-Regular.ttf", 13)
    x = 84
    for label in ("计算机协会会长", "校团委助理", "Founder"):
        x += chip(d, (x, 468), label, chip_font)

    place_portrait(img, ROOT / "web" / "public" / "portrait.jpg", (1388, 90, 420, 380))
    cap = font("Outfit-400.ttf", 12)
    tracked(d, (1388, 492), "SHENZHEN, CHINA", cap, INK_FAINT, 4)

    d.ellipse((s(w - 78), s(72), s(w - 68), s(82)), fill=COPPER)

    save(img, "banner.png")


def section_label(d: ImageDraw.ImageDraw, x: float, y: float, kicker: str, title: str) -> None:
    kick = font("Outfit-400.ttf", 13)
    title_f = font("NotoSerifSC-600.ttf", 36)
    tracked(d, (x, y), kicker, kick, COPPER, 5)
    d.text((s(x), s(y + 44)), title, font=title_f, fill=INK, anchor="ls")


def card_panel(
    d: ImageDraw.ImageDraw,
    box: tuple[float, float, float, float],
    kicker: str,
    title: str,
    body: str,
) -> None:
    round_rect(d, box, 4, fill=ELEV, outline=LINE, width=1)
    x0, y0, _, _ = box
    kick = font("Outfit-400.ttf", 12)
    title_f = font("NotoSerifSC-600.ttf", 24)
    body_f = font("NotoSansSC-Regular.ttf", 16)
    tracked(d, (x0 + 28, y0 + 42), kicker, kick, COPPER, 3)
    d.text((s(x0 + 28), s(y0 + 84)), title, font=title_f, fill=INK, anchor="ls")
    d.text((s(x0 + 28), s(y0 + 128)), body, font=body_f, fill=INK_DIM, anchor="ls")


def render_now() -> None:
    w, h = 1920, 340
    img = canvas(w, h)
    d = ImageDraw.Draw(img)
    section_label(d, 8, 36, "NOW", "现在")
    cards = [
        ("PRESIDENT", "计算机协会会长", "深圳北理莫斯科大学计算机协会"),
        ("ASSISTANT", "校团委助理", "深圳北理莫斯科大学校团委"),
        ("FOUNDER", "Founder", "CMAMSys  ·  DeployPilot  ·  StarByte  ·  YogduOJ"),
    ]
    gap, left, top = 18, 8, 118
    cw = (w - left * 2 - gap * 2) / 3
    ch = 188
    for i, (kick, title, body) in enumerate(cards):
        x = left + i * (cw + gap)
        card_panel(d, (x, top, x + cw, top + ch), kick, title, body)
    save(img, "now.png")


def render_honors() -> None:
    w, h = 1920, 340
    img = canvas(w, h)
    d = ImageDraw.Draw(img)
    section_label(d, 8, 36, "HONORS", "荣誉")
    cards = [
        ("NATIONAL THIRD", "MathorCup", "数学建模国家三等奖"),
        ("NATIONAL THIRD", "深圳杯", "数学建模国家三等奖"),
        ("NATIONAL THIRD", "GMC", "国际企业管理挑战赛国家三等奖"),
    ]
    gap, left, top = 18, 8, 118
    cw = (w - left * 2 - gap * 2) / 3
    ch = 188
    for i, (kick, title, body) in enumerate(cards):
        x = left + i * (cw + gap)
        card_panel(d, (x, top, x + cw, top + ch), kick, title, body)
    save(img, "honors.png")


def render_work_card(
    filename: str,
    index: str,
    name: str,
    note: str | None,
    blurb: str,
    tags: str,
) -> None:
    w, h = 936, 280
    img = canvas(w, h)
    d = ImageDraw.Draw(img)
    round_rect(d, (0, 0, w, h), 4, fill=ELEV, outline=LINE, width=1)
    idx = font("Playfair-Italic-400.ttf", 22)
    name_f = font("Outfit-500.ttf", 34)
    body_f = font("NotoSansSC-Regular.ttf", 17)
    tag_f = font("Outfit-400.ttf", 14)
    note_f = font("Outfit-400.ttf", 11)

    d.text((s(32), s(58)), index, font=idx, fill=COPPER, anchor="ls")
    d.text((s(32), s(118)), name, font=name_f, fill=INK, anchor="ls")
    if note:
        tw = note_f.getlength(note) / SCALE
        round_rect(
            d,
            (32 + 8 + name_f.getlength(name) / SCALE, 86, 32 + 8 + name_f.getlength(name) / SCALE + tw + 18, 114),
            2,
            outline=MIST,
            width=1,
        )
        d.text(
            (s(32 + 17 + name_f.getlength(name) / SCALE), s(108)),
            note,
            font=note_f,
            fill=MIST,
            anchor="ls",
        )
    d.text((s(32), s(172)), blurb, font=body_f, fill=INK_DIM, anchor="ls")
    d.text((s(32), s(228)), tags, font=tag_f, fill=INK_FAINT, anchor="ls")
    d.text((s(w - 36), s(228)), "GitHub  →", font=tag_f, fill=COPPER, anchor="rs")
    save(img, filename)


def render_work_header() -> None:
    w, h = 1920, 96
    img = canvas(w, h)
    d = ImageDraw.Draw(img)
    section_label(d, 8, 28, "SELECTED WORK", "精选建造")
    save(img, "work-header.png")


def render_stack() -> None:
    w, h = 1920, 140
    img = canvas(w, h)
    d = ImageDraw.Draw(img)
    section_label(d, 8, 28, "STACK", "常用技术")
    items = ["Go", "TypeScript", "Python", "React", "Vue", "Docker", "PostgreSQL"]
    fnt = font("Outfit-400.ttf", 18)
    x = 8
    y = 108
    for i, item in enumerate(items):
        d.text((s(x), s(y)), item, font=fnt, fill=INK_DIM, anchor="ls")
        x += fnt.getlength(item) / SCALE
        if i < len(items) - 1:
            x += 14
            d.text((s(x), s(y)), "·", font=fnt, fill=COPPER, anchor="ls")
            x += 14 + fnt.getlength("·") / SCALE
    save(img, "stack.png")


def render_cta() -> None:
    label = "Visit the site  →"
    fnt = font("Outfit-500.ttf", 16)
    # measure on a throwaway draw
    tmp = Image.new("RGBA", (8, 8), (0, 0, 0, 0))
    tw = ImageDraw.Draw(tmp).textlength(label, font=fnt) / SCALE
    bw, bh = tw + 56, 52
    img = canvas(bw, bh)
    d = ImageDraw.Draw(img)
    round_rect(d, (0, 0, bw, bh), 2, fill=COPPER)
    d.text((s(bw / 2), s(bh / 2 + 1)), label, font=fnt, fill=BG, anchor="mm")
    save(img, "cta.png")


def main() -> None:
    render_banner()
    render_now()
    render_honors()
    render_work_header()
    render_work_card(
        "work-cmamsys.png",
        "01",
        "CMAMSys",
        "PATENT PENDING",
        "竞赛数学自动建模系统。把赛题、建模与协作收进同一条工作流。",
        "TypeScript  ·  Next.js  ·  Python  ·  PostgreSQL",
    )
    render_work_card(
        "work-deploypilot.png",
        "02",
        "DeployPilot",
        None,
        "AI 原生部署网关。让沙箱里的 AI IDE 通过 MCP 连上真实基础设施。",
        "Go  ·  MCP  ·  Docker  ·  Kubernetes  ·  Vue",
    )
    render_work_card(
        "work-starbyte.png",
        "03",
        "StarByte",
        None,
        "公司与计算机协会共用的内部综合管理系统。",
        "Go",
    )
    render_work_card(
        "work-yogduoj.png",
        "04",
        "YogduOJ",
        None,
        "自研在线评测，覆盖程序设计竞赛、算法赛与 CTF 练习。",
        "Go",
    )
    render_stack()
    render_cta()


if __name__ == "__main__":
    main()
