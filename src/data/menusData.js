// ─── Menu PDF Cards ───────────────────────────────────────
export const MENU_CARDS = [
  {
    cat: 'Special',
    title: 'Dinner',
    desc: "An evening journey through Italy's finest — bold mains, handmade pastas",
    img: '/Dinner.avif',
    href: 'https://salvatoressandiego.com/wp-content/uploads/2025/11/OFFICIAL-DINNER-MENU-.pdf',
  },
  {
    cat: 'Special',
    title: 'Brunch',
    desc: 'Weekends done right. Vibrant morning dishes, bottomless energy, and sun-drenched',
    img: '/Brunch.avif',
    href: 'https://salvatoressandiego.com/wp-content/uploads/2025/11/BRUNCH-MENU.pdf',
  },
  {
    cat: 'Special',
    title: 'Desserts',
    desc: 'Close the night in style. Indulgent finales crafted to linger long after the last bite.',
    img: '/Desserts.avif',
    href: 'https://salvatoressandiego.com/menu/',
  },
  {
    cat: 'Mon – Fri · 4–7 PM',
    title: 'Happy Hour',
    desc: "The city's best kept secret. Discounted drinks and bites every weekday evening — come unwind.",
    img: '/Happy-Hour.avif',
    href: 'https://salvatoressandiego.com/wp-content/uploads/2025/11/HAPPY-HOUR-MENU_cropped.pdf',
  },
];

// ─── Featured Drinks (visual cards) ──────────────────────
export const FEATURED_DRINKS = [
  {
    name: 'Refresher',
    tag: 'Cocktail',
    price: '$16',
    ingr: 'Grey Goose · Butterfly Pea Tea · Chamomile Liquor · Lemon · Honey',
    img: '/Refresher.png',
  },
  {
    name: 'French 75',
    tag: 'Cocktail',
    price: '$15',
    ingr: 'Roku Gin · Lemon · Sugar · Champagne',
    img: '/French-75.png',
  },
  {
    name: 'Meridian',
    tag: 'Premium',
    price: '$24',
    luxury: true,
    ingr: 'Whistle Pig Rye · Giffard Vanille de Madagascar · Demerara Syrup · Orange Bitters',
    img: '/Meridian.png',
  },
  {
    name: 'Ashes & Diamonds',
    tag: 'Signature',
    price: '$16',
    ingr: 'Volcan Blanco Smoke · Mint · Pineapple · Agave · Activated Charcoal',
    img: '/Ashes-Diamonds.png',
  },
  {
    name: 'Espresso Martini',
    tag: 'Cocktail',
    price: '$17',
    ingr: 'Haku Vodka · Espresso · Coffee Liqueur',
    img: '/Espresso-Martini.png',
  },
  {
    name: 'Bisol "Jeio" DOCG',
    tag: 'Bubbles',
    price: '$12 / $48',
    ingr: 'Brut Prosecco, Valdobbiadene · glass / bottle',
    img: '/Bisol.png',
  },
];

// ─── Full Cocktail List ───────────────────────────────────
export const COCKTAIL_CATEGORIES = [
  {
    title: 'Modern & Adventurous',
    label: 'Signature',
    items: [
      { name: 'Refresher', ingr: 'Grey Goose, Butterfly Pea Tea, Chamomile Liquor, Lemon, Honey', price: '$16' },
      { name: 'Ashes & Diamonds', ingr: 'Volcan Blanco Smoke, Mint, Pineapple, Agave, Activated Charcoal', price: '$16' },
      { name: 'Barrio Logan', ingr: 'Herradura Blanco Tequila, Chinola Passionfruit, Chile Arbol Agave, Lemon', price: '$16' },
      { name: 'East Village', ingr: 'Fords Gin, Ramazzotti Rosato, Watermelon, Lemon, Honey', price: '$16' },
      { name: "Don't Yolk With Me", ingr: 'Dickel Whiskey, Chinola Passion Fruit, Banana Liquor, Egg White', price: '$16' },
      { name: 'Going Down Proper', ingr: 'Makers 46, Orgeat, Lemon Juice, Underberg Floater', price: '$16' },
      { name: 'Smoke & Fire', ingr: 'Union Mezcal, Ancho Chili Liquor, Pineapple, Lemon, Sugar', price: '$16' },
    ],
  },
  {
    title: 'Classic & Refreshing',
    label: 'Timeless',
    items: [
      { name: 'French 75', ingr: 'Roku Gin, Lemon, Sugar, Champagne', price: '$15' },
      { name: 'Suntory at Salvatore\'s', ingr: "Suntory Toki Whiskey, Peychaud's Bitters, Orgeat Syrup", price: '$15' },
      { name: 'Watermelon Margarita', ingr: 'Volcan Tequila, Watermelon, Lemon, Syrup', price: '$15' },
      { name: 'Espresso Martini', ingr: 'Haku Vodka, Espresso, Coffee Liqueur', price: '$17' },
    ],
  },
  {
    title: 'Luxury',
    label: 'Premium',
    items: [
      { name: 'Meridian', ingr: 'Whistle Pig Rye, Giffard Vanille De Madagascar, Demerara Syrup, Orange Bitters', price: '$24' },
      { name: 'Golden Hill', ingr: 'Patron Silver Tequila, Prickly Pear, Fierro, Pineapple, Lime', price: '$18' },
    ],
  },
  {
    title: 'Seasonal',
    label: 'Limited',
    items: [
      { name: 'Death by Coffee', ingr: 'Slane Irish Whiskey, Oat Milk, Simple Syrup, Coffee Vanilla Condensed Milk', price: '$13' },
      { name: 'I Came Here for the Rumkin Spice', ingr: 'Pumpkin Spice Infused Denizen Rum, Cafe Amaro, Simple Syrup', price: '$14' },
    ],
  },
];

// ─── Spirits ─────────────────────────────────────────────
export const SPIRITS = [
  {
    name: 'Tequila',
    count: '20 Expressions',
    items: [
      { name: 'Casamigos Blanco', price: '$15' },
      { name: 'Casamigos Reposado', price: '$16' },
      { name: 'Clase Azul Plata', price: '$22' },
      { name: 'Clase Azul Reposado', price: '$35' },
      { name: 'Clase Azul Añejo', price: '$80' },
      { name: 'Don Julio Blanco', price: '$15' },
      { name: 'Don Julio Reposado', price: '$18' },
      { name: 'Don Julio Añejo', price: '$20' },
      { name: 'Don Julio 1942', price: '$45' },
      { name: 'Don Julio Última', price: '$100' },
      { name: 'Patron Silver', price: '$15' },
      { name: 'Patron Platinum', price: '$32' },
      { name: 'Volcán Blanco', price: '$14' },
      { name: 'Volcán Cristalino', price: '$18' },
      { name: 'Herradura Blanco', price: '$13' },
      { name: 'Mandala Extra Añejo', price: '$35' },
    ],
  },
  {
    name: 'Whiskey & Bourbon',
    count: 'Luxury Selection',
    items: [
      { name: "Angel's Envy", price: '$18' },
      { name: "Blanton's Single Barrel", price: '$25' },
      { name: 'Buffalo Trace', price: '$13' },
      { name: 'Hakushu 12 Yr', price: '$35' },
      { name: 'Macallan 12 Sherry', price: '$18' },
      { name: 'Macallan 15 Dbl Oak', price: '$40' },
      { name: 'Macallan 18 Dbl Oak', price: '$70' },
      { name: 'Macallan Rare Cask', price: '$60' },
      { name: 'Nikka Coffey', price: '$22' },
      { name: 'Suntory Habiki Harmony', price: '$22' },
      { name: 'Weller Special Reserve', price: '$30' },
      { name: 'Whistle Pig 12 Yr', price: '$28' },
      { name: 'Johnnie Walker Blue', price: '$45' },
      { name: 'Makers 46', price: '$14' },
      { name: 'High West Rendezvous', price: '$18' },
    ],
  },
  {
    name: 'Mezcal, Gin & More',
    count: 'Curated Selection',
    items: [
      { name: 'El Jolgorio Cuixe', price: '$15' },
      { name: 'El Jolgorio Tobala', price: '$28' },
      { name: 'El Jolgorio Tepeztate', price: '$24' },
      { name: 'Vago Tobala', price: '$30' },
      { name: 'Del Maguey Vida', price: '$13' },
      { name: 'Monkey 47 Gin', price: '$16' },
      { name: 'Hendricks Gin', price: '$15' },
      { name: 'Empress 1908', price: '$14' },
      { name: 'Grey Goose Vodka', price: '$13' },
      { name: 'Belvedere Vodka', price: '$12' },
      { name: 'Haku Vodka', price: '$11' },
      { name: 'Gosling Black Seal Rum', price: '$12' },
      { name: 'Denizen 8 Yr Reserve Rum', price: '$10' },
    ],
  },
];

// ─── Wine & Bubbles ───────────────────────────────────────
export const WINE_TABS = ['bubbles', 'white', 'rose', 'red'];

export const WINE_DATA = {
  bubbles: [
    { name: 'Bisol "Jeio" DOCG', region: 'Brut Prosecco, Valdobbiadene', price: '$12 / $48', label: 'glass / bottle' },
    { name: 'Scarpetta', region: 'Brut Rosé, Prosecco', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Chandon Brut', region: 'Sparkling Wine', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Chandon Brut Rosé', region: 'Sparkling Wine', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Veuve Clicquot', region: 'Yellow Label Brut, Champagne', price: '— / $160', label: 'bottle' },
    { name: 'Veuve Clicquot Brut Rosé', region: 'Champagne', price: '— / $160', label: 'bottle' },
    { name: 'Moët & Chandon Imperial Brut', region: 'Champagne', price: '— / $180', label: 'bottle' },
    { name: 'Moët & Chandon Nectar Rosé', region: 'Champagne', price: '— / $175', label: 'bottle' },
  ],
  white: [
    { name: 'Louis Jadot', region: 'Chardonnay, Bourgogne', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Hartford Court', region: 'Chardonnay, Russian River', price: '$16 / $64', label: 'glass / bottle' },
    { name: 'Bodyguard', region: 'Chardonnay, Paso Robles', price: '$18 / $70', label: 'glass / bottle' },
    { name: 'Attems', region: 'Pinot Grigio, Venezia Friuli DOC', price: '$14 / $56', label: 'glass / bottle' },
    { name: 'Frenzy', region: 'Sauvignon Blanc, New Zealand', price: '$16 / $64', label: 'glass / bottle' },
    { name: 'Fess Parker', region: 'Riesling, Santa Barbara', price: '$13 / $56', label: 'glass / bottle' },
    { name: 'Rosa Regale', region: 'Moscato, Italy', price: '$14 / $56', label: 'glass / bottle' },
    { name: 'Luminus', region: 'Chardonnay, Napa', price: '— / $60', label: 'bottle' },
  ],
  rose: [
    { name: 'DAOU', region: 'Rosé, Paso Robles', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Peyrassol "Commandeurs"', region: 'Rosé, Côtes de Provence', price: '$20 / $80', label: 'glass / bottle' },
  ],
  red: [
    { name: 'Masi Campofiorin', region: 'Valpolicella Blend, Veneto', price: '$11 / $44', label: 'glass / bottle' },
    { name: 'Tintonegro', region: 'Malbec, Argentina', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Poggio al Tufo Maremma', region: 'Cabernet Sauvignon, Toscana', price: '$13 / $52', label: 'glass / bottle' },
    { name: 'Niner', region: 'Pinot Noir, Edna Valley', price: '$13 / $48', label: 'glass / bottle' },
    { name: 'Castello di Volpaia', region: 'Chianti Classico, Tuscany', price: '$16 / $64', label: 'glass / bottle' },
    { name: 'DAOU Reserve', region: 'Cabernet Sauvignon, Paso Robles', price: '$25 / $100', label: 'glass / bottle' },
    { name: 'Buglioni', region: 'Amarone della Valpolicella', price: '— / $120', label: 'bottle' },
    { name: 'Castello Banfi 2016', region: 'Brunello di Montalcino', price: '— / $150', label: 'bottle' },
    { name: 'Val di Suga', region: 'Brunello di Montalcino, Tuscany', price: '— / $150', label: 'bottle' },
    { name: 'Caymus 2019', region: 'Cabernet Sauvignon, Napa', price: '— / $165', label: 'bottle' },
    { name: 'Soul of the Lion', region: 'Cabernet Sauvignon, Paso Robles', price: '— / $230', label: 'bottle' },
    { name: 'Patrimony', region: 'Cabernet Sauvignon, Paso Robles', price: '— / $500', label: 'bottle' },
  ],
};

// ─── Non-Alcoholic ────────────────────────────────────────
export const NA_ITEMS = [
  { name: 'In Bed by 10', desc: 'Seedlip Grove, Pineapple, Ginger Syrup, Simple Syrup, Fever Tree Elderflower', price: '$13', badge: 'Zero Proof' },
  { name: 'Mint & Peachy', desc: 'Seedlip Herbal, Mint, Lime, Peach, Simple Syrup', price: '$13', badge: 'Zero Proof' },
  { name: 'Fever Tree', desc: 'Sparkling Grapefruit, Ginger Ale, or Ginger Beer — your choice.', price: '$7', badge: 'Sparkling' },
  { name: 'Topo Chico', desc: 'Sparkling mineral water — the perfect palate cleanser.', price: '$6', badge: 'Sparkling' },
  { name: 'Pellegrino', desc: 'Italian sparkling mineral water, naturally carbonated.', price: '$6', badge: 'Sparkling' },
  { name: 'Acqua Panna', desc: 'Still natural mineral water from the Tuscan hills.', price: '$6', badge: 'Still' },
];

// ─── Sticky nav tabs ─────────────────────────────────────
export const MENU_TABS = [
  { label: 'Menus',         id: 'menus-section' },
  { label: 'Featured Drinks', id: 'featured-drinks' },
  { label: 'Cocktails',     id: 'cocktails-section' },
  { label: 'Spirits',       id: 'spirits-section' },
  { label: 'Wine & Bubbles', id: 'wine-section' },
  { label: 'Non-Alcoholic', id: 'na-section' },
];

// ─── Ticker ───────────────────────────────────────────────
export const TICKER_ITEMS = [
  'Dinner Service', 'Weekend Brunch', 'Happy Hour Mon–Fri 4–7pm',
  'Craft Cocktails', 'Italian Mediterranean', 'Premium Wine List',
  'Dinner Service', 'Weekend Brunch', 'Happy Hour Mon–Fri 4–7pm',
  'Craft Cocktails', 'Italian Mediterranean', 'Premium Wine List',
];