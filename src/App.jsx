import React, { useState, useMemo } from "react";
import heroImg from "./assets/hero.jpeg";
import bar100g from "./assets/hero2.jpeg";
import bar1kg from "./assets/hero3.jpeg";
import bar20g from "./assets/hero3.jpeg";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PRODUCTS = [
  {
    id: "g1", cat: "gold", shape: "coin", name: "Sovereign Eagle Coin", spec: "1 oz · 22K · .9167 fine", price: 2415,
    metal: "#B8934A", ring: "#8A6B33", mint: "United States Mint", year: 2025, weight: "31.1 g (1 troy oz)",
    purity: "22K · .9167 fine", diameter: "32.7 mm", certification: "Sealed, tamper-evident assay card",
    description: "The benchmark bullion coin, struck in a durable 22K alloy so it resists scuffing in everyday handling. Backed by government weight and purity guarantee."
  },
  {
    id: "g2", cat: "gold", shape: "coin", name: "Krugerrand Classic", spec: "1 oz · 22K · .9167 fine", price: 2402,
    metal: "#C6A05C", ring: "#8A6B33", mint: "South African Mint", year: 2024, weight: "31.1 g (1 troy oz)",
    purity: "22K · .9167 fine", diameter: "32.6 mm", certification: "Loose coin, capsule available on request",
    description: "The original modern gold bullion coin, first struck in 1967. Its copper-alloyed core gives it a warmer tone and exceptional wear resistance."
  },
  {
    id: "g3", cat: "gold", shape: "coin", name: "Maple Leaf Bullion", spec: "1 oz · 24K · .9999 fine", price: 2461,
    metal: "#D4B26A", ring: "#9C7B3E", mint: "Royal Canadian Mint", year: 2025, weight: "31.1 g (1 troy oz)",
    purity: "24K · .9999 fine", diameter: "30.0 mm", certification: "Radial security lines, micro-engraved date",
    description: "Struck in the world's purest widely-available bullion gold. Radial-line security patterning makes counterfeiting exceptionally difficult."
  },
  {
    id: "g4", cat: "gold", shape: "bar", name: "Cast Ingot Bar", spec: "10 g · 24K · .9999 fine", price: 812,
    metal: "#BFA05B", ring: "#7A5F2C", mint: "PAMP Suisse", year: 2025, weight: "10 g",
    purity: "24K · .9999 fine", diameter: "24 × 14 mm bar", certification: "Individually numbered, sealed assay card",
    description: "Hand-poured and hallmarked, each bar is individually numbered and sealed in an assay card for instant verification of weight and fineness."
  },
  {
    id: "g5", cat: "gold", shape: "coin", name: "Britannia Coin", spec: "1 oz · 24K · .9999 fine", price: 2458,
    metal: "#CBA860", ring: "#8E7239", mint: "The Royal Mint", year: 2025, weight: "31.1 g (1 troy oz)",
    purity: "24K · .9999 fine", diameter: "38.6 mm", certification: "Animated security feature, VeriScan enabled",
    description: "Reintroduced in fine gold with a rotating animated security strip that shifts under light — a striking anti-counterfeit feature you can check with a glance."
  },
  {
    id: "g6", cat: "gold", shape: "coin", name: "Panda Coin", spec: "30 g · 24K · .999 fine", price: 2380,
    metal: "#D8BC7A", ring: "#9C7B3E", mint: "China Gold Coin Corp.", year: 2025, weight: "30 g",
    purity: "24K · .999 fine", diameter: "40.0 mm", certification: "Annually redesigned reverse, unique to mint year",
    description: "The panda design changes every year, making each release a small numismatic record of its own — popular with collectors as much as bullion holders."
  },
  {
    id: "g7", cat: "gold", shape: "coin", name: "Half Ounce Eagle", spec: "1/2 oz · 22K · .9167 fine", price: 1235,
    metal: "#B8934A", ring: "#8A6B33", mint: "United States Mint", year: 2025, weight: "15.55 g (1/2 troy oz)",
    purity: "22K · .9167 fine", diameter: "27.0 mm", certification: "Sealed, tamper-evident assay card",
    description: "A half-ounce strike of the same coin above — a smaller entry point for the same government-backed weight and purity guarantee."
  },
  {
    id: "g8", cat: "gold", shape: "coin", name: "Quarter Ounce Eagle", spec: "1/4 oz · 22K · .9167 fine", price: 635,
    metal: "#C1985A", ring: "#8A6B33", mint: "United States Mint", year: 2025, weight: "7.78 g (1/4 troy oz)",
    purity: "22K · .9167 fine", diameter: "22.0 mm", certification: "Sealed, tamper-evident assay card",
    description: "A quarter-ounce fraction sized for gifting or dollar-cost-averaging into a position without committing to a full-ounce coin."
  },
  {
    id: "g9", cat: "gold", shape: "bar", name: "Cast Ingot Bar — 1 oz", spec: "31.1 g · 24K · .9999 fine", price: 2470,
    metal: "#C7A968", ring: "#7A5F2C", mint: "Valcambi Suisse", year: 2025, weight: "31.1 g (1 troy oz)",
    purity: "24K · .9999 fine", diameter: "41 × 24 mm bar", certification: "Individually numbered, sealed assay card",
    description: "A full-ounce cast bar from one of the oldest continuously operating refiners in Switzerland, sealed with an individually numbered assay card."
  },
  {
    id: "g10", cat: "gold", shape: "coin", name: "Philharmonic Coin", spec: "1 oz · 24K · .9999 fine", price: 2452,
    metal: "#DEC178", ring: "#9C7B3E", mint: "Austrian Mint", year: 2025, weight: "31.1 g (1 troy oz)",
    purity: "24K · .9999 fine", diameter: "37.0 mm", certification: "Sealed, tamper-evident assay card",
    description: "Europe's best-selling bullion coin, struck in fine gold with the organ pipes of Vienna's Musikverein on the reverse."
  },
  {
    id: "g11", cat: "gold", shape: "bar", name: "Suisse 100g Cast Bar", spec: "100 g · 24K · .9999 fine", price: 8120,
    metal: "#D9BD7C", ring: "#9C7B3E", mint: "PAMP Suisse", year: 2025, weight: "100 g",
    purity: "24K · .9999 fine", diameter: "50 × 30 mm bar", certification: "Individually numbered, sealed assay card, certified assayer stamp",
    isNew: true, photo: bar100g,
    description: "A refinery-fresh 100 g bar with mirror-polished faces and an individually numbered certificate. A popular mid-size format for building a position without the premium of many small coins."
  },
  {
    id: "g12", cat: "gold", shape: "bar", name: "Suisse 1 Kilo Cast Bar", spec: "1 kg · 24K · .9999 fine", price: 81300,
    metal: "#E4CC90", ring: "#B0904F", mint: "PAMP Suisse", year: 2025, weight: "1,000 g (1 kg)",
    purity: "24K · .9999 fine", diameter: "116 × 51 mm bar", certification: "Individually numbered, sealed assay card, certified assayer stamp",
    isNew: true, photo: bar1kg,
    description: "The flagship investment bar. Substantial in hand, sealed with a unique serial number, and priced closest to spot of anything in the collection."
  },
  {
    id: "g13", cat: "gold", shape: "bar", name: "Suisse 20g Cast Bar (Pair)", spec: "2 × 20 g · 24K · .9999 fine", price: 3320,
    metal: "#C9AC66", ring: "#8A6B33", mint: "Credit Suisse", year: 2025, weight: "40 g total (2 × 20 g)",
    purity: "24K · .9999 fine", diameter: "30 × 18 mm bars", certification: "Individually numbered, sealed assay cards (sold as a pair)",
    isNew: true, photo: bar20g,
    description: "Two matched 20 g bars, each independently numbered and sealed — a practical size for splitting a gift or a position in two."
  },
  {
    id: "s1", cat: "ruby", shape: "gem", name: "Pigeon Blood Ruby", spec: "2.14 ct · Oval Cut · Burma", price: 8600,
    facet: "#8E1B3A", glint: "#F6C6D3", origin: "Mogok, Myanmar", cutGrade: "Oval brilliant, excellent symmetry",
    clarity: "Eye-clean, minor natural inclusions", certification: "GIA colored-stone report included",
    description: "The most saturated grade of red, prized above all others. This stone shows the even, glowing tone that gave the grade its name."
  },
  {
    id: "s2", cat: "sapphire", shape: "gem", name: "Kashmir Sapphire", spec: "3.05 ct · Cushion Cut", price: 11200,
    facet: "#1F3E7A", glint: "#B9D2F6", origin: "Kashmir, India", cutGrade: "Cushion, velvety cornflower blue",
    clarity: "Lightly included, classic silk", certification: "GIA colored-stone report included",
    description: "A soft, velvety blue with fine natural silk inclusions that scatter light rather than dull it — the hallmark of historic Kashmir material."
  },
  {
    id: "s3", cat: "emerald", shape: "gem", name: "Muzo Emerald", spec: "2.60 ct · Emerald Cut · Colombia", price: 9450,
    facet: "#1F4D3D", glint: "#B7E3CC", origin: "Muzo mine, Colombia", cutGrade: "Step cut, deep saturated green",
    clarity: "Minor jardin, typical of the species", certification: "GIA colored-stone report included",
    description: "From the mine long considered the source of the finest emerald green, cut in the traditional step style that best shows off its color."
  },
  {
    id: "s4", cat: "diamond", shape: "gem", name: "Old Mine Diamond", spec: "1.80 ct · Round · VS1", price: 15300,
    facet: "#DCE7EE", glint: "#FFFFFF", origin: "Antique cut, provenance unknown", cutGrade: "Old mine brilliant, hand-faceted",
    clarity: "VS1, eye-clean", certification: "GIA diamond grading report included",
    description: "A hand-cut antique stone with a higher crown and softer scintillation than modern brilliants — cut for candlelight rather than a jeweler's loupe."
  },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "gold", label: "Gold" },
  { id: "ruby", label: "Ruby" },
  { id: "sapphire", label: "Sapphire" },
  { id: "emerald", label: "Emerald" },
  { id: "diamond", label: "Diamond" },
];

const WHY_US = [
  { title: "Certified Purity", body: "Every coin and bar ships sealed with an assay card or grading report confirming exact weight and fineness." },
  { title: "Sourced Direct", body: "We buy straight from accredited mints and refiners — no unnecessary hands in between." },
  { title: "Insured Delivery", body: "Every order is fully insured in transit, tracked door to door until it's in your hands." },
  { title: "Transparent Pricing", body: "Prices track daily spot rates with our margin shown up front — never buried in the total." },
];

const TESTIMONIALS = [
  { name: "Adaeze O.", loc: "Lagos, NG", quote: "My 100g bar arrived exactly as described, sealed and numbered. Ordering again for my next allocation." },
  { name: "Michael T.", loc: "Houston, US", quote: "Clear pricing, no pressure, and the assay documentation made resale simple when I needed it." },
  { name: "Priya K.", loc: "Toronto, CA", quote: "The gemstone reports were thorough and the stone matched the listing detail for detail." },
  { name: "Chinedu A.", loc: "Abuja, NG", quote: "Fast, insured shipping on a kilo bar order. Communication was clear at every step." },
];

const money = (n) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

// ---------------------------------------------------------------------------
// Icon glyphs — drawn fallbacks for items without a photo
// ---------------------------------------------------------------------------

function CoinGlyph({ metal, ring }) {
  const gid = "coin-" + metal.replace("#", "");
  return (
    <svg viewBox="0 0 120 120" className="glyph" aria-hidden="true">
      <defs>
        <radialGradient id={gid} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFF8E8" />
          <stop offset="35%" stopColor={metal} />
          <stop offset="100%" stopColor={ring} />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill={`url(#${gid})`} stroke={ring} strokeWidth="2" />
      <circle cx="60" cy="60" r="42" fill="none" stroke={ring} strokeWidth="1" opacity="0.55" />
      <circle cx="60" cy="60" r="4" fill={ring} opacity="0.7" />
      {Array.from({ length: 28 }).map((_, i) => {
        const a = (i / 28) * Math.PI * 2;
        const x1 = 60 + Math.cos(a) * 50, y1 = 60 + Math.sin(a) * 50;
        const x2 = 60 + Math.cos(a) * 54, y2 = 60 + Math.sin(a) * 54;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ring} strokeWidth="1.3" opacity="0.6" />;
      })}
    </svg>
  );
}

function GemGlyph({ facet, glint }) {
  return (
    <svg viewBox="0 0 120 120" className="glyph" aria-hidden="true">
      <polygon points="60,10 92,42 78,110 42,110 28,42" fill={facet} stroke={glint} strokeWidth="1.2" opacity="0.95" />
      <polygon points="60,10 92,42 60,50" fill={glint} opacity="0.35" />
      <polygon points="60,10 28,42 60,50" fill={glint} opacity="0.18" />
      <polygon points="28,42 60,50 42,110" fill="#000" opacity="0.14" />
      <polygon points="92,42 60,50 78,110" fill="#000" opacity="0.07" />
      <line x1="60" y1="10" x2="60" y2="50" stroke={glint} strokeWidth="0.8" opacity="0.5" />
      <line x1="28" y1="42" x2="92" y2="42" stroke={glint} strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function BarGlyph({ metal, ring }) {
  const gid = "bar-" + metal.replace("#", "");
  return (
    <svg viewBox="0 0 120 120" className="glyph" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E8" />
          <stop offset="45%" stopColor={metal} />
          <stop offset="100%" stopColor={ring} />
        </linearGradient>
      </defs>
      <rect x="24" y="16" width="72" height="88" rx="3" fill={`url(#${gid})`} stroke={ring} strokeWidth="2" />
      <rect x="30" y="22" width="60" height="76" rx="2" fill="none" stroke={ring} strokeWidth="0.8" opacity="0.4" />
      <g opacity="0.85">
        <rect x="53" y="30" width="6" height="6" fill={ring} transform="rotate(45 56 33)" />
        <rect x="61" y="30" width="6" height="6" fill={ring} transform="rotate(45 64 33)" />
        <rect x="57" y="36" width="6" height="6" fill={ring} transform="rotate(45 60 39)" />
      </g>
      <text x="60" y="62" textAnchor="middle" fontSize="9" fontFamily="serif" fill={ring} opacity="0.85">FINE GOLD</text>
      <text x="60" y="76" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={ring} opacity="0.75">999.9</text>
    </svg>
  );
}

// Renders the product's real photo when it has one, otherwise falls back to the drawn glyph
function Glyph({ p, className }) {
  if (p.photo) return <img src={p.photo} alt={p.name} className={className || "glyph glyph-photo"} />;
  if (p.shape === "bar") return <BarGlyph metal={p.metal} ring={p.ring} />;
  if (p.shape === "gem") return <GemGlyph facet={p.facet} glint={p.glint} />;
  return <CoinGlyph metal={p.metal} ring={p.ring} />;
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export default function App() {
  const [page, setPage] = useState("home"); // 'home' | 'shop' | 'cart'
  const [activeCat, setActiveCat] = useState("all");
  const [cart, setCart] = useState({}); // id -> qty
  const [detailId, setDetailId] = useState(null);

  const detailProduct = useMemo(
    () => (detailId ? PRODUCTS.find((p) => p.id === detailId) : null),
    [detailId]
  );

  const visible = useMemo(
    () => (activeCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeCat)),
    [activeCat]
  );

  const latest = useMemo(() => PRODUCTS.filter((p) => p.isNew), []);

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({ ...PRODUCTS.find((p) => p.id === id), qty })),
    [cart]
  );

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const subtotal = cartItems.reduce((s, i) => s + i.qty * i.price, 0);
  const escrow = Math.round(subtotal * 0.015);
  const total = subtotal + escrow;

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const setQty = (id, qty) => setCart((c) => ({ ...c, [id]: Math.max(0, qty) }));
  const removeItem = (id) => setCart((c) => ({ ...c, [id]: 0 }));

  const goToShop = (cat) => {
    if (cat) setActiveCat(cat);
    setPage("shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="aureum">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        html, body { margin: 0; padding: 0; width: 100%; }
        #root, #app { width: 100%; }

        .aureum {
          --bg: #FAF6ED;
          --bg-2: #FFFFFF;
          --panel: #F3EDE0;
          --gold: #A9793B;
          --gold-deep: #8C6329;
          --ink: #33291C;
          --hairline: rgba(51, 41, 28, 0.12);
          --muted: #8A7C68;
          font-family: 'Jost', sans-serif;
          background: var(--bg);
          color: var(--ink);
          min-height: 100vh;
          width: 100%;
          margin: 0;
        }
        .aureum * { box-sizing: border-box; }
        .aureum h1, .aureum h2, .aureum h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          letter-spacing: 0.01em;
          margin: 0;
        }
        .mono { font-family: 'IBM Plex Mono', monospace; }

        /* Header */
        .au-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 26px 5vw;
          border-bottom: 1px solid var(--hairline);
          background: var(--bg-2);
          position: sticky; top: 0; z-index: 30;
        }
        .au-logo { display: flex; align-items: baseline; gap: 12px; cursor: pointer; }
        .au-logo .mark { color: var(--gold); font-size: 26px; }
        .au-logo .name { font-family: 'Cormorant Garamond', serif; font-size: 21px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--ink); }
        .au-nav { display: flex; align-items: center; gap: 34px; }
        .au-nav button {
          background: none; border: none; cursor: pointer;
          font-family: 'Jost', sans-serif; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--muted); padding: 6px 0; border-bottom: 1px solid transparent;
        }
        .au-nav button.active, .au-nav button:hover { color: var(--ink); border-color: var(--gold); }
        .cart-btn { position: relative; }
        .cart-badge {
          position: absolute; top: -10px; right: -16px;
          background: var(--gold); color: #fff;
          font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 500;
          border-radius: 50%; width: 18px; height: 18px;
          display: flex; align-items: center; justify-content: center;
        }

        /* Full-screen hero */
        .au-hero {
          min-height: 92vh; width: 100%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 40px 5vw;
          background:
            linear-gradient(rgba(250,246,237,0.90), rgba(250,246,237,0.97)),
            url(${JSON.stringify("").slice(0)}) center/cover no-repeat;
          border-bottom: 1px solid var(--hairline);
          position: relative;
        }
        .au-hero .eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.24em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 20px;
        }
        .au-hero h1 { font-size: clamp(32px, 5vw, 54px); max-width: 780px; margin: 0 auto 20px; line-height: 1.16; color: var(--ink); }
        .au-hero p { color: var(--muted); font-size: 16px; max-width: 540px; margin: 0 auto 32px; line-height: 1.6; }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }
        .hero-cta button {
          padding: 14px 30px; font-family: 'Jost', sans-serif; font-size: 12.5px; letter-spacing: 0.1em;
          text-transform: uppercase; cursor: pointer; transition: all 0.2s; border: 1px solid var(--gold);
        }
        .hero-cta .primary { background: var(--gold); color: #fff; }
        .hero-cta .primary:hover { background: var(--gold-deep); }
        .hero-cta .secondary { background: transparent; color: var(--gold-deep); }
        .hero-cta .secondary:hover { background: rgba(169,121,59,0.08); }

        /* Latest arrivals */
        .au-latest { padding: 6vw 5vw; border-bottom: 1px solid var(--hairline); }
        .latest-head { display: flex; align-items: baseline; justify-content: space-between; max-width: 1280px; margin: 0 auto 30px; }
        .latest-head h2 { font-size: 28px; color: var(--ink); }
        .latest-head .eyebrow-sm { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 6px; }
        .view-all-btn {
          background: none; border: 1px solid var(--gold); color: var(--gold-deep);
          padding: 10px 22px; font-family: 'Jost', sans-serif; font-size: 12px; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .view-all-btn:hover { background: var(--gold); color: #fff; }
        .latest-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px; max-width: 1280px; margin: 0 auto;
        }
        .latest-card {
          background: var(--bg-2); border: 1px solid var(--hairline);
          display: flex; flex-direction: column; align-items: center; text-align: center;
          position: relative; overflow: hidden;
        }
        .latest-card .glyph-wrap { width: 100%; height: 200px; background: var(--panel); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .latest-card .body { padding: 22px 22px 24px; width: 100%; display: flex; flex-direction: column; align-items: center; }
        .new-tag {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.1em;
          color: var(--gold-deep); background: var(--bg-2); border: 1px solid var(--gold); padding: 3px 8px; text-transform: uppercase;
        }

        /* Category tabs (shop page) */
        .shop-head { padding: 5vw 5vw 0; text-align: center; }
        .shop-head .eyebrow-sm { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 12px; }
        .shop-head h1 { font-size: clamp(28px, 4vw, 40px); color: var(--ink); margin-bottom: 10px; }
        .shop-head p { color: var(--muted); font-size: 14.5px; max-width: 520px; margin: 0 auto; }
        .au-tabs {
          display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
          padding: 34px 5vw; border-bottom: 1px solid var(--hairline);
        }
        .au-tabs button {
          background: var(--bg-2); border: 1px solid var(--hairline); color: var(--muted);
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.05em;
          padding: 9px 18px; border-radius: 999px; cursor: pointer;
        }
        .au-tabs button.active { border-color: var(--gold); color: var(--gold-deep); background: rgba(169,121,59,0.08); }
        .au-tabs button:hover { color: var(--ink); }

        /* Grid */
        .au-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 26px; padding: 4vw 5vw 6vw; width: 100%;
        }
        .au-card {
          background: var(--bg-2); border: 1px solid var(--hairline);
          display: flex; flex-direction: column; align-items: center;
          text-align: center; transition: box-shadow 0.2s, transform 0.2s; position: relative; overflow: hidden;
        }
        .au-card:hover { box-shadow: 0 10px 28px rgba(51,41,28,0.08); transform: translateY(-2px); }
        .card-glyph-wrap { width: 100%; height: 190px; background: var(--panel); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .card-body { padding: 24px 22px; width: 100%; display: flex; flex-direction: column; align-items: center; }
        .glyph { width: 88px; height: 88px; filter: drop-shadow(0 6px 12px rgba(51,41,28,0.16)); transition: transform 0.35s ease; }
        .glyph-photo { width: 100%; height: 100%; object-fit: cover; filter: none; }
        .au-card:hover .glyph:not(.glyph-photo) { transform: translateY(-3px) rotate(-2deg); }
        .au-card:hover .glyph-photo { transform: scale(1.05); }
        .au-card h3 { font-size: 19px; margin-bottom: 8px; color: var(--ink); }
        .au-card .spec { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); margin-bottom: 18px; letter-spacing: 0.02em; }
        .au-card .price { font-family: 'IBM Plex Mono', monospace; font-size: 17px; color: var(--gold-deep); margin-bottom: 18px; }

        .card-btns { display: flex; gap: 10px; width: 100%; }
        .add-btn, .detail-btn {
          padding: 11px 0; background: transparent; border: 1px solid var(--gold);
          color: var(--gold-deep); font-family: 'Jost', sans-serif; font-size: 12px; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer; transition: all 0.2s;
        }
        .add-btn { flex: 1.3; }
        .detail-btn { flex: 1; border-color: var(--hairline); color: var(--muted); }
        .add-btn:hover { background: var(--gold); color: #fff; }
        .detail-btn:hover { border-color: var(--gold); color: var(--gold-deep); }

        /* Why buy from us */
        .au-why { padding: 6vw 5vw; background: var(--panel); border-bottom: 1px solid var(--hairline); }
        .why-inner { max-width: 1180px; margin: 0 auto; text-align: center; }
        .why-inner .eyebrow-sm { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 10px; }
        .why-inner h2 { font-size: 30px; margin-bottom: 46px; color: var(--ink); }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 36px; text-align: left; }
        .why-item { border-top: 2px solid var(--gold); padding-top: 16px; }
        .why-item h3 { font-size: 18px; margin-bottom: 10px; color: var(--ink); }
        .why-item p { color: var(--muted); font-size: 13.5px; line-height: 1.6; margin: 0; }

        /* Testimonials */
        .au-testimonials { padding: 6vw 5vw; }
        .test-inner { max-width: 1280px; margin: 0 auto; }
        .test-inner .eyebrow-sm { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 10px; text-align: center; }
        .test-inner h2 { font-size: 30px; margin-bottom: 44px; color: var(--ink); text-align: center; }
        .test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
        .test-card { background: var(--bg-2); border: 1px solid var(--hairline); padding: 26px 24px; }
        .test-quote { font-family: 'Cormorant Garamond', serif; font-size: 17px; line-height: 1.5; color: var(--ink); margin-bottom: 18px; }
        .test-quote::before { content: '\\201C'; color: var(--gold); font-size: 22px; }
        .test-name { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--gold-deep); }
        .test-loc { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--muted); }

        /* Cart page */
        .au-cart-wrap { padding: 5vw 5vw 6vw; max-width: 1000px; margin: 0 auto; width: 100%; }
        .au-cart-wrap h1 { font-size: 34px; margin-bottom: 8px; color: var(--ink); }
        .au-cart-wrap .sub { color: var(--muted); font-size: 13px; margin-bottom: 40px; }
        .ledger { border-top: 1px solid var(--hairline); }
        .ledger-row {
          display: grid; grid-template-columns: 64px 1fr 130px 100px 40px;
          align-items: center; gap: 18px; padding: 20px 0; border-bottom: 1px solid var(--hairline);
        }
        .ledger-row .mini-glyph { width: 50px; height: 50px; border-radius: 4px; overflow: hidden; }
        .ledger-row .iname { font-size: 17px; font-family: 'Cormorant Garamond', serif; color: var(--ink); }
        .ledger-row .ispec { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); margin-top: 3px; }
        .qty-box { display: flex; align-items: center; border: 1px solid var(--hairline); width: fit-content; }
        .qty-box button { background: none; border: none; color: var(--ink); width: 28px; height: 28px; cursor: pointer; font-size: 14px; }
        .qty-box span { width: 30px; text-align: center; font-family: 'IBM Plex Mono', monospace; font-size: 13px; }
        .ledger-row .lprice { font-family: 'IBM Plex Mono', monospace; font-size: 14px; text-align: right; color: var(--ink); }
        .remove-btn { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 16px; }
        .remove-btn:hover { color: #B0503F; }

        .empty-cart { padding: 70px 0; text-align: center; color: var(--muted); }
        .empty-cart button {
          margin-top: 20px; background: none; border: 1px solid var(--gold); color: var(--gold-deep);
          padding: 11px 24px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;
        }

        .summary { margin-top: 36px; margin-left: auto; width: 310px; }
        .sum-row { display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 13px; padding: 9px 0; color: var(--muted); }
        .sum-row.total { color: var(--ink); font-size: 17px; border-top: 1px solid var(--hairline); margin-top: 8px; padding-top: 16px; }
        .checkout-btn {
          margin-top: 24px; width: 100%; padding: 15px 0; background: var(--gold); border: none;
          color: #fff; font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: background 0.2s;
        }
        .checkout-btn:hover { background: var(--gold-deep); }
        .note { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); text-align: center; margin-top: 14px; }

        /* Detail modal */
        .modal-backdrop {
          position: fixed; inset: 0; background: rgba(51, 41, 28, 0.45);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; z-index: 50; backdrop-filter: blur(2px);
        }
        .modal {
          position: relative; background: var(--bg-2); border: 1px solid var(--hairline);
          max-width: 460px; width: 100%; padding: 0 0 34px; text-align: center;
          max-height: 88vh; overflow-y: auto;
        }
        .modal-close {
          position: absolute; top: 16px; right: 18px; background: rgba(255,255,255,0.85); border: none;
          color: var(--ink); font-size: 16px; cursor: pointer; width: 30px; height: 30px; border-radius: 50%; z-index: 2;
        }
        .modal-close:hover { color: var(--gold-deep); }
        .modal-glyph-wrap { width: 100%; height: 220px; background: var(--panel); margin-bottom: 20px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .modal-glyph-wrap .glyph { width: 110px; height: 110px; }
        .modal-body { padding: 0 34px; }
        .modal-eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
        }
        .modal h2 { font-size: 26px; margin-bottom: 14px; color: var(--ink); }
        .modal-desc { color: var(--muted); font-size: 13.5px; line-height: 1.65; margin-bottom: 28px; }
        .spec-table { text-align: left; border-top: 1px solid var(--hairline); margin-bottom: 28px; }
        .spec-row {
          display: flex; justify-content: space-between; gap: 18px;
          padding: 11px 0; border-bottom: 1px solid var(--hairline); font-size: 13px;
        }
        .spec-row span:first-child { color: var(--muted); }
        .spec-row span:last-child { text-align: right; color: var(--ink); }
        .price-hl { color: var(--gold-deep); font-size: 15px; }

        /* Footer */
        .au-footer { background: var(--ink); color: #E9E0CE; padding: 5vw 5vw 28px; width: 100%; }
        .footer-grid {
          display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px;
          max-width: 1280px; margin: 0 auto 40px;
        }
        .footer-brand .name { font-family: 'Cormorant Garamond', serif; font-size: 22px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; }
        .footer-brand p { color: #C9BCA0; font-size: 13px; line-height: 1.6; max-width: 320px; }
        .footer-col h4 { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .footer-col a, .footer-col div { display: block; color: #E9E0CE; text-decoration: none; font-size: 13.5px; margin-bottom: 10px; }
        .footer-col a:hover { color: var(--gold); }
        .footer-col button { background: none; border: none; color: #E9E0CE; font-size: 13.5px; padding: 0; margin-bottom: 10px; cursor: pointer; text-align: left; }
        .footer-col button:hover { color: var(--gold); }
        .footer-bottom { max-width: 1280px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(233,224,206,0.14); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #9C917A; }

        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .au-header { padding: 20px 22px; }
          .au-hero { padding: 60px 22px; min-height: 80vh; }
          .au-hero h1 { font-size: 30px; }
          .au-latest, .au-why, .au-testimonials { padding: 48px 22px; }
          .latest-head { flex-direction: column; align-items: flex-start; gap: 14px; }
          .au-grid { padding: 40px 20px 56px; }
          .au-cart-wrap { padding: 36px 18px 60px; }
          .ledger-row { grid-template-columns: 46px 1fr 30px; row-gap: 10px; }
          .ledger-row .qty-box, .ledger-row .lprice { grid-column: 2 / 3; justify-self: start; }
          .summary { width: 100%; }
          .au-footer { padding: 40px 22px 24px; }
        }
      `}</style>

      <header className="au-header">
        <div className="au-logo" onClick={() => setPage("home")}>
          <span className="mark">◆</span>
          <span className="name">Resey Gemstones Gold &amp; Bar Co.</span>
        </div>
        <nav className="au-nav">
          <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</button>
          <button className={page === "shop" ? "active" : ""} onClick={() => goToShop()}>Shop</button>
          <button className={`cart-btn ${page === "cart" ? "active" : ""}`} onClick={() => setPage("cart")}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </nav>
      </header>

      {page === "home" && (
        <>
          <div className="au-hero" style={{ backgroundImage: `linear-gradient(rgba(250,246,237,0.90), rgba(250,246,237,0.97)), url(${heroImg})` }}>
            <div className="eyebrow">Resey Gemstones Gold &amp; Bar Company</div>
            <h1>Weighed, graded, and set aside for those who look closely.</h1>
            <p>Sovereign coins, cast bars, and hand-selected stones — each piece listed with its full appraisal.</p>
            <div className="hero-cta">
              <button className="primary" onClick={() => goToShop()}>Enter the Shop</button>
              <button className="secondary" onClick={() => setPage("cart")}>View Cart</button>
            </div>
          </div>

          <div className="au-latest">
            <div className="latest-head">
              <div>
                <span className="eyebrow-sm">Fresh From The Vault</span>
                <h2>Latest Arrivals</h2>
              </div>
              <button className="view-all-btn" onClick={() => goToShop()}>View All</button>
            </div>
            <div className="latest-grid">
              {latest.map((p) => (
                <div className="latest-card" key={p.id}>
                  <span className="new-tag">New</span>
                  <div className="glyph-wrap"><Glyph p={p} /></div>
                  <div className="body">
                    <h3 style={{ fontSize: 18, marginBottom: 6 }}>{p.name}</h3>
                    <div className="spec">{p.spec}</div>
                    <div className="price">{money(p.price)}</div>
                    <div className="card-btns">
                      <button className="detail-btn" onClick={() => setDetailId(p.id)}>Details</button>
                      <button className="add-btn" onClick={() => addToCart(p.id)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="au-why">
            <div className="why-inner">
              <span className="eyebrow-sm">Our Promise</span>
              <h2>Why Buy From Us</h2>
              <div className="why-grid">
                {WHY_US.map((w) => (
                  <div className="why-item" key={w.title}>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="au-testimonials">
            <div className="test-inner">
              <span className="eyebrow-sm">Word Of Mouth</span>
              <h2>What Buyers Say</h2>
              <div className="test-grid">
                {TESTIMONIALS.map((t) => (
                  <div className="test-card" key={t.name}>
                    <div className="test-quote">{t.quote}</div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-loc">{t.loc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {page === "shop" && (
        <>
          <div className="shop-head">
            <span className="eyebrow-sm">The Full Collection</span>
            <h1>Shop the Vault</h1>
            <p>Every coin, bar, and stone we currently hold, with full appraisal details on request.</p>
          </div>

          <div className="au-tabs">
            {CATEGORIES.map((c) => (
              <button key={c.id} className={activeCat === c.id ? "active" : ""} onClick={() => setActiveCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="au-grid">
            {visible.map((p) => (
              <div className="au-card" key={p.id}>
                <div className="card-glyph-wrap"><Glyph p={p} /></div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <div className="spec">{p.spec}</div>
                  <div className="price">{money(p.price)}</div>
                  <div className="card-btns">
                    <button className="detail-btn" onClick={() => setDetailId(p.id)}>Details</button>
                    <button className="add-btn" onClick={() => addToCart(p.id)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {detailProduct && (
        <div className="modal-backdrop" onClick={() => setDetailId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDetailId(null)}>✕</button>
            <div className="modal-glyph-wrap"><Glyph p={detailProduct} /></div>
            <div className="modal-body">
              <div className="modal-eyebrow">{detailProduct.cat === "gold" ? "Bullion Appraisal" : "Gemstone Appraisal"}</div>
              <h2>{detailProduct.name}</h2>
              <p className="modal-desc">{detailProduct.description}</p>

              <div className="spec-table">
                {detailProduct.cat === "gold" ? (
                  <>
                    <div className="spec-row"><span>Mint</span><span>{detailProduct.mint}</span></div>
                    <div className="spec-row"><span>Year</span><span className="mono">{detailProduct.year}</span></div>
                    <div className="spec-row"><span>Weight</span><span className="mono">{detailProduct.weight}</span></div>
                    <div className="spec-row"><span>Purity</span><span className="mono">{detailProduct.purity}</span></div>
                    <div className="spec-row"><span>Dimensions</span><span className="mono">{detailProduct.diameter}</span></div>
                    <div className="spec-row"><span>Certification</span><span>{detailProduct.certification}</span></div>
                  </>
                ) : (
                  <>
                    <div className="spec-row"><span>Origin</span><span>{detailProduct.origin}</span></div>
                    <div className="spec-row"><span>Cut</span><span>{detailProduct.cutGrade}</span></div>
                    <div className="spec-row"><span>Clarity</span><span>{detailProduct.clarity}</span></div>
                    <div className="spec-row"><span>Certification</span><span>{detailProduct.certification}</span></div>
                  </>
                )}
                <div className="spec-row"><span>Price</span><span className="mono price-hl">{money(detailProduct.price)}</span></div>
              </div>

              <button
                className="checkout-btn"
                onClick={() => { addToCart(detailProduct.id); setDetailId(null); }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {page === "cart" && (
        <div className="au-cart-wrap">
          <h1>Your Cart</h1>
          <div className="sub">{cartCount === 0 ? "No items yet." : `${cartCount} item${cartCount > 1 ? "s" : ""} held for review`}</div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div>The vault is empty.</div>
              <button onClick={() => goToShop()}>Browse the Collection</button>
            </div>
          ) : (
            <>
              <div className="ledger">
                {cartItems.map((item) => (
                  <div className="ledger-row" key={item.id}>
                    <div className="mini-glyph"><Glyph p={item} className="glyph glyph-photo" /></div>
                    <div>
                      <div className="iname">{item.name}</div>
                      <div className="ispec">{item.spec}</div>
                    </div>
                    <div className="qty-box">
                      <button onClick={() => setQty(item.id, item.qty - 1)}>–</button>
                      <span>{item.qty}</span>
                      <button onClick={() => setQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <div className="lprice">{money(item.qty * item.price)}</div>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
                  </div>
                ))}
              </div>

              <div className="summary">
                <div className="sum-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
                <div className="sum-row"><span>Insured escrow (1.5%)</span><span>{money(escrow)}</span></div>
                <div className="sum-row total"><span>Total</span><span>{money(total)}</span></div>
                <button className="checkout-btn">Request Quote</button>
                <div className="note">Prices are indicative and subject to daily spot rates.</div>
              </div>
            </>
          )}
        </div>
      )}

      <footer className="au-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="name">Resey Gemstones Gold &amp; Bar Co.</div>
            <p>Bullion coins, cast bars, and hand-graded gemstones, sourced direct from accredited mints and refiners and shipped fully insured.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <button onClick={() => goToShop()}>All Products</button>
            <button onClick={() => goToShop("gold")}>Gold Coins &amp; Bars</button>
            <button onClick={() => setPage("cart")}>Your Cart</button>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+16018040308">+1 (601) 804-0308</a>
            <a href="mailto:Reseygenstone.@outlook.com">Reseygenstone.@outlook.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Resey Gemstones Gold &amp; Bar Company</span>
          <span>Demo storefront — no real transactions are processed.</span>
        </div>
      </footer>
    </div>
  );
}