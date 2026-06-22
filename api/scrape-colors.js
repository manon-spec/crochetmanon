export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'Missing url param' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; bot/1.0)' }
    });
    const html = await res.text();

    // WooCommerce embed all variations as JSON in data-product_variations
    const match = html.match(/data-product_variations="([^"]*?)"/s)
                || html.match(/data-product_variations='([^']*?)'/s);

    if (!match) {
      return new Response(JSON.stringify({ colors: [], error: 'No variations found' }), {
        headers: corsHeaders()
      });
    }

    // Decode HTML entities (&quot; → ", &amp; → &, etc.)
    const raw = match[1]
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

    const variations = JSON.parse(raw);

    // Extract one entry per unique color (first variation per color attribute)
    const seen = new Set();
    const colors = [];

    for (const v of variations) {
      // Find the color attribute (attribute_pa_couleur or similar)
      const colorKey = Object.keys(v.attributes || {}).find(k =>
        k.includes('couleur') || k.includes('color') || k.includes('colour')
      );
      const colorValue = colorKey ? v.attributes[colorKey] : null;
      const key = colorValue || v.image?.alt || JSON.stringify(v.attributes);

      if (seen.has(key)) continue;
      seen.add(key);

      const img = v.image || {};
      colors.push({
        nom: img.alt || colorValue || key,
        src: img.src || img.url || '',
        srcset: img.srcset || '',
      });
    }

    return new Response(JSON.stringify({ colors }), { headers: corsHeaders() });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message, colors: [] }), {
      status: 500,
      headers: corsHeaders()
    });
  }
}

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 's-maxage=3600'
  };
}
