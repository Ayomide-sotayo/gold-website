// import { useState, useMemo, useRef, useEffect } from "react";
// import { ShieldCheck, Building2, Shield, TrendingUp, Info } from "lucide-react";
// import heroImg from "./assets/hero.jpeg";
// import goldBarShowcase from "./assets/gold_bar_showcase.jfif";
// import goldCoinShowcase from "./assets/gold_coin.jfif";
// import gemsCollectionShowcase from "./assets/gold_collection_showcase.jfif";
// import goldJewelryShowcase from "./assets/gold jewelry.jfif";
// import vaultDoorImg from "./assets/vault_door.jfif";

// import coinEagle from "./assets/soverieng_eagle.jfif";
// import coinMaple from "./assets/maple_leaf.jfif";
// import coinBritannia from "./assets/britinia_coin.jfif";
// import coinKruger from "./assets/krugerrand_coin.jfif";
// import coinPhilharmonic from "./assets/philharmonic_coin.jfif";
// import coinPanda from "./assets/panda_coin.jfif";
// import coinHalfEagle from "./assets/half_ounce_eagle.jfif";
// import coinQuarterEagle from "./assets/quater_ounce_eagle.jfif";

// import bar10g from "./assets/cast_ingot.jfif";
// import bar100g from "./assets/suisse_100g.png";
// import bar1kg from "./assets/sussie_1kilo.jfif";
// import bar20g from "./assets/suisse_20g_pair.png";
// import bar1oz from "./assets/cast_ingot_1oz.png";

// import ruby from "./assets/pigon_blood_ruby.jfif";
// import sapphire from "./assets/kashmir_sapphire.jfif";
// import emerald from "./assets/muzoemerald.jfif";
// import diamond from "./assets/oldminediamond.jfif";

// // ---------------------------------------------------------------------------
// // Image URLs — all sourced from local assets
// // ---------------------------------------------------------------------------
// const IMAGES = {
//   // Showcase / hero images
//   goldBars: goldBarShowcase,
//   goldCoins: goldCoinShowcase,
//   gemsCollection: gemsCollectionShowcase,
//   goldJewelry: goldJewelryShowcase,
//   vaultDoor: vaultDoorImg,

//   // Product images — gold coins
//   coinEagle: coinEagle,
//   coinMaple: coinMaple,
//   coinBritannia: coinBritannia,
//   coinKruger: coinKruger,
//   coinPhilharmonic: coinPhilharmonic,
//   coinPanda: coinPanda,
//   coinHalfEagle: coinHalfEagle,
//   coinQuarterEagle: coinQuarterEagle,

//   // Product images — gold bars
//   bar10g: bar10g,
//   bar100g: bar100g,
//   bar1kg: bar1kg,
//   bar20g: bar20g,
//   bar1oz: bar1oz,

//   // Product images — gems
//   ruby: ruby,
//   sapphire: sapphire,
//   emerald: emerald,
//   diamond: diamond,
// };

// // ---------------------------------------------------------------------------
// // Data
// // ---------------------------------------------------------------------------

// const PRODUCTS = [
//   {
//     id: "g1",
//     cat: "gold",
//     shape: "coin",
//     name: "Sovereign Eagle Coin",
//     spec: "1 oz · 22K · .9167 fine",
//     price: 2415,
//     photo: IMAGES.coinEagle,
//     mint: "United States Mint",
//     year: 2025,
//     weight: "31.1 g (1 troy oz)",
//     purity: "22K · .9167 fine",
//     diameter: "32.7 mm",
//     certification: "Sealed, tamper-evident assay card",
//     description:
//       "The benchmark bullion coin, struck in a durable 22K alloy so it resists scuffing in everyday handling. Backed by government weight and purity guarantee.",
//   },
//   {
//     id: "g2",
//     cat: "gold",
//     shape: "coin",
//     name: "Krugerrand Classic",
//     spec: "1 oz · 22K · .9167 fine",
//     price: 2402,
//     photo: IMAGES.coinKruger,
//     mint: "South African Mint",
//     year: 2024,
//     weight: "31.1 g (1 troy oz)",
//     purity: "22K · .9167 fine",
//     diameter: "32.6 mm",
//     certification: "Loose coin, capsule available on request",
//     description:
//       "The original modern gold bullion coin, first struck in 1967. Its copper-alloyed core gives it a warmer tone and exceptional wear resistance.",
//   },
//   {
//     id: "g3",
//     cat: "gold",
//     shape: "coin",
//     name: "Maple Leaf Bullion",
//     spec: "1 oz · 24K · .9999 fine",
//     price: 2461,
//     photo: IMAGES.coinMaple,
//     mint: "Royal Canadian Mint",
//     year: 2025,
//     weight: "31.1 g (1 troy oz)",
//     purity: "24K · .9999 fine",
//     diameter: "30.0 mm",
//     certification: "Radial security lines, micro-engraved date",
//     description:
//       "Struck in the world's purest widely-available bullion gold. Radial-line security patterning makes counterfeiting exceptionally difficult.",
//   },
//   {
//     id: "g4",
//     cat: "gold",
//     shape: "bar",
//     name: "Cast Ingot Bar",
//     spec: "10 g · 24K · .9999 fine",
//     price: 812,
//     photo: IMAGES.bar10g,
//     mint: "PAMP Suisse",
//     year: 2025,
//     weight: "10 g",
//     purity: "24K · .9999 fine",
//     diameter: "24 × 14 mm bar",
//     certification: "Individually numbered, sealed assay card",
//     description:
//       "Hand-poured and hallmarked, each bar is individually numbered and sealed in an assay card for instant verification of weight and fineness.",
//   },
//   {
//     id: "g5",
//     cat: "gold",
//     shape: "coin",
//     name: "Britannia Coin",
//     spec: "1 oz · 24K · .9999 fine",
//     price: 2458,
//     photo: IMAGES.coinBritannia,
//     mint: "The Royal Mint",
//     year: 2025,
//     weight: "31.1 g (1 troy oz)",
//     purity: "24K · .9999 fine",
//     diameter: "38.6 mm",
//     certification: "Animated security feature, VeriScan enabled",
//     description:
//       "Reintroduced in fine gold with a rotating animated security strip that shifts under light — a striking anti-counterfeit feature you can check with a glance.",
//   },
//   {
//     id: "g6",
//     cat: "gold",
//     shape: "coin",
//     name: "Panda Coin",
//     spec: "30 g · 24K · .999 fine",
//     price: 2380,
//     photo: IMAGES.coinPanda,
//     mint: "China Gold Coin Corp.",
//     year: 2025,
//     weight: "30 g",
//     purity: "24K · .999 fine",
//     diameter: "40.0 mm",
//     certification: "Annually redesigned reverse, unique to mint year",
//     description:
//       "The panda design changes every year, making each release a small numismatic record of its own — popular with collectors as much as bullion holders.",
//   },
//   {
//     id: "g7",
//     cat: "gold",
//     shape: "coin",
//     name: "Half Ounce Eagle",
//     spec: "1/2 oz · 22K · .9167 fine",
//     price: 1235,
//     photo: IMAGES.coinHalfEagle,
//     mint: "United States Mint",
//     year: 2025,
//     weight: "15.55 g (1/2 troy oz)",
//     purity: "22K · .9167 fine",
//     diameter: "27.0 mm",
//     certification: "Sealed, tamper-evident assay card",
//     description:
//       "A half-ounce strike of the same coin above — a smaller entry point for the same government-backed weight and purity guarantee.",
//   },
//   {
//     id: "g8",
//     cat: "gold",
//     shape: "coin",
//     name: "Quarter Ounce Eagle",
//     spec: "1/4 oz · 22K · .9167 fine",
//     price: 635,
//     photo: IMAGES.coinQuarterEagle,
//     mint: "United States Mint",
//     year: 2025,
//     weight: "7.78 g (1/4 troy oz)",
//     purity: "22K · .9167 fine",
//     diameter: "22.0 mm",
//     certification: "Sealed, tamper-evident assay card",
//     description:
//       "A quarter-ounce fraction sized for gifting or dollar-cost-averaging into a position without committing to a full-ounce coin.",
//   },
//   {
//     id: "g9",
//     cat: "gold",
//     shape: "bar",
//     name: "Cast Ingot Bar — 1 oz",
//     spec: "31.1 g · 24K · .9999 fine",
//     price: 2470,
//     photo: IMAGES.bar1oz,
//     mint: "Valcambi Suisse",
//     year: 2025,
//     weight: "31.1 g (1 troy oz)",
//     purity: "24K · .9999 fine",
//     diameter: "41 × 24 mm bar",
//     certification: "Individually numbered, sealed assay card",
//     description:
//       "A full-ounce cast bar from one of the oldest continuously operating refiners in Switzerland, sealed with an individually numbered assay card.",
//   },
//   {
//     id: "g10",
//     cat: "gold",
//     shape: "coin",
//     name: "Philharmonic Coin",
//     spec: "1 oz · 24K · .9999 fine",
//     price: 2452,
//     photo: IMAGES.coinPhilharmonic,
//     mint: "Austrian Mint",
//     year: 2025,
//     weight: "31.1 g (1 troy oz)",
//     purity: "24K · .9999 fine",
//     diameter: "37.0 mm",
//     certification: "Sealed, tamper-evident assay card",
//     description:
//       "Europe's best-selling bullion coin, struck in fine gold with the organ pipes of Vienna's Musikverein on the reverse.",
//   },
//   {
//     id: "g11",
//     cat: "gold",
//     shape: "bar",
//     name: "Suisse 100g Cast Bar",
//     spec: "100 g · 24K · .9999 fine",
//     price: 8120,
//     photo: IMAGES.bar100g,
//     mint: "PAMP Suisse",
//     year: 2025,
//     weight: "100 g",
//     purity: "24K · .9999 fine",
//     diameter: "50 × 30 mm bar",
//     certification:
//       "Individually numbered, sealed assay card, certified assayer stamp",
//     isNew: true,
//     description:
//       "A refinery-fresh 100 g bar with mirror-polished faces and an individually numbered certificate. A popular mid-size format for building a position without the premium of many small coins.",
//   },
//   {
//     id: "g12",
//     cat: "gold",
//     shape: "bar",
//     name: "Suisse 1 Kilo Cast Bar",
//     spec: "1 kg · 24K · .9999 fine",
//     price: 81300,
//     photo: IMAGES.bar1kg,
//     mint: "PAMP Suisse",
//     year: 2025,
//     weight: "1,000 g (1 kg)",
//     purity: "24K · .9999 fine",
//     diameter: "116 × 51 mm bar",
//     certification:
//       "Individually numbered, sealed assay card, certified assayer stamp",
//     isNew: true,
//     description:
//       "The flagship investment bar. Substantial in hand, sealed with a unique serial number, and priced closest to spot of anything in the collection.",
//   },
//   {
//     id: "g13",
//     cat: "gold",
//     shape: "bar",
//     name: "Suisse 20g Cast Bar (Pair)",
//     spec: "2 × 20 g · 24K · .9999 fine",
//     price: 3320,
//     photo: IMAGES.bar20g,
//     mint: "Credit Suisse",
//     year: 2025,
//     weight: "40 g total (2 × 20 g)",
//     purity: "24K · .9999 fine",
//     diameter: "30 × 18 mm bars",
//     certification: "Individually numbered, sealed assay cards (sold as a pair)",
//     isNew: true,
//     description:
//       "Two matched 20 g bars, each independently numbered and sealed — a practical size for splitting a gift or a position in two.",
//   },
//   {
//     id: "s1",
//     cat: "ruby",
//     shape: "gem",
//     name: "Pigeon Blood Ruby",
//     spec: "2.14 ct · Oval Cut · Burma",
//     price: 8600,
//     photo: IMAGES.ruby,
//     origin: "Mogok, Myanmar",
//     cutGrade: "Oval brilliant, excellent symmetry",
//     clarity: "Eye-clean, minor natural inclusions",
//     certification: "GIA colored-stone report included",
//     description:
//       "The most saturated grade of red, prized above all others. This stone shows the even, glowing tone that gave the grade its name.",
//   },
//   {
//     id: "s2",
//     cat: "sapphire",
//     shape: "gem",
//     name: "Kashmir Sapphire",
//     spec: "3.05 ct · Cushion Cut",
//     price: 11200,
//     photo: IMAGES.sapphire,
//     origin: "Kashmir, India",
//     cutGrade: "Cushion, velvety cornflower blue",
//     clarity: "Lightly included, classic silk",
//     certification: "GIA colored-stone report included",
//     description:
//       "A soft, velvety blue with fine natural silk inclusions that scatter light rather than dull it — the hallmark of historic Kashmir material.",
//   },
//   {
//     id: "s3",
//     cat: "emerald",
//     shape: "gem",
//     name: "Muzo Emerald",
//     spec: "2.60 ct · Emerald Cut · Colombia",
//     price: 9450,
//     photo: IMAGES.emerald,
//     origin: "Muzo mine, Colombia",
//     cutGrade: "Step cut, deep saturated green",
//     clarity: "Minor jardin, typical of the species",
//     certification: "GIA colored-stone report included",
//     description:
//       "From the mine long considered the source of the finest emerald green, cut in the traditional step style that best shows off its color.",
//   },
//   {
//     id: "s4",
//     cat: "diamond",
//     shape: "gem",
//     name: "Old Mine Diamond",
//     spec: "1.80 ct · Round · VS1",
//     price: 15300,
//     photo: IMAGES.diamond,
//     origin: "Antique cut, provenance unknown",
//     cutGrade: "Old mine brilliant, hand-faceted",
//     clarity: "VS1, eye-clean",
//     certification: "GIA diamond grading report included",
//     description:
//       "A hand-cut antique stone with a higher crown and softer scintillation than modern brilliants — cut for candlelight rather than a jeweler's loupe.",
//   },
// ];

// const CATEGORIES = [
//   { id: "all", label: "All" },
//   { id: "gold", label: "Gold" },
//   { id: "ruby", label: "Ruby" },
//   { id: "sapphire", label: "Sapphire" },
//   { id: "emerald", label: "Emerald" },
//   { id: "diamond", label: "Diamond" },
// ];

// const WHY_US = [
//   {
//     icon: <ShieldCheck size={32} strokeWidth={1.5} color="#A9793B" />,
//     title: "Certified Purity",
//     body: "Every coin and bar ships sealed with an assay card or grading report confirming exact weight and fineness.",
//     stat: "100%",
//     statLabel: "Verified",
//   },
//   {
//     icon: <Building2 size={32} strokeWidth={1.5} color="#A9793B" />,
//     title: "Sourced Direct",
//     body: "We buy straight from accredited mints and refiners — no unnecessary hands in between.",
//     stat: "12+",
//     statLabel: "Partner Mints",
//   },
//   {
//     icon: <Shield size={32} strokeWidth={1.5} color="#A9793B" />,
//     title: "Insured Delivery",
//     body: "Every order is fully insured in transit, tracked door to door until it's in your hands.",
//     stat: "$0",
//     statLabel: "Lost In Transit",
//   },
//   {
//     icon: <TrendingUp size={32} strokeWidth={1.5} color="#A9793B" />,
//     title: "Transparent Pricing",
//     body: "Prices track daily spot rates with our margin shown up front — never buried in the total.",
//     stat: "Live",
//     statLabel: "Spot Updates",
//   },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Adaeze O.",
//     loc: "Lagos, NG",
//     initials: "AO",
//     color: "#A9793B",
//     rating: 5,
//     quote:
//       "My 100g bar arrived exactly as described, sealed and numbered. The whole process was seamless — ordering again for my next allocation.",
//     product: "Suisse 100g Cast Bar",
//   },
//   {
//     name: "Michael T.",
//     loc: "Houston, US",
//     initials: "MT",
//     color: "#6B7A8D",
//     rating: 5,
//     quote:
//       "Clear pricing, no pressure, and the assay documentation made resale simple when I needed it. This is how bullion dealing should work.",
//     product: "Sovereign Eagle Coin",
//   },
//   {
//     name: "Priya K.",
//     loc: "Toronto, CA",
//     initials: "PK",
//     color: "#8D5A8A",
//     rating: 5,
//     quote:
//       "The gemstone reports were thorough and the Kashmir Sapphire matched the listing detail for detail. Absolutely stunning stone.",
//     product: "Kashmir Sapphire",
//   },
//   {
//     name: "Chinedu A.",
//     loc: "Abuja, NG",
//     initials: "CA",
//     color: "#3A7A5C",
//     rating: 5,
//     quote:
//       "Fast, insured shipping on a kilo bar order. Communication was clear at every step. Will be back for the next piece.",
//     product: "Suisse 1 Kilo Cast Bar",
//   },
// ];

// const money = (n) =>
//   "$" +
//   n.toLocaleString("en-US", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });

// // ---------------------------------------------------------------------------
// // Market Spot Ticker
// // ---------------------------------------------------------------------------
// const BASE_PRICES = {
//   gold: 2451.3,
//   silver: 29.42,
//   platinum: 987.1,
//   palladium: 1043.5,
// };

// function SpotTicker() {
//   const [prices, setPrices] = useState(BASE_PRICES);
//   const [dirs, setDirs] = useState({
//     gold: 1,
//     silver: 1,
//     platinum: -1,
//     palladium: 1,
//   });

//   useEffect(() => {
//     const id = setInterval(() => {
//       setPrices((prev) => {
//         const next = {};
//         const nextDirs = {};
//         Object.keys(prev).forEach((k) => {
//           const delta = (Math.random() - 0.5) * 2;
//           next[k] = +(prev[k] + delta).toFixed(2);
//           nextDirs[k] = delta >= 0 ? 1 : -1;
//         });
//         setDirs(nextDirs);
//         return next;
//       });
//     }, 3500);
//     return () => clearInterval(id);
//   }, []);

//   const fmt = (n) =>
//     n.toLocaleString("en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });

//   const metals = [
//     { key: "gold", label: "Gold (XAU)" },
//     { key: "silver", label: "Silver (XAG)" },
//     { key: "platinum", label: "Platinum (XPT)" },
//     { key: "palladium", label: "Palladium (XPD)" },
//   ];

//   return (
//     <div className="spot-ticker">
//       <span className="ticker-label">LIVE SPOT PRICES</span>
//       <div className="ticker-sep" />
//       {metals.map(({ key, label }) => (
//         <span key={key} className="ticker-item">
//           <span className="ticker-metal">{label}</span>
//           <span className={`ticker-price ${dirs[key] > 0 ? "up" : "down"}`}>
//             ${fmt(prices[key])}/oz
//             <span className="ticker-arrow">{dirs[key] > 0 ? " ▲" : " ▼"}</span>
//           </span>
//         </span>
//       ))}
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Market Insights Data
// // ---------------------------------------------------------------------------
// const MARKET_INSIGHTS = [
//   {
//     title: "Store of Value",
//     body: "Gold has maintained purchasing power for over 5,000 years. Unlike fiat currencies, no government can debase a finite physical asset.",
//     stat: "5,000+",
//     statUnit: "years of use",
//   },
//   {
//     title: "Inflation Hedge",
//     body: "During periods of high inflation, gold historically outperforms equities and bonds, preserving real wealth when paper assets erode.",
//     stat: "+15%",
//     statUnit: "avg. in inflationary years",
//   },
//   {
//     title: "Portfolio Diversification",
//     body: "Gold carries a near-zero correlation to equities. Even a 5–10% allocation has been shown to reduce portfolio volatility significantly.",
//     stat: "-0.04",
//     statUnit: "correlation to S&P 500",
//   },
//   {
//     title: "Global Liquidity",
//     body: "Physical gold is the only universally accepted monetary asset. It can be liquidated in any major city worldwide, at any time.",
//     stat: "$220B",
//     statUnit: "daily trading volume",
//   },
// ];

// // ---------------------------------------------------------------------------
// // Product image component
// // ---------------------------------------------------------------------------
// function ProductImage({ p, className }) {
//   if (p.photo) {
//     return (
//       <img
//         src={p.photo}
//         alt={p.name}
//         className={className || "prod-img"}
//         loading="lazy"
//         onError={(e) => {
//           e.target.style.display = "none";
//           e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
//         }}
//       />
//     );
//   }
//   // Fallback text placeholder
//   return (
//     <div className="prod-fallback">
//       <span>{p.name.charAt(0)}</span>
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Star Rating
// // ---------------------------------------------------------------------------
// function Stars({ count = 5 }) {
//   return (
//     <div className="stars" aria-label={`${count} out of 5 stars`}>
//       {Array.from({ length: 5 }).map((_, i) => (
//         <span key={i} className={i < count ? "star filled" : "star"}>
//           ★
//         </span>
//       ))}
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // App
// // ---------------------------------------------------------------------------

// export default function App() {
//   const [page, setPage] = useState("home");
//   const [activeCat, setActiveCat] = useState("all");
//   const [cart, setCart] = useState({});
//   const [detailId, setDetailId] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [checkoutStep, setCheckoutStep] = useState("idle"); // idle | form | success
//   const [orderRef, setOrderRef] = useState("");
//   const [checkoutForm, setCheckoutForm] = useState({
//     // Delivery
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "US",
//     // Payment
//     cardNumber: "",
//     cardHolder: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [cardType, setCardType] = useState("");

//   const detailProduct = useMemo(
//     () => (detailId ? PRODUCTS.find((p) => p.id === detailId) : null),
//     [detailId],
//   );

//   const visible = useMemo(
//     () =>
//       activeCat === "all"
//         ? PRODUCTS
//         : PRODUCTS.filter((p) => p.cat === activeCat),
//     [activeCat],
//   );

//   const latest = useMemo(() => PRODUCTS.filter((p) => p.isNew), []);

//   const cartItems = useMemo(
//     () =>
//       Object.entries(cart)
//         .filter(([, qty]) => qty > 0)
//         .map(([id, qty]) => ({ ...PRODUCTS.find((p) => p.id === id), qty })),
//     [cart],
//   );

//   const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
//   const subtotal = cartItems.reduce((s, i) => s + i.qty * i.price, 0);
//   const escrow = Math.round(subtotal * 0.015);
//   const total = subtotal + escrow;

//   const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
//   const setQty = (id, qty) =>
//     setCart((c) => ({ ...c, [id]: Math.max(0, qty) }));
//   const removeItem = (id) => setCart((c) => ({ ...c, [id]: 0 }));

//   const goToShop = (cat) => {
//     if (cat) setActiveCat(cat);
//     setPage("shop");
//     setMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const navTo = (p) => {
//     setPage(p);
//     setMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // ---------- Checkout helpers ----------
//   const detectCardType = (num) => {
//     const n = num.replace(/\s/g, "");
//     if (/^4/.test(n)) return "Visa";
//     if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return "Mastercard";
//     if (/^3[47]/.test(n)) return "Amex";
//     if (/^6/.test(n)) return "Discover";
//     return "";
//   };

//   const fmtCardNumber = (val) => {
//     const digits = val.replace(/\D/g, "").slice(0, 16);
//     return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
//   };

//   const fmtExpiry = (val) => {
//     const digits = val.replace(/\D/g, "").slice(0, 4);
//     if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
//     return digits;
//   };

//   const handleCheckoutChange = (field, raw) => {
//     let val = raw;
//     if (field === "cardNumber") {
//       val = fmtCardNumber(raw);
//       setCardType(detectCardType(raw));
//     }
//     if (field === "expiry") val = fmtExpiry(raw);
//     if (field === "cvv") val = raw.replace(/\D/g, "").slice(0, 4);
//     setCheckoutForm((f) => ({ ...f, [field]: val }));
//     if (formErrors[field]) setFormErrors((e) => ({ ...e, [field]: "" }));
//   };

//   const validateCheckout = () => {
//     const errs = {};
//     const f = checkoutForm;
//     if (!f.fullName.trim()) errs.fullName = "Required";
//     if (!f.email.includes("@")) errs.email = "Valid email required";
//     if (!f.phone.trim()) errs.phone = "Required";
//     if (!f.address.trim()) errs.address = "Required";
//     if (!f.city.trim()) errs.city = "Required";
//     if (!f.state.trim()) errs.state = "Required";
//     if (!f.zip.trim()) errs.zip = "Required";
//     const cardDigits = f.cardNumber.replace(/\s/g, "");
//     if (cardDigits.length < 13) errs.cardNumber = "Enter a valid card number";
//     if (!f.cardHolder.trim()) errs.cardHolder = "Required";
//     const expiryParts = f.expiry.split("/");
//     if (
//       expiryParts.length !== 2 ||
//       expiryParts[0].length !== 2 ||
//       expiryParts[1].length !== 2
//     )
//       errs.expiry = "MM/YY format";
//     if (f.cvv.length < 3) errs.cvv = "3–4 digits";
//     setFormErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const submitCheckout = () => {
//     if (!validateCheckout()) return;
//     const ref = "RG-" + Date.now().toString(36).toUpperCase();
//     setOrderRef(ref);
//     setCheckoutStep("success");
//     setCart({});
//   };

//   return (
//     <div className="aureum">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

//         html, body { margin: 0; padding: 0; width: 100%; scroll-behavior: smooth; }
//         #root, #app { width: 100%; }

//         .aureum {
//           --bg: #F9F5EE;
//           --bg-2: #FFFFFF;
//           --panel: #F2EBD9;
//           --glass: rgba(255,255,255,0.65);
//           --glass-border: rgba(169,121,59,0.18);
//           --gold: #B8842A;
//           --gold-deep: #8C6329;
//           --gold-light: #D4A853;
//           --gold-glow: rgba(184,132,42,0.18);
//           --ink: #1C1509;
//           --ink-80: rgba(28,21,9,0.80);
//           --hairline: rgba(28,21,9,0.10);
//           --muted: #7A6E5E;
//           --up: #1A7A4A;
//           --down: #B03030;
//           font-family: 'Inter', sans-serif;
//           background: var(--bg);
//           color: var(--ink);
//           min-height: 100vh;
//           width: 100%;
//           margin: 0;
//         }
//         .aureum * { box-sizing: border-box; }
//         .aureum h1, .aureum h2, .aureum h3 {
//           font-family: 'Cormorant Garamond', serif;
//           font-weight: 600;
//           letter-spacing: 0.01em;
//           margin: 0;
//         }
//         .mono { font-family: 'IBM Plex Mono', monospace; }

//         /* ── SPOT TICKER ──────────────────────────────────────── */
//         .spot-ticker {
//           display: flex; align-items: center; gap: 28px;
//           padding: 10px 5vw;
//           background: var(--ink);
//           overflow-x: auto; white-space: nowrap;
//           scrollbar-width: none;
//         }
//         .spot-ticker::-webkit-scrollbar { display: none; }
//         .ticker-label {
//           font-family: 'IBM Plex Mono', monospace; font-size: 9px;
//           letter-spacing: 0.22em; text-transform: uppercase;
//           color: var(--gold-light); font-weight: 500; flex-shrink: 0;
//         }
//         .ticker-sep {
//           width: 1px; height: 14px; background: rgba(255,255,255,0.15); flex-shrink: 0;
//         }
//         .ticker-item { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
//         .ticker-metal {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px;
//           color: rgba(255,255,255,0.5); letter-spacing: 0.04em;
//         }
//         .ticker-price {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
//           font-weight: 500; transition: color 0.4s;
//         }
//         .ticker-price.up { color: #4ECA84; }
//         .ticker-price.down { color: #F07070; }
//         .ticker-arrow { font-size: 8px; }

//         /* ── HEADER / NAV ─────────────────────────────────────── */
//         .au-header {
//           display: flex; align-items: center; justify-content: space-between;
//           padding: 18px 5vw;
//           border-bottom: 1px solid var(--glass-border);
//           background: var(--glass);
//           backdrop-filter: blur(18px) saturate(1.8);
//           -webkit-backdrop-filter: blur(18px) saturate(1.8);
//           position: sticky; top: 0; z-index: 100;
//           transition: box-shadow 0.3s;
//           box-shadow: 0 1px 0 var(--glass-border), 0 4px 20px rgba(28,21,9,0.04);
//         }
//         .au-logo { display: flex; align-items: center; gap: 10px; cursor: pointer; text-decoration: none; }
//         .au-logo .mark {
//           color: var(--gold); font-size: 22px;
//           filter: drop-shadow(0 0 6px rgba(169,121,59,0.4));
//         }
//         .au-logo .name {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 19px; letter-spacing: 0.12em;
//           text-transform: uppercase; color: var(--ink);
//           line-height: 1;
//         }

//         /* Desktop nav */
//         .au-nav {
//           display: flex; align-items: center; gap: 32px;
//         }
//         .au-nav button {
//           background: none; border: none; cursor: pointer;
//           font-family: 'Jost', sans-serif; font-size: 12.5px;
//           letter-spacing: 0.09em; text-transform: uppercase;
//           color: var(--muted); padding: 6px 0;
//           border-bottom: 1.5px solid transparent;
//           transition: color 0.2s, border-color 0.2s;
//         }
//         .au-nav button.active,
//         .au-nav button:hover { color: var(--ink); border-color: var(--gold); }
//         .cart-btn { position: relative; }
//         .cart-badge {
//           position: absolute; top: -9px; right: -15px;
//           background: var(--gold); color: #fff;
//           font-family: 'IBM Plex Mono', monospace; font-size: 9px; font-weight: 500;
//           border-radius: 50%; width: 17px; height: 17px;
//           display: flex; align-items: center; justify-content: center;
//           box-shadow: 0 2px 6px rgba(169,121,59,0.4);
//           animation: pop 0.25s ease;
//         }
//         @keyframes pop {
//           0% { transform: scale(0.5); }
//           70% { transform: scale(1.15); }
//           100% { transform: scale(1); }
//         }

//         /* Hamburger */
//         .hamburger {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; cursor: pointer;
//           padding: 6px; z-index: 110;
//         }
//         .hamburger span {
//           display: block; width: 24px; height: 2px;
//           background: var(--ink); border-radius: 2px;
//           transition: all 0.3s ease;
//           transform-origin: center;
//         }
//         .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
//         .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
//         .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

//         /* Mobile drawer */
//         .mobile-drawer {
//           position: fixed; inset: 0; z-index: 90;
//           background: rgba(51,41,28,0.55);
//           opacity: 0; pointer-events: none;
//           transition: opacity 0.3s;
//         }
//         .mobile-drawer.open { opacity: 1; pointer-events: all; }
//         .mobile-nav {
//           position: absolute; top: 0; right: 0;
//           width: min(320px, 85vw); height: 100vh;
//           background: var(--bg-2);
//           border-left: 1px solid var(--hairline);
//           padding: 90px 32px 40px;
//           display: flex; flex-direction: column; gap: 8px;
//           transform: translateX(100%);
//           transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
//           box-shadow: -8px 0 32px rgba(51,41,28,0.12);
//         }
//         .mobile-drawer.open .mobile-nav { transform: translateX(0); }
//         .mobile-nav button {
//           background: none; border: none; cursor: pointer;
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 26px; font-weight: 600;
//           color: var(--ink); text-align: left;
//           padding: 14px 0; border-bottom: 1px solid var(--hairline);
//           letter-spacing: 0.04em;
//           transition: color 0.2s, padding-left 0.2s;
//         }
//         .mobile-nav button:hover { color: var(--gold); padding-left: 8px; }
//         .mobile-nav button.active { color: var(--gold); }
//         .mobile-nav .mob-cart-row {
//           display: flex; align-items: center; gap: 10px;
//         }
//         .mob-badge {
//           background: var(--gold); color: #fff;
//           font-size: 11px; font-family: 'IBM Plex Mono', monospace;
//           padding: 2px 8px; border-radius: 999px;
//         }

//         /* ── HERO ─────────────────────────────────────────────── */
//         .au-hero {
//           min-height: 100vh; width: 100%;
//           display: flex; flex-direction: column; align-items: center; justify-content: center;
//           text-align: center; padding: 100px 5vw 80px;
//           position: relative; overflow: hidden;
//           border-bottom: 1px solid var(--hairline);
//         }
//         .au-hero .hero-bg {
//           position: absolute; inset: 0;
//           background:
//             linear-gradient(145deg, rgba(250,246,237,0.93) 0%, rgba(250,246,237,0.88) 60%, rgba(240,230,210,0.95) 100%);
//           z-index: 0;
//         }
//         .au-hero .hero-bg::after {
//           content: ''; position: absolute; inset: 0;
//           background:
//             radial-gradient(ellipse at 15% 50%, rgba(169,121,59,0.10) 0%, transparent 55%),
//             radial-gradient(ellipse at 85% 80%, rgba(169,121,59,0.07) 0%, transparent 50%);
//         }
//         .au-hero > * { position: relative; z-index: 1; }
//         .au-hero .eyebrow {
//           font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.3em;
//           text-transform: uppercase; color: var(--gold); margin-bottom: 26px; font-weight: 600;
//           display: flex; align-items: center; gap: 14px; justify-content: center;
//         }
//         .au-hero .eyebrow::before,
//         .au-hero .eyebrow::after {
//           content: ''; display: block; width: 40px; height: 1px; background: var(--gold); opacity: 0.6;
//         }
//         .au-hero h1 {
//           font-size: clamp(38px, 6.5vw, 72px); max-width: 900px; margin: 0 auto 28px;
//           line-height: 1.10; color: var(--ink); font-weight: 700;
//         }
//         .au-hero p {
//           color: var(--muted); font-size: clamp(15px, 2vw, 18px); max-width: 580px;
//           margin: 0 auto 52px; line-height: 1.75;
//         }
//         .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
//         .hero-cta button {
//           padding: 16px 40px; font-family: 'Jost', sans-serif; font-size: 12.5px;
//           letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer;
//           transition: all 0.3s ease; border-radius: 4px; font-weight: 600;
//         }
//         .hero-cta .primary {
//           background: var(--gold); color: #fff; border: 1.5px solid var(--gold);
//           box-shadow: 0 8px 24px rgba(169,121,59,0.32);
//         }
//         .hero-cta .primary:hover {
//           background: var(--gold-deep); border-color: var(--gold-deep);
//           transform: translateY(-3px); box-shadow: 0 14px 36px rgba(169,121,59,0.42);
//         }
//         .hero-cta .secondary {
//           background: transparent; color: var(--gold); border: 1.5px solid var(--gold);
//         }
//         .hero-cta .secondary:hover {
//           background: rgba(169,121,59,0.08); transform: translateY(-3px);
//         }
//         .hero-stats {
//           display: flex; gap: 48px; flex-wrap: wrap; justify-content: center;
//           margin-top: 60px; padding-top: 52px;
//           border-top: 1px solid var(--hairline);
//         }
//         .hero-stat { text-align: center; }
//         .hero-stat .num {
//           font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 700;
//           color: var(--gold-deep); line-height: 1;
//         }
//         .hero-stat .lbl {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
//           letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);
//           margin-top: 6px;
//         }

//         /* ── SHOWCASE ─────────────────────────────────────────── */
//         .au-showcase { padding: 6vw 5vw; background: var(--bg); border-bottom: 1px solid var(--hairline); }
//         .showcase-grid {
//           display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 24px; max-width: 1400px; margin: 0 auto;
//         }
//         .showcase-item {
//           border-radius: 12px; overflow: hidden;
//           box-shadow: 0 6px 20px rgba(51,41,28,0.09);
//           transition: all 0.4s ease; height: 340px; position: relative; cursor: pointer;
//         }
//         .showcase-item:hover {
//           box-shadow: 0 20px 48px rgba(51,41,28,0.18);
//           transform: translateY(-8px);
//         }
//         .showcase-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
//         .showcase-item:hover img { transform: scale(1.07); }
//         .showcase-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(160deg, rgba(140,99,41,0.25) 0%, rgba(51,41,28,0.65) 100%);
//           display: flex; flex-direction: column;
//           align-items: flex-start; justify-content: flex-end;
//           padding: 28px;
//           opacity: 0; transition: opacity 0.4s ease;
//         }
//         .showcase-item:hover .showcase-overlay { opacity: 1; }
//         .showcase-overlay h3 {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(20px, 2.5vw, 28px); color: #fff;
//           margin-bottom: 6px; font-weight: 700;
//         }
//         .showcase-overlay p { font-size: 13px; color: rgba(255,255,255,0.8); margin: 0; }
//         .showcase-tag {
//           position: absolute; top: 16px; left: 16px;
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px;
//           letter-spacing: 0.12em; text-transform: uppercase;
//           color: var(--gold-deep); background: rgba(250,246,237,0.9);
//           padding: 5px 12px; border-radius: 999px; font-weight: 600;
//           backdrop-filter: blur(4px);
//         }

//         /* ── LATEST ARRIVALS ──────────────────────────────────── */
//         .au-latest { padding: 7vw 5vw; border-bottom: 1px solid var(--hairline); }
//         .latest-head {
//           display: flex; align-items: flex-end; justify-content: space-between;
//           max-width: 1400px; margin: 0 auto 52px; flex-wrap: wrap; gap: 18px;
//         }
//         .latest-head h2 { font-size: clamp(28px, 4vw, 44px); color: var(--ink); font-weight: 700; }
//         .eyebrow-sm {
//           font-family: 'IBM Plex Mono', monospace; font-size: 11px;
//           letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold);
//           display: block; margin-bottom: 10px; font-weight: 600;
//         }
//         .view-all-btn {
//           background: none; border: 1.5px solid var(--gold); color: var(--gold-deep);
//           padding: 12px 28px; font-family: 'Jost', sans-serif; font-size: 12px;
//           letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
//           transition: all 0.3s; font-weight: 500; border-radius: 4px; white-space: nowrap;
//         }
//         .view-all-btn:hover { background: var(--gold); color: #fff; transform: translateY(-2px); }
//         .latest-grid {
//           display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 28px; max-width: 1400px; margin: 0 auto;
//         }
//         .latest-card {
//           background: var(--bg-2); border: 1px solid var(--hairline); border-radius: 10px;
//           display: flex; flex-direction: column; overflow: hidden;
//           position: relative; transition: all 0.4s ease;
//           box-shadow: 0 2px 8px rgba(51,41,28,0.04);
//         }
//         .latest-card:hover {
//           box-shadow: 0 16px 36px rgba(51,41,28,0.13);
//           transform: translateY(-8px); border-color: var(--gold);
//         }
//         .latest-card .img-wrap {
//           width: 100%; height: 220px; overflow: hidden; position: relative;
//           background: var(--panel);
//         }
//         .latest-card .img-wrap img {
//           width: 100%; height: 100%; object-fit: cover;
//           transition: transform 0.5s ease;
//         }
//         .latest-card:hover .img-wrap img { transform: scale(1.07); }
//         .latest-card .body { padding: 26px 24px 30px; }
//         .new-tag {
//           position: absolute; top: 14px; left: 14px; z-index: 2;
//           font-family: 'IBM Plex Mono', monospace; font-size: 9.5px;
//           letter-spacing: 0.12em; color: #fff; background: var(--gold);
//           padding: 5px 11px; text-transform: uppercase; font-weight: 600; border-radius: 999px;
//         }

//         /* ── SHOP PAGE ────────────────────────────────────────── */
//         .shop-head { padding: 5vw 5vw 0; text-align: center; }
//         .shop-head h1 { font-size: clamp(30px, 4vw, 42px); color: var(--ink); margin-bottom: 12px; font-weight: 700; }
//         .shop-head p { color: var(--muted); font-size: 15px; max-width: 560px; margin: 0 auto; }

//         .au-tabs {
//           display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;
//           padding: 36px 5vw; border-bottom: 1px solid var(--hairline);
//         }
//         .au-tabs button {
//           background: var(--bg-2); border: 1.5px solid var(--hairline); color: var(--muted);
//           font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.06em;
//           padding: 10px 22px; border-radius: 999px; cursor: pointer; transition: all 0.3s; font-weight: 500;
//         }
//         .au-tabs button.active { border-color: var(--gold); color: #fff; background: var(--gold); }
//         .au-tabs button:hover:not(.active) { color: var(--ink); border-color: var(--gold); }

//         /* Product Grid */
//         .au-grid {
//           display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
//           gap: 28px; padding: 5vw 5vw 8vw; max-width: 1400px; margin: 0 auto;
//         }
//         .au-card {
//           background: var(--bg-2); border: 1px solid var(--hairline); border-radius: 10px;
//           display: flex; flex-direction: column; overflow: hidden;
//           transition: all 0.4s ease; position: relative;
//           box-shadow: 0 2px 8px rgba(51,41,28,0.04);
//         }
//         .au-card:hover {
//           box-shadow: 0 16px 36px rgba(51,41,28,0.12);
//           transform: translateY(-8px); border-color: rgba(169,121,59,0.4);
//         }
//         .card-img-wrap {
//           width: 100%; height: 210px; overflow: hidden;
//           background: linear-gradient(135deg, var(--panel) 0%, #F2EBD9 100%);
//           position: relative;
//         }
//         .prod-img {
//           width: 100%; height: 100%; object-fit: cover;
//           transition: transform 0.5s ease;
//         }
//         .au-card:hover .prod-img { transform: scale(1.07); }
//         .prod-fallback {
//           width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
//           font-family: 'Cormorant Garamond', serif; font-size: 60px;
//           color: var(--gold); opacity: 0.5;
//         }
//         .card-body { padding: 22px 20px 24px; display: flex; flex-direction: column; flex: 1; }
//         .au-card h3 { font-size: 18px; margin-bottom: 6px; color: var(--ink); font-weight: 600; letter-spacing: 0.01em; }
//         .au-card .spec {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
//           color: var(--muted); margin-bottom: 14px; letter-spacing: 0.02em;
//         }
//         .au-card .price {
//           font-family: 'IBM Plex Mono', monospace; font-size: 16px;
//           color: var(--gold-deep); margin-bottom: 18px; font-weight: 600;
//         }
//         .card-btns { display: flex; gap: 8px; margin-top: auto; }
//         .add-btn, .detail-btn {
//           padding: 11px 0; background: transparent; border: 1.5px solid var(--gold);
//           color: var(--gold-deep); font-family: 'Inter', sans-serif; font-size: 11.5px;
//           letter-spacing: 0.09em; text-transform: uppercase; cursor: pointer;
//           transition: all 0.28s; font-weight: 600; border-radius: 6px;
//         }
//         .add-btn { flex: 1.4; }
//         .detail-btn { flex: 1; border-color: var(--hairline); color: var(--muted); }
//         .add-btn:hover { background: var(--gold); color: #fff; transform: translateY(-2px); box-shadow: 0 6px 18px var(--gold-glow); }
//         .detail-btn:hover { border-color: var(--gold); color: var(--gold-deep); }

//         /* ── MARKET INSIGHTS ────────────────────────────────── */
//         .au-insights {
//           padding: 7vw 5vw; border-bottom: 1px solid var(--hairline);
//           background: linear-gradient(160deg, #f6f0e4 0%, #faf5ee 60%, #f3ead8 100%);
//         }
//         .insights-inner { max-width: 1400px; margin: 0 auto; }
//         .insights-inner .eyebrow-sm { display: block; text-align: center; margin-bottom: 12px; }
//         .insights-inner h2 {
//           font-size: clamp(28px, 4vw, 44px); text-align: center;
//           color: var(--ink); margin-bottom: 14px; font-weight: 700;
//         }
//         .insights-subtitle {
//           text-align: center; color: var(--muted); font-size: 15px;
//           max-width: 520px; margin: 0 auto 56px; line-height: 1.75;
//         }
//         .insights-grid {
//           display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//           gap: 20px;
//         }
//         .insight-card {
//           background: var(--glass);
//           border: 1px solid var(--glass-border);
//           border-radius: 14px; padding: 32px 28px;
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           transition: box-shadow 0.35s, transform 0.35s;
//           box-shadow: 0 2px 12px rgba(28,21,9,0.05);
//         }
//         .insight-card:hover {
//           box-shadow: 0 14px 40px rgba(184,132,42,0.14);
//           transform: translateY(-5px);
//           border-color: rgba(184,132,42,0.35);
//         }
//         .insight-stat {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 38px; font-weight: 700;
//           color: var(--gold-deep); line-height: 1; margin-bottom: 2px;
//         }
//         .insight-stat-unit {
//           font-family: 'IBM Plex Mono', monospace; font-size: 9.5px;
//           letter-spacing: 0.12em; text-transform: uppercase;
//           color: var(--gold); margin-bottom: 18px; display: block;
//         }
//         .insight-card h3 {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 20px; font-weight: 700; color: var(--ink); margin-bottom: 10px;
//         }
//         .insight-card p { font-size: 13.5px; color: var(--muted); line-height: 1.75; margin: 0; }

//         /* ── OUR PROMISE ────────────────────────────────────── */
//         .au-why {
//           padding: 8vw 5vw; position: relative; overflow: hidden;
//           background: linear-gradient(145deg, #2B2016 0%, #3D2E18 40%, #2B2016 100%);
//           border-bottom: 1px solid rgba(169,121,59,0.2);
//         }
//         .au-why::before {
//           content: ''; position: absolute; inset: 0;
//           background:
//             radial-gradient(ellipse at 20% 50%, rgba(169,121,59,0.12) 0%, transparent 60%),
//             radial-gradient(ellipse at 80% 20%, rgba(212,168,83,0.08) 0%, transparent 50%);
//           pointer-events: none;
//         }
//         .why-inner { max-width: 1400px; margin: 0 auto; position: relative; z-index: 1; }
//         .why-inner .eyebrow-sm { color: var(--gold-light); }
//         .why-inner h2 {
//           font-size: clamp(30px, 4vw, 48px); margin-bottom: 16px;
//           color: #F5EDD8; font-weight: 700; text-align: center;
//         }
//         .why-subtitle {
//           text-align: center; color: rgba(245,237,216,0.55); font-size: 15px;
//           max-width: 520px; margin: 0 auto 64px; line-height: 1.7;
//         }
//         .why-inner .eyebrow-sm { display: block; text-align: center; margin-bottom: 14px; }
//         .why-grid {
//           display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//           gap: 2px; background: rgba(169,121,59,0.15); border: 1px solid rgba(169,121,59,0.2);
//           border-radius: 12px; overflow: hidden;
//         }
//         .why-item {
//           background: rgba(43,32,22,0.7);
//           padding: 42px 36px; position: relative;
//           transition: background 0.3s;
//           display: flex; flex-direction: column;
//         }
//         .why-item:hover { background: rgba(55,40,20,0.95); }
//         .why-icon {
//           font-size: 36px; margin-bottom: 20px;
//           display: flex; align-items: center; justify-content: center;
//           width: 64px; height: 64px;
//           background: rgba(169,121,59,0.15);
//           border: 1px solid rgba(169,121,59,0.25);
//           border-radius: 12px;
//           transition: all 0.3s;
//         }
//         .why-item:hover .why-icon {
//           background: rgba(169,121,59,0.25);
//           box-shadow: 0 0 20px rgba(169,121,59,0.2);
//         }
//         .why-stat {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 38px; font-weight: 700;
//           color: var(--gold-light); line-height: 1;
//           margin-bottom: 4px;
//         }
//         .why-stat-label {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px;
//           letter-spacing: 0.14em; text-transform: uppercase;
//           color: rgba(212,168,83,0.6); margin-bottom: 20px;
//         }
//         .why-item h3 {
//           font-size: 21px; margin-bottom: 12px;
//           color: #F5EDD8; font-weight: 700;
//           font-family: 'Cormorant Garamond', serif;
//         }
//         .why-item p { color: rgba(245,237,216,0.6); font-size: 14px; line-height: 1.75; margin: 0; }
//         .why-divider {
//           position: absolute; top: 0; right: 0;
//           width: 1px; height: 100%;
//           background: linear-gradient(180deg, transparent, rgba(169,121,59,0.3), transparent);
//         }

//         /* ── TESTIMONIALS ─────────────────────────────────────── */
//         .au-testimonials { padding: 8vw 5vw; background: var(--bg); }
//         .test-inner { max-width: 1400px; margin: 0 auto; }
//         .test-inner .eyebrow-sm { display: block; text-align: center; margin-bottom: 14px; }
//         .test-inner h2 {
//           font-size: clamp(28px, 4vw, 44px); margin-bottom: 16px;
//           color: var(--ink); text-align: center; font-weight: 700;
//         }
//         .test-subtitle {
//           text-align: center; color: var(--muted); font-size: 15px;
//           max-width: 480px; margin: 0 auto 56px; line-height: 1.7;
//         }
//         .test-aggregate {
//           display: flex; align-items: center; justify-content: center;
//           gap: 14px; margin-bottom: 52px;
//         }
//         .test-agg-stars { font-size: 22px; color: #D4A853; letter-spacing: 2px; }
//         .test-agg-num {
//           font-family: 'Cormorant Garamond', serif; font-size: 28px;
//           font-weight: 700; color: var(--ink);
//         }
//         .test-agg-count {
//           font-family: 'IBM Plex Mono', monospace; font-size: 11px;
//           color: var(--muted);
//         }
//         .test-grid {
//           display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 24px;
//         }
//         .test-card {
//           background: var(--bg-2); border: 1px solid var(--hairline); border-radius: 12px;
//           padding: 32px 28px; transition: all 0.4s ease;
//           box-shadow: 0 2px 8px rgba(51,41,28,0.04);
//           display: flex; flex-direction: column; gap: 20px;
//           position: relative; overflow: hidden;
//         }
//         .test-card::before {
//           content: '“';
//           position: absolute; top: 12px; right: 24px;
//           font-family: 'Cormorant Garamond', serif; font-size: 96px;
//           color: var(--gold); opacity: 0.07; line-height: 1; pointer-events: none;
//         }
//         .test-card:hover {
//           box-shadow: 0 14px 32px rgba(51,41,28,0.11);
//           transform: translateY(-6px); border-color: rgba(169,121,59,0.3);
//         }
//         .stars { display: flex; gap: 3px; }
//         .star { font-size: 15px; color: #D9C5A0; }
//         .star.filled { color: #D4A853; }
//         .test-quote {
//           font-family: 'Cormorant Garamond', serif; font-size: 17.5px;
//           line-height: 1.65; color: var(--ink); font-weight: 500;
//           flex: 1;
//         }
//         .test-product {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px;
//           color: var(--gold); letter-spacing: 0.08em;
//           text-transform: uppercase; opacity: 0.8;
//         }
//         .test-author {
//           display: flex; align-items: center; gap: 14px;
//           padding-top: 18px; border-top: 1px solid var(--hairline);
//         }
//         .test-avatar {
//           width: 42px; height: 42px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Cormorant Garamond', serif; font-size: 16px;
//           font-weight: 700; color: #fff; flex-shrink: 0;
//           letter-spacing: 0.02em;
//         }
//         .test-name {
//           font-family: 'IBM Plex Mono', monospace; font-size: 11.5px;
//           color: var(--ink); font-weight: 600; letter-spacing: 0.04em;
//         }
//         .test-loc {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
//           color: var(--muted); margin-top: 3px;
//         }

//         /* ── CART ─────────────────────────────────────────────── */
//         .au-cart-wrap { padding: 5vw 5vw 6vw; max-width: 1000px; margin: 0 auto; width: 100%; }
//         .au-cart-wrap h1 { font-size: 34px; margin-bottom: 8px; color: var(--ink); }
//         .au-cart-wrap .sub { color: var(--muted); font-size: 13px; margin-bottom: 40px; }
//         .ledger { border-top: 1px solid var(--hairline); }
//         .ledger-row {
//           display: grid; grid-template-columns: 72px 1fr 130px 110px 40px;
//           align-items: center; gap: 18px; padding: 20px 0; border-bottom: 1px solid var(--hairline);
//         }
//         .ledger-row .mini-img {
//           width: 60px; height: 60px; border-radius: 6px; overflow: hidden;
//           background: var(--panel); flex-shrink: 0;
//         }
//         .ledger-row .mini-img img {
//           width: 100%; height: 100%; object-fit: cover;
//         }
//         .ledger-row .iname { font-size: 17px; font-family: 'Cormorant Garamond', serif; color: var(--ink); }
//         .ledger-row .ispec { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); margin-top: 3px; }
//         .qty-box { display: flex; align-items: center; border: 1px solid var(--hairline); width: fit-content; border-radius: 4px; overflow: hidden; }
//         .qty-box button { background: none; border: none; color: var(--ink); width: 30px; height: 30px; cursor: pointer; font-size: 14px; transition: background 0.2s; }
//         .qty-box button:hover { background: var(--panel); }
//         .qty-box span { width: 32px; text-align: center; font-family: 'IBM Plex Mono', monospace; font-size: 13px; }
//         .ledger-row .lprice { font-family: 'IBM Plex Mono', monospace; font-size: 14px; text-align: right; color: var(--ink); }
//         .remove-btn { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 16px; border-radius: 50%; width: 30px; height: 30px; transition: all 0.2s; }
//         .remove-btn:hover { color: #B0503F; background: rgba(176,80,63,0.08); }
//         .empty-cart { padding: 80px 0; text-align: center; color: var(--muted); }
//         .empty-cart button {
//           margin-top: 20px; background: var(--gold); border: none; color: #fff;
//           padding: 13px 28px; font-size: 12px; letter-spacing: 0.09em;
//           text-transform: uppercase; cursor: pointer; border-radius: 4px;
//           font-family: 'Jost', sans-serif; font-weight: 600;
//         }
//         .summary { margin-top: 36px; margin-left: auto; width: 320px; }
//         .sum-row { display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 13px; padding: 10px 0; color: var(--muted); }
//         .sum-row.total { color: var(--ink); font-size: 17px; border-top: 1.5px solid var(--gold); margin-top: 8px; padding-top: 16px; font-weight: 600; }
//         .checkout-btn {
//           margin-top: 20px; width: 100%; padding: 15px 0; background: var(--gold); border: none;
//           color: #fff; font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 600;
//           letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
//           transition: all 0.3s; border-radius: 4px;
//         }
//         .checkout-btn:hover { background: var(--gold-deep); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(169,121,59,0.3); }
//         .note { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); text-align: center; margin-top: 12px; }

//         /* ── CHECKOUT PAGE ────────────────────────────────────── */
//         .co-wrap { max-width: 960px; margin: 0 auto; padding: 5vw 5vw 8vw; }
//         .co-wrap > h1 { font-size: clamp(26px, 4vw, 38px); margin-bottom: 6px; color: var(--ink); }
//         .co-wrap > .co-sub { color: var(--muted); font-size: 13px; margin-bottom: 40px; }
//         .co-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start; }
//         @media (max-width: 800px) { .co-layout { grid-template-columns: 1fr; } }

//         .co-section {
//           background: var(--bg-2); border: 1px solid var(--hairline);
//           border-radius: 12px; padding: 28px 28px 32px;
//           margin-bottom: 20px;
//         }
//         .co-section h2 {
//           font-size: 18px; margin-bottom: 24px; color: var(--ink);
//           display: flex; align-items: center; gap: 10px; font-weight: 700;
//         }
//         .co-section h2 .co-num {
//           width: 26px; height: 26px; border-radius: 50%;
//           background: var(--gold); color: #fff;
//           font-family: 'IBM Plex Mono', monospace; font-size: 12px;
//           display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//         }

//         .co-row { display: grid; gap: 14px; margin-bottom: 14px; }
//         .co-row.cols2 { grid-template-columns: 1fr 1fr; }
//         .co-row.cols3 { grid-template-columns: 1fr 1fr 1fr; }
//         @media (max-width: 480px) { .co-row.cols2, .co-row.cols3 { grid-template-columns: 1fr; } }

//         .co-field { display: flex; flex-direction: column; gap: 6px; }
//         .co-field label {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
//           letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted);
//         }
//         .co-field input, .co-field select {
//           padding: 11px 14px; border: 1.5px solid var(--hairline);
//           border-radius: 6px; font-family: 'Jost', sans-serif; font-size: 14px;
//           background: var(--bg); color: var(--ink); outline: none;
//           transition: border-color 0.2s;
//           -webkit-appearance: none;
//         }
//         .co-field input:focus, .co-field select:focus { border-color: var(--gold); }
//         .co-field input.err, .co-field select.err { border-color: #C0392B; }
//         .co-field .err-msg { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #C0392B; }

//         .co-card-row { position: relative; }
//         .co-card-type {
//           position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px;
//           color: var(--gold); font-weight: 600; letter-spacing: 0.06em;
//           pointer-events: none;
//         }

//         /* Order summary sidebar */
//         .co-sidebar { position: sticky; top: 90px; }
//         .co-summary-box {
//           background: var(--bg-2); border: 1px solid var(--hairline);
//           border-radius: 12px; padding: 26px;
//         }
//         .co-summary-box h3 {
//           font-size: 17px; margin-bottom: 20px; color: var(--ink);
//           border-bottom: 1px solid var(--hairline); padding-bottom: 14px;
//         }
//         .co-s-items { margin-bottom: 16px; }
//         .co-s-item {
//           display: flex; align-items: center; gap: 12px;
//           padding: 10px 0; border-bottom: 1px solid var(--hairline);
//         }
//         .co-s-item:last-child { border-bottom: none; }
//         .co-s-img {
//           width: 44px; height: 44px; border-radius: 6px;
//           object-fit: cover; background: var(--panel); flex-shrink: 0;
//         }
//         .co-s-name { font-size: 13px; color: var(--ink); font-weight: 500; line-height: 1.3; }
//         .co-s-qty { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--muted); }
//         .co-s-price { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--gold-deep); margin-left: auto; font-weight: 600; }
//         .co-totals { border-top: 1px solid var(--hairline); padding-top: 14px; }
//         .co-tot-row { display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--muted); padding: 5px 0; }
//         .co-tot-row.grand { color: var(--ink); font-size: 15px; font-weight: 600; padding-top: 10px; border-top: 1.5px solid var(--gold); margin-top: 6px; }
//         .co-pay-btn {
//           width: 100%; margin-top: 20px; padding: 15px;
//           background: var(--gold); color: #fff; border: none;
//           font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 600;
//           letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer;
//           border-radius: 6px; transition: all 0.3s;
//           box-shadow: 0 6px 20px rgba(169,121,59,0.3);
//         }
//         .co-pay-btn:hover { background: var(--gold-deep); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(169,121,59,0.4); }
//         .co-secure-note {
//           display: flex; align-items: center; justify-content: center; gap: 6px;
//           margin-top: 12px; font-family: 'IBM Plex Mono', monospace;
//           font-size: 10px; color: var(--muted);
//         }

//         /* ── SUCCESS PAGE ─────────────────────────────────────── */
//         .success-wrap {
//           min-height: 70vh; display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           padding: 80px 5vw; text-align: center;
//         }
//         .success-icon {
//           width: 90px; height: 90px; border-radius: 50%;
//           background: linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 40px; margin-bottom: 32px;
//           box-shadow: 0 12px 40px rgba(169,121,59,0.4);
//           animation: successPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275);
//         }
//         @keyframes successPop {
//           0% { transform: scale(0.3); opacity: 0; }
//           70% { transform: scale(1.1); }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .success-wrap h1 { font-size: clamp(28px, 5vw, 48px); color: var(--ink); margin-bottom: 12px; }
//         .success-wrap .success-sub { color: var(--muted); font-size: 15px; max-width: 480px; line-height: 1.75; margin-bottom: 10px; }
//         .success-ref {
//           font-family: 'IBM Plex Mono', monospace; font-size: 13px;
//           color: var(--gold-deep); background: var(--panel);
//           border: 1px solid var(--hairline); border-radius: 6px;
//           padding: 10px 20px; margin: 20px 0 36px;
//           letter-spacing: 0.1em;
//         }
//         .success-actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }
//         .success-actions button {
//           padding: 14px 32px; font-family: 'Jost', sans-serif; font-size: 12.5px;
//           font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
//           cursor: pointer; border-radius: 6px; transition: all 0.3s;
//         }
//         .success-actions .s-primary { background: var(--gold); color: #fff; border: none; }
//         .success-actions .s-primary:hover { background: var(--gold-deep); transform: translateY(-2px); }
//         .success-actions .s-sec { background: transparent; border: 1.5px solid var(--gold); color: var(--gold-deep); }
//         .success-actions .s-sec:hover { background: rgba(169,121,59,0.08); transform: translateY(-2px); }
//         .success-steps {
//           display: flex; gap: 32px; flex-wrap: wrap; justify-content: center;
//           margin-top: 56px; padding-top: 40px; border-top: 1px solid var(--hairline);
//           max-width: 640px;
//         }
//         .success-step { text-align: center; flex: 1; min-width: 120px; }
//         .success-step .step-icon { font-size: 26px; margin-bottom: 8px; }
//         .success-step .step-label { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 4px; }
//         .success-step .step-desc { font-size: 12.5px; color: var(--muted); line-height: 1.6; }

//         /* ── MODAL ────────────────────────────────────────────── */
//         .modal-backdrop {
//           position: fixed; inset: 0; background: rgba(51, 41, 28, 0.5);
//           display: flex; align-items: center; justify-content: center;
//           padding: 24px; z-index: 200; backdrop-filter: blur(3px);
//           animation: fadeIn 0.2s ease;
//         }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         .modal {
//           position: relative; background: var(--bg-2);
//           border: 1px solid var(--hairline); border-radius: 12px;
//           max-width: 460px; width: 100%; overflow: hidden;
//           max-height: 88vh; overflow-y: auto;
//           animation: slideUp 0.3s ease;
//           box-shadow: 0 24px 64px rgba(51,41,28,0.25);
//         }
//         @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         .modal-close {
//           position: absolute; top: 14px; right: 14px;
//           background: rgba(255,255,255,0.9); border: 1px solid var(--hairline);
//           color: var(--ink); font-size: 14px; cursor: pointer;
//           width: 32px; height: 32px; border-radius: 50%; z-index: 2;
//           display: flex; align-items: center; justify-content: center;
//           transition: all 0.2s; backdrop-filter: blur(4px);
//         }
//         .modal-close:hover { color: var(--gold-deep); border-color: var(--gold); }
//         .modal-img-wrap {
//           width: 100%; height: 230px; overflow: hidden;
//           background: var(--panel);
//         }
//         .modal-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
//         .modal-body { padding: 28px 32px 32px; }
//         .modal-eyebrow {
//           font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.18em;
//           text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
//         }
//         .modal h2 { font-size: 26px; margin-bottom: 14px; color: var(--ink); }
//         .modal-desc { color: var(--muted); font-size: 13.5px; line-height: 1.7; margin-bottom: 24px; }
//         .spec-table { text-align: left; border-top: 1px solid var(--hairline); margin-bottom: 24px; }
//         .spec-row {
//           display: flex; justify-content: space-between; gap: 18px;
//           padding: 11px 0; border-bottom: 1px solid var(--hairline); font-size: 13px;
//         }
//         .spec-row span:first-child { color: var(--muted); }
//         .spec-row span:last-child { text-align: right; color: var(--ink); }
//         .price-hl { color: var(--gold-deep); font-size: 15px; font-weight: 600; }

//         /* ── FOOTER ───────────────────────────────────────────── */
//         .au-footer { background: var(--ink); color: #E9E0CE; padding: 5vw 5vw 28px; width: 100%; }
//         .footer-grid {
//           display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px;
//           max-width: 1280px; margin: 0 auto 40px;
//         }
//         .footer-brand .name { font-family: 'Cormorant Garamond', serif; font-size: 20px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; }
//         .footer-brand p { color: #C9BCA0; font-size: 13px; line-height: 1.65; max-width: 320px; }
//         .footer-col h4 { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
//         .footer-col a, .footer-col div { display: block; color: #E9E0CE; text-decoration: none; font-size: 13.5px; margin-bottom: 10px; }
//         .footer-col a:hover { color: var(--gold); }
//         .footer-col button { background: none; border: none; color: #E9E0CE; font-size: 13.5px; padding: 0; margin-bottom: 10px; cursor: pointer; text-align: left; transition: color 0.2s; font-family: inherit; }
//         .footer-col button:hover { color: var(--gold); }
//         .footer-bottom {
//           max-width: 1280px; margin: 0 auto; padding-top: 24px;
//           border-top: 1px solid rgba(233,224,206,0.12);
//           display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;
//           font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: #9C917A;
//         }

//         /* ── RESPONSIVE ───────────────────────────────────────── */
//         @media (max-width: 900px) {
//           .footer-grid { grid-template-columns: 1fr 1fr; }
//           .footer-brand { grid-column: 1 / -1; }
//           .au-nav { display: none; }
//           .hamburger { display: flex; }
//         }
//         @media (max-width: 768px) {
//           .au-header { padding: 18px 20px; }
//           .au-hero { padding: 70px 20px 60px; min-height: 85vh; }
//           .au-hero h1 { font-size: 34px; }
//           .au-hero p { font-size: 15px; }
//           .hero-stats { gap: 32px; }
//           .hero-stat .num { font-size: 28px; }
//           .au-latest, .au-testimonials { padding: 56px 20px; }
//           .au-why { padding: 56px 20px; }
//           .why-grid { grid-template-columns: 1fr 1fr; gap: 2px; }
//           .latest-head { flex-direction: column; align-items: flex-start; }
//           .au-grid { padding: 40px 16px 60px; gap: 20px; }
//           .au-cart-wrap { padding: 36px 18px 60px; }
//           .ledger-row { grid-template-columns: 56px 1fr 32px; row-gap: 10px; }
//           .ledger-row .qty-box, .ledger-row .lprice { grid-column: 2 / 3; }
//           .summary { width: 100%; margin-left: 0; margin-top: 28px; }
//           .au-footer { padding: 40px 20px 24px; }
//           .footer-grid { gap: 28px; }
//           .showcase-grid { grid-template-columns: 1fr; }
//           .showcase-item { height: 300px; }
//         }
//         @media (max-width: 480px) {
//           .au-header { padding: 14px 16px; }
//           .au-logo .name { font-size: 14px; letter-spacing: 0.07em; }
//           .au-hero { padding: 50px 16px; min-height: 75vh; }
//           .au-hero h1 { font-size: 28px; line-height: 1.15; }
//           .au-hero p { font-size: 14px; }
//           .hero-cta { gap: 10px; }
//           .hero-cta button { padding: 13px 22px; font-size: 11.5px; }
//           .hero-stats { padding-top: 36px; margin-top: 40px; gap: 24px; }
//           .au-latest, .au-testimonials { padding: 40px 14px; }
//           .au-why { padding: 40px 14px; }
//           .why-grid { grid-template-columns: 1fr; }
//           .why-item { padding: 28px 22px; }
//           .latest-head h2, .why-inner h2, .test-inner h2 { font-size: 26px; margin-bottom: 28px; }
//           .latest-grid, .test-grid { grid-template-columns: 1fr; }
//           .au-grid { padding: 28px 12px 48px; grid-template-columns: 1fr; gap: 16px; }
//           .au-card h3 { font-size: 18px; }
//           .card-img-wrap { height: 200px; }
//           .view-all-btn { padding: 10px 18px; font-size: 11px; }
//           .card-btns { gap: 8px; }
//           .au-cart-wrap { padding: 28px 12px 48px; }
//           .au-cart-wrap h1 { font-size: 28px; }
//           .ledger-row { grid-template-columns: 44px 1fr 28px; gap: 10px; }
//           .ledger-row .mini-img { width: 44px; height: 44px; }
//           .summary { padding: 0; }
//           .sum-row { font-size: 12px; }
//           .sum-row.total { font-size: 15px; }
//           .modal { border-radius: 8px; }
//           .modal-body { padding: 22px 20px 28px; }
//           .modal h2 { font-size: 22px; }
//           .au-footer { padding: 32px 14px 20px; }
//           .footer-grid { grid-template-columns: 1fr; gap: 24px; }
//           .test-card { padding: 24px 20px; }
//           .test-quote { font-size: 16.5px; }
//         }
//       `}</style>

//       <SpotTicker />
//       {/* ── HEADER ──────────────────────────────────────────────── */}
//       <header className="au-header">
//         <div className="au-logo" onClick={() => navTo("home")}>
//           <span className="mark">◆</span>
//           <span className="name">Resey Gemstones Gold &amp; Bar Co.</span>
//         </div>

//         {/* Desktop nav */}
//         <nav className="au-nav">
//           <button
//             className={page === "home" ? "active" : ""}
//             onClick={() => navTo("home")}
//           >
//             Home
//           </button>
//           <button
//             className={page === "shop" ? "active" : ""}
//             onClick={() => goToShop()}
//           >
//             Shop
//           </button>
//           <button
//             className={`cart-btn ${page === "cart" || page === "checkout" ? "active" : ""}`}
//             onClick={() => navTo("cart")}
//           >
//             Cart
//             {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//           </button>
//         </nav>

//         {/* Hamburger */}
//         <button
//           id="hamburger-btn"
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen((o) => !o)}
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       </header>

//       {/* Mobile drawer */}
//       <div
//         className={`mobile-drawer ${menuOpen ? "open" : ""}`}
//         onClick={() => setMenuOpen(false)}
//       >
//         <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
//           <button
//             className={page === "home" ? "active" : ""}
//             onClick={() => navTo("home")}
//           >
//             Home
//           </button>
//           <button
//             className={page === "shop" ? "active" : ""}
//             onClick={() => goToShop()}
//           >
//             Shop
//           </button>
//           <button
//             className={`mob-cart-row ${page === "cart" || page === "checkout" ? "active" : ""}`}
//             onClick={() => navTo("cart")}
//           >
//             Cart
//             {cartCount > 0 && <span className="mob-badge">{cartCount}</span>}
//           </button>
//         </nav>
//       </div>

//       {/* ── HOME ──────────────────────────────────────────────────── */}
//       {page === "home" && (
//         <>
//           <div
//             className="au-hero"
//             style={{
//               backgroundImage: `linear-gradient(rgba(250,246,237,0.91), rgba(250,246,237,0.97)), url(${heroImg})`,
//             }}
//           >
//             <div className="hero-bg" />
//             <div className="eyebrow">
//               Resey Gemstones Gold &amp; Bar Company
//             </div>
//             <h1>Weighed, graded, and set aside for those who look closely.</h1>
//             <p>
//               Sovereign coins, cast bars, and hand-selected stones — each piece
//               listed with its full appraisal.
//             </p>
//             <div className="hero-cta">
//               <button className="primary" onClick={() => goToShop()}>
//                 Enter the Shop
//               </button>
//               <button className="secondary" onClick={() => navTo("cart")}>
//                 View Cart
//               </button>
//             </div>
//             <div className="hero-stats">
//               <div className="hero-stat">
//                 <div className="num">500+</div>
//                 <div className="lbl">Pieces Sold</div>
//               </div>
//               <div className="hero-stat">
//                 <div className="num">12+</div>
//                 <div className="lbl">Partner Mints</div>
//               </div>
//               <div className="hero-stat">
//                 <div className="num">100%</div>
//                 <div className="lbl">Verified Pure</div>
//               </div>
//               <div className="hero-stat">
//                 <div className="num">GIA</div>
//                 <div className="lbl">Certified Gems</div>
//               </div>
//             </div>
//           </div>

//           {/* Showcase row 1 */}
//           <div className="au-showcase">
//             <div className="showcase-grid">
//               <div className="showcase-item" onClick={() => goToShop("gold")}>
//                 <span className="showcase-tag">Gold Coins</span>
//                 <img src={IMAGES.goldCoins} alt="Gold Coins" loading="lazy" />
//                 <div className="showcase-overlay">
//                   <h3>Gold Bullion Coins</h3>
//                   <p>Sovereign, Krugerrand, Maple Leaf &amp; more</p>
//                 </div>
//               </div>
//               <div className="showcase-item" onClick={() => goToShop("gold")}>
//                 <span className="showcase-tag">Gold Bars</span>
//                 <img src={IMAGES.goldBars} alt="Gold Bars" loading="lazy" />
//                 <div className="showcase-overlay">
//                   <h3>Cast Ingot Bars</h3>
//                   <p>10g to 1 kilo — 24K .9999 fine</p>
//                 </div>
//               </div>
//               <div className="showcase-item" onClick={() => goToShop("ruby")}>
//                 <span className="showcase-tag">Rare Gems</span>
//                 <img
//                   src={IMAGES.gemsCollection}
//                   alt="Gemstones"
//                   loading="lazy"
//                 />
//                 <div className="showcase-overlay">
//                   <h3>Precious Gemstones</h3>
//                   <p>Rubies, sapphires, emeralds &amp; diamonds</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Latest arrivals */}
//           <div className="au-latest">
//             <div className="latest-head">
//               <div>
//                 <span className="eyebrow-sm">Fresh From The Vault</span>
//                 <h2>Latest Arrivals</h2>
//               </div>
//               <button className="view-all-btn" onClick={() => goToShop()}>
//                 View All
//               </button>
//             </div>
//             <div className="latest-grid">
//               {latest.map((p) => (
//                 <div className="latest-card" key={p.id}>
//                   <span className="new-tag">New</span>
//                   <div className="img-wrap">
//                     <img src={p.photo} alt={p.name} loading="lazy" />
//                   </div>
//                   <div className="body">
//                     <h3 style={{ fontSize: 19, marginBottom: 8 }}>{p.name}</h3>
//                     <div
//                       className="spec"
//                       style={{
//                         fontFamily: "'IBM Plex Mono', monospace",
//                         fontSize: 11,
//                         color: "var(--muted)",
//                         marginBottom: 14,
//                       }}
//                     >
//                       {p.spec}
//                     </div>
//                     <div
//                       className="price"
//                       style={{
//                         fontFamily: "'IBM Plex Mono', monospace",
//                         fontSize: 17,
//                         color: "var(--gold-deep)",
//                         marginBottom: 18,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {money(p.price)}
//                     </div>
//                     <div className="card-btns">
//                       <button
//                         className="detail-btn"
//                         onClick={() => setDetailId(p.id)}
//                       >
//                         Details
//                       </button>
//                       <button
//                         className="add-btn"
//                         onClick={() => addToCart(p.id)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Showcase row 2 */}
//           <div className="au-showcase" style={{ background: "var(--panel)" }}>
//             <div
//               className="showcase-grid"
//               style={{
//                 gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
//               }}
//             >
//               <div className="showcase-item" onClick={() => goToShop()}>
//                 <span className="showcase-tag">Fine Jewelry</span>
//                 <img
//                   src={IMAGES.goldJewelry}
//                   alt="Gold Jewelry"
//                   loading="lazy"
//                 />
//                 <div className="showcase-overlay">
//                   <h3>Fine Jewelry</h3>
//                   <p>Exquisite handcrafted luxury pieces</p>
//                 </div>
//               </div>
//               <div
//                 className="showcase-item"
//                 onClick={() => goToShop("diamond")}
//               >
//                 <span className="showcase-tag">Diamonds</span>
//                 <img src={IMAGES.vaultDoor} alt="The Vault" loading="lazy" />
//                 <div className="showcase-overlay">
//                   <h3>The Collection</h3>
//                   <p>Hand-selected stones from the world's finest sources</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── MARKET INSIGHTS ─────────────────────────────────── */}
//           <div className="au-insights">
//             <div className="insights-inner">
//               <span className="eyebrow-sm">The Investment Case</span>
//               <h2>Why Physical Gold?</h2>
//               <p className="insights-subtitle">
//                 For millennia, gold has been the world's reserve asset. Here is
//                 what the data says about holding physical bullion today.
//               </p>
//               <div className="insights-grid">
//                 {MARKET_INSIGHTS.map((m) => (
//                   <div className="insight-card" key={m.title}>
//                     <div className="insight-stat">{m.stat}</div>
//                     <span className="insight-stat-unit">{m.statUnit}</span>
//                     <h3>{m.title}</h3>
//                     <p>{m.body}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── OUR PROMISE ─────────────────────────────────────── */}
//           <div className="au-why">
//             <div className="why-inner">
//               <span className="eyebrow-sm">Our Promise</span>
//               <h2>Why Buy From Us</h2>
//               <p className="why-subtitle">
//                 Every piece is verified, documented, and shipped with full
//                 transparency — from mint to your hands.
//               </p>
//               <div className="why-grid">
//                 {WHY_US.map((w, i) => (
//                   <div className="why-item" key={w.title}>
//                     {i < WHY_US.length - 1 && <div className="why-divider" />}
//                     <div className="why-icon">{w.icon}</div>
//                     <div className="why-stat">{w.stat}</div>
//                     <div className="why-stat-label">{w.statLabel}</div>
//                     <h3>{w.title}</h3>
//                     <p>{w.body}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── TESTIMONIALS ────────────────────────────────────── */}
//           <div className="au-testimonials">
//             <div className="test-inner">
//               <span className="eyebrow-sm">Word Of Mouth</span>
//               <h2>What Buyers Say</h2>
//               <p className="test-subtitle">
//                 Real clients, real transactions — hear from people who've built
//                 their positions with us.
//               </p>
//               <div className="test-aggregate">
//                 <div className="test-agg-stars">★★★★★</div>
//                 <div className="test-agg-num">5.0</div>
//                 <div className="test-agg-count">
//                   / 5.0 · 128 verified buyers
//                 </div>
//               </div>
//               <div className="test-grid">
//                 {TESTIMONIALS.map((t) => (
//                   <div className="test-card" key={t.name}>
//                     <Stars count={t.rating} />
//                     <div className="test-quote">{t.quote}</div>
//                     <div className="test-product">Purchased: {t.product}</div>
//                     <div className="test-author">
//                       <div
//                         className="test-avatar"
//                         style={{ background: t.color }}
//                         aria-hidden="true"
//                       >
//                         {t.initials}
//                       </div>
//                       <div>
//                         <div className="test-name">{t.name}</div>
//                         <div className="test-loc">{t.loc}</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* ── SHOP ──────────────────────────────────────────────────── */}
//       {page === "shop" && (
//         <>
//           <div className="shop-head">
//             <span className="eyebrow-sm">The Full Collection</span>
//             <h1>Shop the Vault</h1>
//             <p>
//               Every coin, bar, and stone we currently hold — full appraisal
//               details on request.
//             </p>
//           </div>
//           <div className="au-tabs">
//             {CATEGORIES.map((c) => (
//               <button
//                 key={c.id}
//                 className={activeCat === c.id ? "active" : ""}
//                 onClick={() => setActiveCat(c.id)}
//               >
//                 {c.label}
//               </button>
//             ))}
//           </div>
//           <div className="au-grid">
//             {visible.map((p) => (
//               <div className="au-card" key={p.id}>
//                 <div className="card-img-wrap">
//                   <img
//                     className="prod-img"
//                     src={p.photo}
//                     alt={p.name}
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h3>{p.name}</h3>
//                   <div className="spec">{p.spec}</div>
//                   <div className="price">{money(p.price)}</div>
//                   <div className="card-btns">
//                     <button
//                       className="detail-btn"
//                       onClick={() => setDetailId(p.id)}
//                     >
//                       Details
//                     </button>
//                     <button className="add-btn" onClick={() => addToCart(p.id)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* ── DETAIL MODAL ────────────────────────────────────────── */}
//       {detailProduct && (
//         <div className="modal-backdrop" onClick={() => setDetailId(null)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="modal-close"
//               onClick={() => setDetailId(null)}
//               aria-label="Close"
//             >
//               ✕
//             </button>
//             <div className="modal-img-wrap">
//               <img src={detailProduct.photo} alt={detailProduct.name} />
//             </div>
//             <div className="modal-body">
//               <div className="modal-eyebrow">
//                 {detailProduct.cat === "gold"
//                   ? "Bullion Appraisal"
//                   : "Gemstone Appraisal"}
//               </div>
//               <h2>{detailProduct.name}</h2>
//               <p className="modal-desc">{detailProduct.description}</p>
//               <div className="spec-table">
//                 {detailProduct.cat === "gold" ? (
//                   <>
//                     <div className="spec-row">
//                       <span>Mint</span>
//                       <span>{detailProduct.mint}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Year</span>
//                       <span className="mono">{detailProduct.year}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Weight</span>
//                       <span className="mono">{detailProduct.weight}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Purity</span>
//                       <span className="mono">{detailProduct.purity}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Dimensions</span>
//                       <span className="mono">{detailProduct.diameter}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Certification</span>
//                       <span>{detailProduct.certification}</span>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="spec-row">
//                       <span>Origin</span>
//                       <span>{detailProduct.origin}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Cut</span>
//                       <span>{detailProduct.cutGrade}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Clarity</span>
//                       <span>{detailProduct.clarity}</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Certification</span>
//                       <span>{detailProduct.certification}</span>
//                     </div>
//                   </>
//                 )}
//                 <div className="spec-row">
//                   <span>Price</span>
//                   <span className="mono price-hl">
//                     {money(detailProduct.price)}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 className="checkout-btn"
//                 onClick={() => {
//                   addToCart(detailProduct.id);
//                   setDetailId(null);
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── CART ──────────────────────────────────────────────────── */}
//       {page === "cart" && (
//         <div className="au-cart-wrap">
//           <h1>Your Cart</h1>
//           <div className="sub">
//             {cartCount === 0
//               ? "No items yet."
//               : `${cartCount} item${cartCount > 1 ? "s" : ""} held for review`}
//           </div>
//           {cartItems.length === 0 ? (
//             <div className="empty-cart">
//               <div style={{ fontSize: 48, marginBottom: 16 }}>◆</div>
//               <div>The vault is empty.</div>
//               <button onClick={() => goToShop()}>Browse the Collection</button>
//             </div>
//           ) : (
//             <>
//               <div className="ledger">
//                 {cartItems.map((item) => (
//                   <div className="ledger-row" key={item.id}>
//                     <div className="mini-img">
//                       <img src={item.photo} alt={item.name} loading="lazy" />
//                     </div>
//                     <div>
//                       <div className="iname">{item.name}</div>
//                       <div className="ispec">{item.spec}</div>
//                     </div>
//                     <div className="qty-box">
//                       <button onClick={() => setQty(item.id, item.qty - 1)}>
//                         –
//                       </button>
//                       <span>{item.qty}</span>
//                       <button onClick={() => setQty(item.id, item.qty + 1)}>
//                         +
//                       </button>
//                     </div>
//                     <div className="lprice">{money(item.qty * item.price)}</div>
//                     <button
//                       className="remove-btn"
//                       onClick={() => removeItem(item.id)}
//                       aria-label="Remove item"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="summary">
//                 <div className="sum-row">
//                   <span>Subtotal</span>
//                   <span>{money(subtotal)}</span>
//                 </div>
//                 <div className="sum-row">
//                   <span>Insured escrow (1.5%)</span>
//                   <span>{money(escrow)}</span>
//                 </div>
//                 <div className="sum-row total">
//                   <span>Total</span>
//                   <span>{money(total)}</span>
//                 </div>
//                 <button
//                   className="checkout-btn"
//                   onClick={() => {
//                     navTo("checkout");
//                     setCheckoutStep("form");
//                   }}
//                 >
//                   Proceed to Checkout
//                 </button>
//                 <div className="note">
//                   Prices are indicative and subject to daily spot rates.
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       )}

//       {/* ── CHECKOUT PAGE ─────────────────────────────────────────── */}
//       {page === "checkout" && checkoutStep === "form" && (
//         <div className="co-wrap">
//           <h1>Checkout</h1>
//           <div className="co-sub">
//             Complete your delivery and payment details to confirm your order.
//           </div>
//           <div className="co-layout">
//             {/* Left — forms */}
//             <div>
//               {/* Delivery Section */}
//               <div className="co-section">
//                 <h2>
//                   <span className="co-num">1</span> Delivery Details
//                 </h2>
//                 <div className="co-row">
//                   <div className="co-field">
//                     <label>Full Name</label>
//                     <input
//                       id="co-fullName"
//                       type="text"
//                       placeholder="John Doe"
//                       className={formErrors.fullName ? "err" : ""}
//                       value={checkoutForm.fullName}
//                       onChange={(e) =>
//                         handleCheckoutChange("fullName", e.target.value)
//                       }
//                     />
//                     {formErrors.fullName && (
//                       <span className="err-msg">{formErrors.fullName}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="co-row cols2">
//                   <div className="co-field">
//                     <label>Email Address</label>
//                     <input
//                       id="co-email"
//                       type="email"
//                       placeholder="john@example.com"
//                       className={formErrors.email ? "err" : ""}
//                       value={checkoutForm.email}
//                       onChange={(e) =>
//                         handleCheckoutChange("email", e.target.value)
//                       }
//                     />
//                     {formErrors.email && (
//                       <span className="err-msg">{formErrors.email}</span>
//                     )}
//                   </div>
//                   <div className="co-field">
//                     <label>Phone Number</label>
//                     <input
//                       id="co-phone"
//                       type="tel"
//                       placeholder="+1 (555) 000-0000"
//                       className={formErrors.phone ? "err" : ""}
//                       value={checkoutForm.phone}
//                       onChange={(e) =>
//                         handleCheckoutChange("phone", e.target.value)
//                       }
//                     />
//                     {formErrors.phone && (
//                       <span className="err-msg">{formErrors.phone}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="co-row">
//                   <div className="co-field">
//                     <label>Street Address</label>
//                     <input
//                       id="co-address"
//                       type="text"
//                       placeholder="123 Main Street, Apt 4B"
//                       className={formErrors.address ? "err" : ""}
//                       value={checkoutForm.address}
//                       onChange={(e) =>
//                         handleCheckoutChange("address", e.target.value)
//                       }
//                     />
//                     {formErrors.address && (
//                       <span className="err-msg">{formErrors.address}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="co-row cols3">
//                   <div className="co-field">
//                     <label>City</label>
//                     <input
//                       id="co-city"
//                       type="text"
//                       placeholder="New York"
//                       className={formErrors.city ? "err" : ""}
//                       value={checkoutForm.city}
//                       onChange={(e) =>
//                         handleCheckoutChange("city", e.target.value)
//                       }
//                     />
//                     {formErrors.city && (
//                       <span className="err-msg">{formErrors.city}</span>
//                     )}
//                   </div>
//                   <div className="co-field">
//                     <label>State / Province</label>
//                     <input
//                       id="co-state"
//                       type="text"
//                       placeholder="NY"
//                       className={formErrors.state ? "err" : ""}
//                       value={checkoutForm.state}
//                       onChange={(e) =>
//                         handleCheckoutChange("state", e.target.value)
//                       }
//                     />
//                     {formErrors.state && (
//                       <span className="err-msg">{formErrors.state}</span>
//                     )}
//                   </div>
//                   <div className="co-field">
//                     <label>ZIP / Postal Code</label>
//                     <input
//                       id="co-zip"
//                       type="text"
//                       placeholder="10001"
//                       className={formErrors.zip ? "err" : ""}
//                       value={checkoutForm.zip}
//                       onChange={(e) =>
//                         handleCheckoutChange("zip", e.target.value)
//                       }
//                     />
//                     {formErrors.zip && (
//                       <span className="err-msg">{formErrors.zip}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="co-row">
//                   <div className="co-field">
//                     <label>Country</label>
//                     <select
//                       id="co-country"
//                       value={checkoutForm.country}
//                       onChange={(e) =>
//                         handleCheckoutChange("country", e.target.value)
//                       }
//                     >
//                       <option value="US">United States</option>
//                       <option value="CA">Canada</option>
//                       <option value="GB">United Kingdom</option>
//                       <option value="NG">Nigeria</option>
//                       <option value="AU">Australia</option>
//                       <option value="DE">Germany</option>
//                       <option value="FR">France</option>
//                       <option value="AE">UAE</option>
//                       <option value="SG">Singapore</option>
//                       <option value="ZA">South Africa</option>
//                       <option value="OTHER">Other</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Section */}
//               <div className="co-section">
//                 <h2>
//                   <span className="co-num">2</span> Payment Information
//                 </h2>
//                 <div
//                   className="co-row co-card-row"
//                   style={{ position: "relative" }}
//                 >
//                   <div className="co-field" style={{ position: "relative" }}>
//                     <label>Card Number</label>
//                     <input
//                       id="co-cardNumber"
//                       type="text"
//                       placeholder="1234 5678 9012 3456"
//                       inputMode="numeric"
//                       maxLength={19}
//                       className={formErrors.cardNumber ? "err" : ""}
//                       value={checkoutForm.cardNumber}
//                       style={{ paddingRight: 60 }}
//                       onChange={(e) =>
//                         handleCheckoutChange("cardNumber", e.target.value)
//                       }
//                     />
//                     {cardType && (
//                       <span className="co-card-type">{cardType}</span>
//                     )}
//                     {formErrors.cardNumber && (
//                       <span className="err-msg">{formErrors.cardNumber}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="co-row">
//                   <div className="co-field">
//                     <label>Cardholder Name</label>
//                     <input
//                       id="co-cardHolder"
//                       type="text"
//                       placeholder="Name as it appears on card"
//                       className={formErrors.cardHolder ? "err" : ""}
//                       value={checkoutForm.cardHolder}
//                       onChange={(e) =>
//                         handleCheckoutChange("cardHolder", e.target.value)
//                       }
//                     />
//                     {formErrors.cardHolder && (
//                       <span className="err-msg">{formErrors.cardHolder}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="co-row cols2">
//                   <div className="co-field">
//                     <label>Expiry Date</label>
//                     <input
//                       id="co-expiry"
//                       type="text"
//                       placeholder="MM/YY"
//                       maxLength={5}
//                       className={formErrors.expiry ? "err" : ""}
//                       value={checkoutForm.expiry}
//                       onChange={(e) =>
//                         handleCheckoutChange("expiry", e.target.value)
//                       }
//                     />
//                     {formErrors.expiry && (
//                       <span className="err-msg">{formErrors.expiry}</span>
//                     )}
//                   </div>
//                   <div className="co-field">
//                     <label>CVV / CVC</label>
//                     <input
//                       id="co-cvv"
//                       type="password"
//                       placeholder="•••"
//                       maxLength={4}
//                       inputMode="numeric"
//                       className={formErrors.cvv ? "err" : ""}
//                       value={checkoutForm.cvv}
//                       onChange={(e) =>
//                         handleCheckoutChange("cvv", e.target.value)
//                       }
//                     />
//                     {formErrors.cvv && (
//                       <span className="err-msg">{formErrors.cvv}</span>
//                     )}
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     marginTop: 8,
//                     fontFamily: "'IBM Plex Mono', monospace",
//                     fontSize: 10.5,
//                     color: "var(--muted)",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 6,
//                   }}
//                 >
//                   🔒 Your card details are used for simulation only and are
//                   never stored or transmitted.
//                 </div>
//               </div>
//             </div>

//             {/* Right — Order Summary */}
//             <div className="co-sidebar">
//               <div className="co-summary-box">
//                 <h3>Order Summary</h3>
//                 <div className="co-s-items">
//                   {cartItems.map((item) => (
//                     <div className="co-s-item" key={item.id}>
//                       <img
//                         className="co-s-img"
//                         src={item.photo}
//                         alt={item.name}
//                         loading="lazy"
//                       />
//                       <div style={{ flex: 1, minWidth: 0 }}>
//                         <div className="co-s-name">{item.name}</div>
//                         <div className="co-s-qty">Qty: {item.qty}</div>
//                       </div>
//                       <div className="co-s-price">
//                         {money(item.qty * item.price)}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="co-totals">
//                   <div className="co-tot-row">
//                     <span>Subtotal</span>
//                     <span>{money(subtotal)}</span>
//                   </div>
//                   <div className="co-tot-row">
//                     <span>Insured escrow (1.5%)</span>
//                     <span>{money(escrow)}</span>
//                   </div>
//                   <div className="co-tot-row grand">
//                     <span>Total</span>
//                     <span>{money(total)}</span>
//                   </div>
//                 </div>
//                 <button
//                   id="co-pay-btn"
//                   className="co-pay-btn"
//                   onClick={submitCheckout}
//                 >
//                   ◆ Confirm &amp; Pay {money(total)}
//                 </button>
//                 <div className="co-secure-note">
//                   🔒 SSL encrypted · Simulated payment
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── SUCCESS PAGE ──────────────────────────────────────────── */}
//       {page === "checkout" && checkoutStep === "success" && (
//         <div className="success-wrap">
//           <div className="success-icon">✓</div>
//           <h1>Order Confirmed!</h1>
//           <p className="success-sub">
//             Thank you for your order. Your purchase has been received and is now
//             being processed. A confirmation will be sent to{" "}
//             <strong>{checkoutForm.email}</strong>.
//           </p>
//           <div className="success-ref">Order Reference: {orderRef}</div>
//           <div className="success-actions">
//             <button
//               className="s-primary"
//               onClick={() => {
//                 navTo("shop");
//                 setCheckoutStep("idle");
//                 setCheckoutForm({
//                   fullName: "",
//                   email: "",
//                   phone: "",
//                   address: "",
//                   city: "",
//                   state: "",
//                   zip: "",
//                   country: "US",
//                   cardNumber: "",
//                   cardHolder: "",
//                   expiry: "",
//                   cvv: "",
//                 });
//               }}
//             >
//               Continue Shopping
//             </button>
//             <button className="s-sec" onClick={() => navTo("home")}>
//               Back to Home
//             </button>
//           </div>
//           <div className="success-steps">
//             <div className="success-step">
//               <div className="step-icon">📦</div>
//               <div className="step-label">Processing</div>
//               <div className="step-desc">
//                 Your order is being verified and prepared
//               </div>
//             </div>
//             <div className="success-step">
//               <div className="step-icon">🔐</div>
//               <div className="step-label">Secured</div>
//               <div className="step-desc">
//                 Items are being sealed and insured for transit
//               </div>
//             </div>
//             <div className="success-step">
//               <div className="step-icon">🚚</div>
//               <div className="step-label">Dispatched</div>
//               <div className="step-desc">
//                 Fully insured delivery to your address
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── FOOTER ────────────────────────────────────────────────── */}
//       <footer className="au-footer">
//         <div className="footer-grid">
//           <div className="footer-brand">
//             <div className="name">◆ Resey Gemstones Gold &amp; Bar Co.</div>
//             <p>
//               Bullion coins, cast bars, and hand-graded gemstones, sourced
//               direct from accredited mints and refiners and shipped fully
//               insured.
//             </p>
//           </div>
//           <div className="footer-col">
//             <h4>Shop</h4>
//             <button onClick={() => goToShop()}>All Products</button>
//             <button onClick={() => goToShop("gold")}>
//               Gold Coins &amp; Bars
//             </button>
//             <button onClick={() => navTo("cart")}>Your Cart</button>
//           </div>
//           <div className="footer-col">
//             <h4>Contact</h4>
//             <a href="tel:+16018040308">+1 (601) 804-0308</a>
//             <a href="mailto:Reseygenstone.@outlook.com">
//               Reseygenstone.@outlook.com
//             </a>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <span>
//             © {new Date().getFullYear()} Resey Gemstones Gold &amp; Bar Company
//           </span>
//           <span>Demo storefront — no real transactions are processed.</span>
//         </div>
//       </footer>
//     </div>
//   );
// }
function App() {
  return (
    <div>
      
    </div>
  )
}

export default App
