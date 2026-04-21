import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import './MenuPage.css';

const RESERVE_URL =
  'https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873';

/* ── Sub-components ────────────────────────────────────── */
function FeatureCard({ feature }) {
  return (
    <div className="item-card-feature">
      <img className="feature-img" src={feature.img} alt={feature.alt} loading="lazy" />
      <div className="feature-body">
        {feature.badge && <div className="item-badge">{feature.badge}</div>}
        <div className="item-card-top">
          <div className="item-name">{feature.name}</div>
          <div className="item-price">{feature.price}</div>
        </div>
        <p className="item-desc">{feature.desc}</p>
      </div>
    </div>
  );
}

function ItemCard({ item }) {
  return (
    <div className="item-card">
      {item.badge && <div className="item-badge">{item.badge}</div>}
      <div className="item-card-top">
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}</div>
      </div>
      {item.desc && <p className="item-desc">{item.desc}</p>}
    </div>
  );
}

function MenuCategory({ cat }) {
  /* ── Sides layout ── */
  if (cat.sides) {
    return (
      <div className={`menu-category r${cat.isLast ? ' margin-none' : ''}`}>
        <div className="category-header">
          <h2 className="category-title">{cat.title}</h2>
          {cat.note && <p className="category-note">{cat.note}</p>}
        </div>
        <div className="sides-row">
          {cat.sides.map(({ name, price }) => (
            <div className="side-item" key={name}>
              <span className="side-name">{name}</span>
              <span className="side-price">{price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ── Standard grid (with optional feature card) ── */
  return (
    <div className={`menu-category r${cat.isLast ? ' margin-none' : ''}`}>
      <div className="category-header">
        <h2 className="category-title">{cat.title}</h2>
        {cat.note && <p className="category-note">{cat.note}</p>}
      </div>

      <div className={`items-grid${cat.feature ? ' with-feature' : ''}`}>
        {cat.feature && <FeatureCard feature={cat.feature} />}
        {cat.items && cat.items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>

      {cat.addons && (
        <div className="addons-strip">
          <span className="addons-label">Add to Any Pasta</span>
          <span className="addons-list">{cat.addons}</span>
        </div>
      )}
    </div>
  );
}

/* ── Dessert Trio card ── */
function TrioCard({ trio }) {
  return (
    <div className="trio-card r">
      <div className="trio-label">{trio.label}</div>
      <div className="trio-price-tag">
        <div className="trio-title">{trio.title}</div>
        <div className="trio-price">{trio.price}</div>
      </div>
      {trio.items.map(({ name, desc }) => (
        <div className="trio-item" key={name}>
          <div className="trio-item-name">{name}</div>
          <p className="trio-item-desc">{desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Sips grid (desserts) ── */
function SipsSection({ sips }) {
  return (
    <div className="menu-category r">
      <div className="category-header">
        <h2 className="category-title">Sips &amp; Boozy Blends</h2>
        <p className="category-note">The perfect companion for your sweet ending.</p>
      </div>
      <div className="sips-grid">
        {sips.map(({ name, price }) => (
          <div className="sip-item" key={name}>
            <span className="sip-name">{name}</span>
            <span className="sip-price">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══ Main template ══════════════════════════════════════ */
export default function MenuPage({ data }) {
  useReveal();
  const { hero, ticker, cta, categories, trio, sips } = data;

  return (
    <>
      {/* ══ PAGE HERO ══ */}
      <section className="mp-hero">
        {/* inline backgroundImage avoids CSS custom-prop conflicts */}
        <div
          className="mp-hero-bg"
          style={{ backgroundImage: `url('${hero.bg}')` }}
        />
        <div className="mp-hero-overlay" />
        <div className="mp-hero-content">
          <div className="mp-hero-eyebrow">{hero.eyebrow}</div>
          <h1 className="mp-hero-title">
            {hero.title}<br /><em>{hero.titleEm}</em>
          </h1>
          <p className="mp-hero-sub">{hero.sub}</p>
          {hero.hours && <div className="mp-hero-hours">{hero.hours}</div>}
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {ticker.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ══ MENU BODY ══ */}
      <main className="menu-body">
        <div className="wrap">
          {categories.map((cat) => (
            <MenuCategory key={cat.id} cat={cat} />
          ))}
          {trio && <TrioCard trio={trio} />}
          {sips && <SipsSection sips={sips} />}
        </div>
      </main>

      {/* ══ CTA STRIP ══ */}
      <section className="cta-strip r">
        <div className="eyebrow">{cta.eyebrow}</div>
        <h2 className="heading-lg">
          {cta.heading} <em>{cta.headingEm}</em>{cta.headingEnd ? ` ${cta.headingEnd}` : ''}
        </h2>
        <div className="cta-btns">
          <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="btn btn-terra btn-arrow">
            Reserve a Table
          </a>
          <Link to="/menus" className="btn btn-outline-ink">View All Menus</Link>
        </div>
      </section>
    </>
  );
}