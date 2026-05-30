#!/usr/bin/env python3
"""Download Natal Stainless Wix assets. Run with proxies disabled:
NO_PROXY='*' HTTPS_PROXY='' HTTP_PROXY='' python3 scripts/download_wix_images.py
"""
import os, re, sys
from pathlib import Path
from urllib.parse import unquote
from urllib.request import Request, urlopen

for k in list(os.environ):
    if "proxy" in k.lower() or k in ("ALL_PROXY",):
        os.environ.pop(k, None)
os.environ["NO_PROXY"] = "*"

OUT = Path(__file__).resolve().parents[1] / "public" / "images"
TMP = Path(__file__).resolve().parents[1] / "tmp"
OUT.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"

PAGES = [
    ("https://www.natal-stainlesssteel.co.za/", "natal-home.html"),
    ("https://www.natal-stainlesssteel.co.za/projects", "natal-projects.html"),
    ("https://www.natal-stainlesssteel.co.za/accreditation", "natal-accreditation.html"),
]
KNOWN = {
    "natal-logo.gif": "https://static.wixstatic.com/media/833a68_438298f1dbd849ab936149d78652e99f~mv2.gif",
    "accreditation.jpg": "https://static.wixstatic.com/media/833a68_9b86cab2522540ac971bec865e89a32d~mv2.jpg",
    "bee-certificate.jpg": "https://static.wixstatic.com/media/833a68_967a67dedcbb41dda8955178906e0d9d~mv2.jpg",
}
MEDIA_RE = re.compile(
    r"https://static\.wixstatic\.com/media/[^\s\"'<>\\]+", re.I
)

def fetch(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": UA})
    with urlopen(req, timeout=120) as r:
        return r.read()

def highres(base: str) -> str:
    base = re.sub(r"/v1/.*", "", base)
    name = base.rsplit("/", 1)[-1]
    return f"{base}/v1/fill/w_1920,h_1920,al_c,q_85/{name}"

def save(url: str, dest: Path) -> None:
    dest.write_bytes(fetch(url))

def extract(html: str) -> list[str]:
    urls = [unquote(u).replace("\\u002F", "/") for u in MEDIA_RE.findall(html)]
    return list(dict.fromkeys(urls))

def main():
    failed = []
    html_blobs = {}
    for page_url, fname in PAGES:
        try:
            data = fetch(page_url).decode("utf-8", "ignore")
            (TMP / fname).write_text(data, encoding="utf-8")
            html_blobs[fname] = data
        except Exception as e:
            failed.append((page_url, str(e)))

    home = html_blobs.get("natal-home.html", "")
    for h in ("1809524", "fleet", "pipes", "warehouse", "about"):
        if h in home:
            print(f"home contains token: {h}")
    hashes = sorted(set(re.findall(r"(?:833a68|026a55)_[a-f0-9]{32}|1809524", home)))
    print("home hashes sample:", hashes[:15])

    for name, url in KNOWN.items():
        try:
            save(highres(url) if url.endswith((".jpg", ".jpeg", ".png")) else url,
                 OUT / name)
        except Exception as e:
            failed.append((url, str(e)))

    proj_html = html_blobs.get("natal-projects.html", "")
    proj_urls = [
        u for u in extract(proj_html)
        if re.search(r"(026a55_|833a68_)", u) and re.search(r"\.(jpe?g|png|webp)", u, re.I)
    ]
    for i, raw in enumerate(proj_urls[:8], 1):
        base = re.sub(r"/v1/.*", "", raw)
        ext = "png" if ".png" in base.lower() else "jpg"
        dest = OUT / f"project-{i:02d}.{ext}"
        try:
            save(highres(base), dest)
        except Exception as e:
            failed.append((raw, str(e)))

    home_urls = [u for u in extract(home) if re.search(r"\.(jpe?g|png)", u, re.I)]
    hero = next((u for u in home_urls if "1809524" in u), None) or (home_urls[0] if home_urls else None)
    if hero:
        try:
            save(highres(re.sub(r"/v1/.*", "", hero)), OUT / "hero.jpg")
        except Exception as e:
            failed.append((hero, str(e)))

    section_names = ["pipes.jpg", "warehouse.jpg", "fleet.jpg", "about.jpg"]
    for i, dest_name in enumerate(section_names):
        if i + 1 < len(home_urls):
            try:
                save(highres(re.sub(r"/v1/.*", "", home_urls[i + 1])), OUT / dest_name)
            except Exception as e:
                failed.append((home_urls[i + 1], str(e)))

    print("\n=== saved ===")
    for p in sorted(OUT.iterdir()):
        if p.is_file():
            print(f"{p.name}\t{p.stat().st_size}")
    if failed:
        print("\n=== failed ===")
        for u, e in failed:
            print(u, e)
    return 1 if failed else 0

if __name__ == "__main__":
    sys.exit(main())
