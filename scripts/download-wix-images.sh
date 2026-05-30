#!/usr/bin/env bash
set -euo pipefail
export NO_PROXY="*"
export no_proxy="*"
for v in HTTP_PROXY HTTPS_PROXY http_proxy https_proxy ALL_PROXY all_proxy; do unset "$v" 2>/dev/null || true; done
OUT="/Users/malcolmgovender/intelligencehub/natal-stainless/public/images"
TMP="/Users/malcolmgovender/intelligencehub/natal-stainless/tmp"
mkdir -p "$OUT" "$TMP"
UA="Mozilla/5.0"
curl_noproxy() { curl --noproxy "*" -fsSL --max-time 120 -A "$UA" "$@"; }
highres_url() {
  local u="$1"; u="${u%%/v1/*}"
  echo "${u}/v1/fill/w_1920,h_1920,al_c,q_85/${u##*/}"
}
fetch_pages() {
  curl_noproxy https://www.natal-stainlesssteel.co.za/ -o "$TMP/natal-home.html"
  curl_noproxy https://www.natal-stainlesssteel.co.za/projects -o "$TMP/natal-projects.html"
  curl_noproxy https://www.natal-stainlesssteel.co.za/accreditation -o "$TMP/natal-accreditation.html"
}
fetch_pages
curl_noproxy https://static.wixstatic.com/media/833a68_438298f1dbd849ab936149d78652e99f~mv2.gif -o "$OUT/natal-logo.gif"
echo done
