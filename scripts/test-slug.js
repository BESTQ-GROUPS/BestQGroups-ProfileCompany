async function run() {
  const r = await fetch('http://localhost:3005/produk');
  const t = await r.text();
  const m = t.match(/href="\/produk\/([^"]+)"/);
  const slug = m ? m[1] : null;
  console.log('Slug:', slug);
  if (slug) {
    const r2 = await fetch('http://localhost:3005/produk/' + slug);
    const t2 = await r2.text();
    if (!r2.ok) {
       console.log("Error response:", t2.substring(0, 500));
    } else {
       console.log("Success! Rendered HTML:", t2.substring(0, 500));
    }
  }
}
run();
