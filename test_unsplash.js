async function test() {
  const res = await fetch("https://unsplash.com/napi/search/photos?query=mens+fashion&per_page=30", {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" }
  });
  if (res.redirected || !res.ok) { console.log(res.status, "Redirected or failed"); return; }
  const json = await res.json();
  console.log(json.results.map(r => r.id).slice(0, 5));
}
test();
