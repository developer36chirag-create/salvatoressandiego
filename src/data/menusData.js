// ─── Menu PDF Cards ───────────────────────────────────────
export const MENU_CARDS = [
  {
    cat: 'Special',
    title: 'Dinner',
    desc: "An evening journey through Italy's finest — bold mains, handmade pastas",
    img: '/Dinner.avif',
    href: '/menus/dinner',
  },
  {
    cat: 'Special',
    title: 'Brunch',
    desc: 'Weekends done right. Vibrant morning dishes, bottomless energy, and sun-drenched',
    img: '/Brunch.avif',
    href: '/menus/brunch',
  },
  {
    cat: 'Special',
    title: 'Desserts',
    desc: 'Close the night in style. Indulgent finales crafted to linger long after the last bite.',
    img: '/Desserts.avif',
    href: '/menus/desserts',
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



// ─── BRUNCH DATA ─────────────────────────────────────────
export const BRUNCH = {
  hero: {
    bg: '/DSC08229.jpg',
    eyebrow: "Salvatore's Cucina & Lounge",
    title: 'Brunch',
    titleEm: 'Menu',
    sub: 'Saturday & Sunday mornings done beautifully — from lazy eggs to bold Italian flavors.',
    hours: 'Saturday & Sunday · 10 AM – 3 PM',
  },
  ticker: [
    'Brunch', 'Saturday & Sunday', '10:00 AM – 3:00 PM',
    'Happy Hour Mon–Fri 4–7 PM', '750 Front St, Downtown San Diego', 'Reserve via OpenTable',
    'Brunch', 'Saturday & Sunday', '10:00 AM – 3:00 PM',
    'Happy Hour Mon–Fri 4–7 PM', '750 Front St, Downtown San Diego', 'Reserve via OpenTable',
  ],
  cta: {
    eyebrow: 'Join Us for Brunch',
    heading: 'Weekends are',
    headingEm: 'Better',
    headingEnd: 'Here',
  },
  categories: [
    {
      id: 'brunch',
      title: 'Brunch',
      note: 'Weekend mornings, elevated with bold Mediterranean touch.',
      feature: {
        img: '/DSC08229.jpg',
        alt: 'Steak & Eggs',
        badge: 'Weekend Favourite',
        name: 'Steak & Eggs',
        price: '$28',
        desc: 'Rib Eye, Two Fried Eggs, Roasted Potatoes, Calabrian Chili Aoili',
      },
      items: [
        { name: 'Chilaquiles', price: '$17', desc: 'Rojo or Verde · Fried Egg, Salsa, Red Onions, Queso Fresco, Sour Cream, Avocado' },
        { name: 'Huevos Rancheros', price: '$18', desc: 'Fried Egg, Tostada, Salsa Roja & Verde, Black Beans, Avocado, Sour Cream' },
        { name: 'Rigatoni Carbonara', price: '$17', desc: 'Bacon Bits, English Peas, Mushroom Cream Sauce, Parmesan, Fried Egg · Served with French Fries' },
        { name: 'Chicken Sandwich', price: '$18', desc: 'Chicken Milanese, Garlic Aoili, Arugula, Red Onions, Parmesan, Fried Egg · Served with French Fries' },
        { name: 'Avocado Toast', price: '$16', desc: 'Sourdough Bread, Heirloom Cherry Tomatoes, Arugula, Avocado, Balsamic Glaze, Fried Egg' },
        { name: 'Belgian Waffles', price: '$14', desc: 'Candied Walnuts & Strawberries' },
      ],
    },
    {
      id: 'salads',
      title: 'Salads',
      note: 'Light and seasonal — perfect alongside any plate.',
      items: [
        { name: 'Strawberry Salad', price: '$16', desc: 'Arugula, Red Onions, Candied Walnuts, Feta Cheese, Strawberry Vinaigrette' },
        { name: 'Caesar Salad', price: '$15', desc: 'Parmigiano Reggiano, Breadcrumbs, Toasted Pumpkin Seeds' },
      ],
    },
    {
      id: 'sides',
      title: 'Sides',
      isLast: true,
      sides: [
        { name: 'Home Fries', price: '$8' },
        { name: 'French Fries', price: '$6' },
        { name: 'Bacon', price: '$6' },
        { name: 'Chicken', price: '$8' },
        { name: 'Italian Sausage', price: '$8' },
        { name: 'Egg', price: '$5' },
      ],
    },
  ],
};

// ─── DINNER DATA ─────────────────────────────────────────
export const DINNER = {
  hero: {
    bg: '/DSC08482.jpg',
    eyebrow: "Salvatore's Cucina & Lounge",
    title: 'Dinner',
    titleEm: 'Menu',
    sub: 'Bold Mediterranean flavors, crafted with intention — served nightly in the heart of the Marina District.',
  },
  ticker: [
    'Dinner', 'Mon – Thu  4 PM – 11 PM', 'Fri 4 PM – 12 AM',
    'Sat 10 AM – 12 AM', 'Sun 10 AM – 11 PM', 'Happy Hour Mon–Fri 4–7 PM',
    '750 Front St, San Diego', 'Reservations via OpenTable',
    'Dinner', 'Mon – Thu  4 PM – 11 PM', 'Fri 4 PM – 12 AM',
    'Sat 10 AM – 12 AM', 'Sun 10 AM – 11 PM', 'Happy Hour Mon–Fri 4–7 PM',
    '750 Front St, San Diego', 'Reservations via OpenTable',
  ],
  cta: {
    eyebrow: 'Join Us',
    heading: 'Ready for an',
    headingEm: 'Unforgettable',
    headingEnd: 'Evening?',
  },
  categories: [
    {
      id: 'starters',
      title: 'Starters',
      note: 'The perfect beginning — share, or keep them all to yourself.',
      feature: {
        img: '/DSC08482.jpg',
        alt: 'Octopus',
        badge: "Chef's Pick",
        name: 'Octopus (GFO)',
        price: '$25',
        desc: 'Roasted Potatoes, Roasted Tomatoes, Caper Berries, Romesco Sauce, Lemon Juice',
      },
      items: [
        { name: 'Brussels Sprouts (V/GFO)', price: '$15', desc: 'Fried Brussels Sprouts, Gochujang Aoili, Pomegranate Reduction' },
        { name: 'Truffle Corn', price: '$17', desc: 'Ricotta Cheese, Truffle Butter, Truffle Oil, Parmesan' },
        { name: 'Roasted Carrots', price: '$13', desc: 'Whipped Ricotta, Pumpkin Seeds, Hot Honey' },
        { name: 'Cheese Plate (GFO)', price: '$23', desc: 'Brie, Manchego, Blue Cheese, House Spreads, Candied Walnuts, Seasonal Fruit, Pita Bread · Add Prosciutto +$9' },
        { name: 'Fried Gnocchi', price: '$16', desc: 'Malt Vinegar Aoili, Fried Sage' },
        { name: 'Meatballs', price: '$16', desc: 'Spicy Vodka Sauce, Parmesan' },
        { name: 'Roasted Broccolini', price: '$13', desc: 'Romesco Sauce, Pumpkin Seeds, Parmesan' },
      ],
    },
    {
      id: 'raw',
      title: 'Raw',
      note: 'Fresh, vibrant, and unapologetically bold.',
      items: [
        { name: 'Yellowtail Crudo', price: '$21', desc: 'Chili Oil, Serrano Peppers, Citrus Ponzu, Lime Juice, Cucumber, Cilantro, Red Onion' },
        { name: 'Tuna Crudo', price: '$21', desc: 'Citrus Ponzu, Fried Shallots, Chili Oil, Serrano Peppers' },
      ],
    },
    {
      id: 'salads',
      title: 'Salads',
      note: 'Light, seasonal, and full of character.',
      items: [
        { name: 'Caesar Salad', price: '$17', desc: 'Parmesan Reggiano, Bread Crumbs, Toasted Pumpkin Seed' },
        { name: 'Burrata Salad (GFO)', price: '$19', desc: 'Caprese Burrata Cheese, Heirloom Tomato, Pesto, Balsamic Glaze, EVOO' },
        { name: 'Strawberry Salad', price: '$18', desc: 'Arugula, Red Onion, Candy Pecans, Feta Cheese, Strawberry Vinaigrette' },
      ],
    },
    {
      id: 'pasta',
      title: 'Pasta',
      note: 'House-crafted, Mediterranean-inspired.',
      addons: 'Chicken $8 · Shrimp $11 · Burrata $8 · Prosciutto $9',
      items: [
        { name: 'Mushroom Pasta (V/GFO)', price: '$28', desc: 'Fettuccine, English Peas, Mustard Frill, Maitake Mushrooms, Truffle Oil' },
        { name: 'Beef Bolognese (GFO)', price: '$29', desc: 'Rigatoni, Parmesan, Marinara' },
        { name: 'Pesto Fussili (GFO)', price: '$29', desc: 'Fussili Pasta, Grilled Chicken, Sundried Tomatoes, Pesto, Creme Fraiche' },
        { name: 'Baja Seafood Pasta', price: '$36', desc: 'Fusilli, Mussels, Shrimp, Roasted Tomato, Lemon Juice, Zucchini, Aji Amarillo, Breadcrumbs' },
        { name: 'Lobster Ravioli', price: '$36', badge: 'Signature', desc: 'Lobster and Shrimp filled Ravioli, Creamy Pesto Marinara, Parmesan' },
        { name: 'Spicy Vodka Rigatoni (GFO)', price: '$24', desc: 'Spicy Vodka Tomato Sauce, Mascarpone, Parmesan' },
        { name: 'Fettuccini Marinara', price: '$18', desc: 'Marinara, Parmesan' },
      ],
    },
    {
      id: 'entrees',
      title: 'Entrées',
      note: 'The heart of the experience — bold mains for the table.',
      feature: {
        img: '/DSC08482.jpg',
        alt: 'Lamb Chops',
        badge: 'Signature',
        name: 'Lamb Chops',
        price: '$46',
        desc: 'Parmesan Couscous, Roasted Tomatoes, Gremolata, Balsamic Glaze',
      },
      items: [
        { name: 'Steak Frites', price: '$49', desc: '8 oz Filet, Au Poivre Sauce, French Fries' },
        { name: 'Pan Seared Salmon', price: '$38', desc: 'Whipped Ricotta, Roasted Carrots & Asparagus, Lemon Beurre Blanc' },
        { name: 'Market Fish', price: '$36', desc: 'Fish of the Day, Romesco Sauce, Roasted Corn, Couscous Sofrito' },
        { name: 'Roasted Half Chicken (GF)', price: '$34', desc: 'Potato Puree, Roasted Asparagus, Gremolata' },
        { name: 'Chicken Parmigiana', price: '$28', desc: 'Breaded Chicken Breast, Spicy Vodka Sauce, Fusilli, Mozzarella' },
        { name: "Salvatore's Burger", price: '$22', desc: 'House Sauce, Garlic Aoili, Mozzarella, Fried Onions · Served with French Fries' },
      ],
    },
    {
      id: 'sides',
      title: 'Sides',
      isLast: true,
      sides: [
        { name: 'Focaccia', price: '$7' },
        { name: 'Mashed Potatoes', price: '$12' },
        { name: 'French Fries', price: '$10' },
      ],
    },
  ],
};

// ─── DESSERTS DATA ────────────────────────────────────────
export const DESSERTS = {
  hero: {
    bg: '/DSC08655.jpg',
    eyebrow: "Salvatore's Cucina & Lounge",
    title: 'Sweet',
    titleEm: 'Endings',
    sub: 'Italian-inspired desserts and handcrafted sips to close out the perfect evening.',
  },
  ticker: [
    'Desserts', 'Italian Inspired',
    'Tiramisu · Cheesecake · Carrot Cake · Chocolate Cake',
    'Dessert Trio $32', 'Sips & Boozy Blends', '750 Front St, Downtown San Diego',
    'Desserts', 'Italian Inspired',
    'Tiramisu · Cheesecake · Carrot Cake · Chocolate Cake',
    'Dessert Trio $32', 'Sips & Boozy Blends', '750 Front St, Downtown San Diego',
  ],
  cta: {
    eyebrow: 'End the Night Right',
    heading: 'Reserve Your',
    headingEm: 'Table',
    headingEnd: 'Tonight',
  },
  trio: {
    label: "Chef's Selection",
    title: 'Dessert Trio',
    price: '$32',
    items: [
      { name: 'Tiramisu', desc: 'Mascarpone Custard, Lady Fingers, Espresso' },
      { name: 'Carrot Cake', desc: 'Orange Reduction, Cream Cheese Frosting, Walnuts' },
      { name: 'Cheesecake', desc: 'Fruit Compote, Brown Sugar Crust, White Chocolate' },
    ],
  },
  sips: [
    { name: 'Espresso', price: '$5' },
    { name: 'Cappuccino', price: '$7' },
    { name: 'Hot Tea', price: '$5' },
    { name: 'Carajillo', price: '$16' },
    { name: "Salvatore's Carajillo", price: '$17' },
    { name: 'Negroni', price: '$15' },
  ],
  categories: [
    {
      id: 'desserts',
      title: 'Desserts',
      note: 'The perfect finale to every visit.',
      items: [
        { name: 'Tiramisu', price: '$10', badge: 'Classic', desc: 'Mascarpone Custard, Lady Fingers, Espresso' },
        { name: 'Cheesecake — Vanilla', price: '$13', desc: 'Fruit Compote, Brown Sugar Crust, White Chocolate' },
        { name: 'Cheesecake — Salted Caramel', price: '$14', desc: 'Fruit Compote, Brown Sugar Crust, White Chocolate, Salted Caramel' },
        { name: 'Carrot Cake', price: '$13', desc: 'Orange Reduction, Cream Cheese Frosting, Walnuts' },
        { name: 'Chocolate Cake', price: '$13', desc: 'Salted Caramel, Dark Chocolate Mousse, Ganache' },
      ],
    },
  ],
};