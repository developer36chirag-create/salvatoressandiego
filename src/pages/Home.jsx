import { useReveal } from '../hooks/useReveal';
import './Home.css';
import InstagramSection from '../components/InstagramSection'; 

/* ─── Data ───────────────────────────────────────────────── */
const TICKER_ITEMS = [
  'Dinner Service', 'Weekend Brunch', 'Happy Hour Mon–Fri 4–7pm',
  'Private Events', 'Craft Cocktails', 'Italian Mediterranean',
  // duplicated for seamless loop
  'Dinner Service', 'Weekend Brunch', 'Happy Hour Mon–Fri 4–7pm',
  'Private Events', 'Craft Cocktails', 'Italian Mediterranean',
];

const MENUS = [
  {
    cat: 'Special', title: 'Dinner',
    desc: 'An evening journey through Italys finest — bold mains, handmade pastas, and rich seasonal flavors.',
    img: '/Dinner.avif',
    href: '/menus/dinner',
  },
  {
    cat: 'Special', title: 'Brunch',
    desc: 'Weekends done right. Vibrant morning dishes, bottomless energy, and sun-drenched Italian flavors.',
    img: '/Brunch.avif',
    href: '/menus/brunch',
  },
  {
    cat: 'Special', title: 'Desserts',
    desc: 'Close the night in style. Indulgent finales crafted to linger long after the last bite.',
    img: '/Desserts.avif',
    href: '/menus/desserts',
  },
];

const STATS = [
  { num: '750', lbl: 'Front St.' },
  { num: '4★',  lbl: 'Google Rating' },
  { num: '7d',  lbl: 'Open Weekly' },
];

const FEATURES = [
  { ico: '🍕', lbl: 'Artisan Italian Kitchen' },
  { ico: '🍸', lbl: 'Craft Cocktail Lounge' },
  { ico: '🎉', lbl: 'Private Event Venue' },
  { ico: '☀️', lbl: 'Weekend Brunch 10am–3pm' },
];

const PKG_INCLUSIONS = [
  'Private access to the Medusa Room',
  '4-course meal for up to 25 guests',
  'Open bar (well drinks) for the first hour',
  'Speakers and full music access',
  '4-hour private event experience',
];

const DRINKS = [
  {
    name: 'Refresher', tag: 'Cocktail', price: '$16',
    ingr: 'Grey Goose · Butterfly Pea Tea · Chamomile Liquor · Lemon · Honey',
    img: '/Refresher.png',
  },
  {
    name: 'French 75', tag: 'Cocktail', price: '$15',
    ingr: 'Roku Gin · Lemon · Sugar · Champagne',
    img: '/French-75.png',
  },
  {
    name: 'Meridian', tag: 'Premium', price: '$24', luxury: true,
    ingr: 'Whistle Pig Rye · Giffard Vanille de Madagascar · Demerara Syrup · Orange Bitters',
    img: '/Meridian.png',
  },
  {
    name: 'Ashes & Diamonds', tag: 'Signature', price: '$16',
    ingr: 'Volcan Blanco Smoke · Mint · Pineapple · Agave · Activated Charcoal',
    img: '/Ashes-Diamonds.png',
  },
  {
    name: 'Espresso Martini', tag: 'Cocktail', price: '$17',
    ingr: 'Haku Vodka · Espresso · Coffee Liqueur',
    img: '/Espresso-Martini.png',
  },
  {
    name: 'Bisol "Jeio" DOCG', tag: 'Bubbles', price: '$12 / $48',
    ingr: 'Brut Prosecco, Valdobbiadene · glass / bottle',
    img: '/Bisol.png',
  },
];

const REVIEWS = [
  {
    initials: 'EM', name: 'Edward Miller', source: 'via Google Reviews',
    text: '"This is a hidden gem amongst the Italian restaurants in San Diego. Their menu is diverse, service incredible and drinks delicious. You gotta try their pizza — I\'ve never had crust like this, it\'s got tiny bubbles throughout making it light, airy, soft, and utterly unique!"',
  },
  {
    initials: 'ST', name: 'Susan Tapert', source: 'via Google Reviews',
    text: '"A hidden Downtown SD gem, this is a fun place for birthdays, dates, brunch, and just hanging at the bar. Excellent service, food, and wine and liquor selections. I love their fried gnocchi and Brussels sprouts."',
  },
  {
    initials: 'AR', name: 'Anri Rogers', source: 'via Google Reviews',
    text: '"I had my birthday here and had such an amazing time. They customized a menu for me, had a belly dancer, a photographer and did the whole sign with Happy Birthday with fireworks. The food, service, and drinks were SO amazing."',
  },
];

const RESERVE_URL =
  'https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873';

/* ─── Component ─────────────────────────────────────────── */
export default function Home() {
  useReveal();

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-num" aria-hidden="true">S</div>
          <div className="tag hero-tag">Marina District · San Diego</div>
          <h1 className="heading-xl hero-title">
            An<br />Elevated<br /><span>Expression</span>
          </h1>
          <p className="hero-sub">
            Salvatore's Cucina &amp; Lounge — where Italy meets San Diego's waterfront.
            Bold flavors, inventive drinks, and a lounge vibe worth escaping to.
          </p>
          <div className="hero-btns">
            <a href="/menus" className="btn btn-terra btn-arrow">
              View Menu
            </a>
            <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="btn btn-outline-ink">
              Reserve a Table
            </a>
          </div>
          <div className="hero-loc">750 Front Street, Downtown San Diego</div>
        </div>

        <div className="hero-right">
          <video
    autoPlay
    muted
    loop
    playsInline
    className="hero-video"
  >
    <source src="/salvatores_brunch_edit_revised_2_trim.mp4-720p.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          <div className="hero-badge">
            <div className="hero-badge-inner">
              <strong>★</strong>
              <span>Top Rated<br />San Diego</span>
            </div>
          </div>
          <div className="hero-scroll-cue">
            <div className="scroll-dot" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ══ MENU ══ */}
      <section className="menu-section">
        <div className="wrap">
          <div className="menu-intro r">
            <div className="menu-intro-left">
              <div className="eyebrow">Our Special Menu</div>
              <h2 className="heading-lg">
                Crafted<br />
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  with Passion
                </em>
              </h2>
            </div>
            <p className="menu-intro-right">
              Inspired by the shores of Italy — every plate tells a story of tradition,
              technique, and bold Mediterranean character.
            </p>
          </div>

          <div className="menu-grid home-menu-grid r">
            {MENUS.map(({ cat, title, desc, img, href }) => (
              <div className="menu-card" key={title}>
                <img className="menu-card-img" src={img} alt={title} />
                <div className="menu-card-veil" />
                <div className="menu-card-body">
                  <div className="menu-card-cat">{cat}</div>
                  <div className="menu-card-title">{title}</div>
                  <p className="menu-card-desc">{desc}</p>
                  <a className="menu-card-cta" href={href} rel="noreferrer">
                    View Menu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="about-section">
        <div className="about-visual r-left">
          <img
            src="/DSC07164-scaled.jpg"
            alt="Salvatore's interior"
          />
          <div className="about-visual-num" aria-hidden="true">S</div>
          <div className="about-tag">Est. Downtown SD</div>
        </div>

        <div className="about-text r-right">
          <div className="eyebrow">Our Story</div>
          <h2 className="heading-lg">
            Salvatore's<br /><em>Cucina &amp; Lounge</em>
          </h2>
          <p>
            At Salvatore's, located in the heart of the Marina District, we draw inspiration
            from the shores of Italy and the Mediterranean. Bold flavors, modern elegance, and
            a vibrant lounge vibe — we invite you to escape the ordinary, whether for dinner,
            brunch, or after-hours.
          </p>

          <div className="about-stats">
            {STATS.map(({ num, lbl }) => (
              <div className="stat-item" key={lbl}>
                <div className="stat-num">{num}</div>
                <div className="stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>

          <div className="about-features">
            {FEATURES.map(({ ico, lbl }) => (
              <div className="about-feat" key={lbl}>
                <div className="feat-ico">{ico}</div>
                <div className="feat-lbl">{lbl}</div>
              </div>
            ))}
          </div>

          <a
            href="/menus"
            className="btn btn-terra btn-arrow"
            style={{ marginTop: '2.5rem' }}
          >
            View Our Menu
          </a>
        </div>
      </section>

      {/* ══ PRIVATE EVENTS ══ */}
      <section className="events-section">
        <div className="events-bg" />
        <div className="events-inner">
          <div className="events-left r-left">
            <div className="tag">Step Into Salvatore's</div>
            <h2 className="heading-lg">
              Private Events<br /><em>Now Available</em>
            </h2>
            <p>
              Host your perfect celebration with us. From intimate birthday dinners to lavish
              gatherings, our exclusive Medusa Room delivers an unforgettable experience —
              fully curated for you.
            </p>
            <a href="/contact" className="btn btn-terra btn-arrow">
              Inquire Now
            </a>
          </div>

          <div className="events-right r-right">
            <div className="pkg-card">
              <div className="pkg-price"><sup>$</sup>3,000</div>
              <p className="pkg-desc">
                A completely hands-free private event experience designed for you and your guests.
              </p>
              <ul className="pkg-list">
                {PKG_INCLUSIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873"
                className="btn btn-outline-light"
              >
                Book This Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOD & BEVERAGES ══ */}
      <section className="drinks-section">
        <div className="wrap">
          <div className="drinks-intro r">
            <div className="drinks-intro-content-box">
              <div className="eyebrow">Checkout Our Dishes</div>
              <h2 className="heading-lg">
                Food &amp;<br />
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  Beverages
                </em>
              </h2>
            </div>
            <p className="drinks-intro-right">
              Hand-crafted with intention — every sip and every plate at Salvatore's is an
              experience worth savouring.
            </p>
          </div>

          <div className="drinks-grid r">
            {DRINKS.map(({ name, tag, price, ingr, img, luxury }) => (
              <div className="drink-card" key={name}>
                <div className="drink-img-wrap">
                  <img className="drink-img" src={img} alt={name} loading="lazy" />
                </div>
                <div className="drink-body">
                  <div className="drink-name">
                    {name}
                    {luxury && (
                      <em style={{ fontSize: '.85em', color: 'var(--terra)', fontFamily: 'var(--display)' }}>
                        {' '}(Luxury)
                      </em>
                    )}
                  </div>
                  <p className="drink-ingr">{ingr}</p>
                </div>
                <div className="drink-footer">
                  <div className="drink-price">{price}</div>
                  <div className="drink-tag">{tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="reviews-section">
        <div className="wrap">
          <div className="reviews-intro r">
            <div className="reviews-intro-content-box">
              <div className="eyebrow">What the City is Saying</div>
              <h2 className="heading-lg">
                Guest<br />
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'rgba(212,121,90,.8)' }}>
                  Impressions
                </em>
              </h2>
            </div>
            <a href="#" className="reviews-link">Read All Reviews</a>
          </div>

          <div className="reviews-grid r">
            {REVIEWS.map(({ initials, name, source, text }) => (
              <div className="review-card" key={name}>
                <div className="r-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="r-star">★</span>
                  ))}
                </div>
                <p className="r-text">{text}</p>
                <div className="r-author">
                  <div className="r-avi">{initials}</div>
                  <div>
                    <div className="r-name">{name}</div>
                    <div className="r-src">{source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══ INSTAGRAM ══ */}
      <InstagramSection />



    </>
  );
}