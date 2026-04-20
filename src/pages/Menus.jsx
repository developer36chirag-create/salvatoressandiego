import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import {
  MENU_CARDS, FEATURED_DRINKS, COCKTAIL_CATEGORIES,
  SPIRITS, WINE_TABS, WINE_DATA, NA_ITEMS, MENU_TABS, TICKER_ITEMS,
} from '../data/menusData';
import './Menus.css';
import InstagramSection from '../components/InstagramSection';

const RESERVE_URL =
  'https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873';

/* ── Sticky section nav with scroll spy ────────────────── */
function StickyMenuNav() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll-spy
  useEffect(() => {
    const OFFSET = 160;
    const sectionEls = MENU_TABS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    const onScroll = () => {
      const scrollY = window.scrollY + OFFSET;
      let active = 0;
      sectionEls.forEach((sec, i) => { if (sec.offsetTop <= scrollY) active = i; });
      setActiveIdx(active);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id, idx) => {
    setActiveIdx(idx);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="menu-nav-section">
      <div className="menu-nav-inner">
        {MENU_TABS.map(({ label, id }, i) => (
          <button
            key={id}
            className={`menu-tab${activeIdx === i ? ' active' : ''}`}
            onClick={() => scrollTo(id, i)}
          >
            <span className="menu-tab-dot" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Wine tabs panel ────────────────────────────────────── */
function WineSection() {
  const [activeTab, setActiveTab] = useState('bubbles');
  const wines = WINE_DATA[activeTab] || [];

  return (
    <section className="wine-section" id="wine-section">
      <div className="wrap">
        <div className="section-intro r">
          <div className="section-intro-left">
            <div className="eyebrow">Cellar Selection</div>
            <h2 className="heading-lg">
              Wine &amp; <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>Bubbles</em>
            </h2>
          </div>
          <p className="section-intro-right">
            From Valdobbiadene Prosecco to Brunello di Montalcino — a wine list that rewards the adventurous.
          </p>
        </div>

        <div className="wine-tabs r" role="tablist">
          {WINE_TABS.map((tab) => (
            <button
              key={tab}
              className={`wine-tab${activeTab === tab ? ' active' : ''}`}
              role="tab"
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('rose', 'Rosé')}
            </button>
          ))}
        </div>

        <div className="wine-panel active">
          <div className="wine-list">
            {wines.map(({ name, region, price, label }) => (
              <div className="wine-item" key={name}>
                <div className="wine-left">
                  <div className="wine-name">{name}</div>
                  <div className="wine-region">{region}</div>
                </div>
                <div className="wine-price">
                  {price}
                  <span className="wine-price-label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main page ──────────────────────────────────────────── */
export default function Menus() {
  useReveal();

  return (
    <>
      {/* ══ PAGE HERO ══ */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-gradient" />
        <div className="page-hero-num" aria-hidden="true">M</div>
        <div className="page-hero-content wrap">
          <div className="eyebrow page-hero-eyebrow">Our Offerings</div>
          <h1 className="heading-xl page-hero-title">
            The Full<br /><span>Menu</span>
          </h1>
          <p className="page-hero-sub">
            From handmade Italian plates to craft cocktails and an exceptional wine list —
            every detail at Salvatore's is curated for the senses.
          </p>
          <div className="page-hero-loc">750 Front Street, Downtown San Diego</div>
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

      {/* ══ STICKY NAV ══ */}
      <StickyMenuNav />

      {/* ══ MENU PDF CARDS ══ */}
      <section className="menu-cards-section" id="menus-section">
        <div className="wrap">
          <div className="section-intro r">
            <div className="section-intro-left">
              <div className="eyebrow">Our Special Menus</div>
              <h2 className="heading-lg">
                Food{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  For You
                </em>
              </h2>
            </div>
            <p className="section-intro-right">
              Inspired by the shores of Italy — every plate tells a story of tradition,
              technique, and bold Mediterranean character.
            </p>
          </div>

          <div className="menu-grid r">
            {MENU_CARDS.map(({ cat, title, desc, img, href }) => (
              <div className="menu-card" key={title}>
                <img className="menu-card-img" src={img} alt={title} />
                <div className="menu-card-veil" />
                <div className="menu-card-body">
                  <div className="menu-card-cat">{cat}</div>
                  <div className="menu-card-title">{title}</div>
                  <p className="menu-card-desc">{desc}</p>
                  <a className="menu-card-cta" href={href} target="_blank" rel="noreferrer">
                    View Menu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED DRINKS (visual cards) ══ */}
      <section className="cocktails-section" id="featured-drinks">
        <div className="wrap">
          <div className="section-intro r">
            <div className="section-intro-left">
              <div className="eyebrow">Checkout Our Dishes</div>
              <h2 className="heading-lg">
                Food &amp;{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  Beverages
                </em>
              </h2>
            </div>
            <p className="section-intro-right">
              Hand-crafted with intention — every sip and every plate at Salvatore's is an
              experience worth savouring.
            </p>
          </div>

          <div className="cocktails-grid r">
            {FEATURED_DRINKS.map(({ name, tag, price, ingr, img, luxury }) => (
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

      {/* ══ FULL COCKTAIL LIST ══ */}
      <section className="cocktail-list-section" id="cocktails-section">
        <div className="wrap">
          <div className="section-intro r">
            <div className="section-intro-left">
              <div className="eyebrow">Craft Cocktails</div>
              <h2 className="heading-lg">
                Modern &amp;{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  Adventurous
                </em>
              </h2>
            </div>
            <p className="section-intro-right" style={{ color: 'rgba(255,255,255,.55)' }}>
              Every cocktail is a story — balanced with intention, shaken with care, and designed for the bold.
            </p>
          </div>

          <div className="cocktail-categories r">
            {COCKTAIL_CATEGORIES.map(({ title, label, items }) => (
              <div className="cocktail-cat" key={title}>
                <div className="cocktail-cat-header">
                  <div className="cocktail-cat-title">{title}</div>
                  <div className="cocktail-cat-label">{label}</div>
                </div>
                <ul className="cocktail-list">
                  {items.map(({ name, ingr, price }) => (
                    <li className="cocktail-item" key={name}>
                      <div className="cocktail-left">
                        <div className="cocktail-name">{name}</div>
                        <div className="cocktail-ingr">{ingr}</div>
                      </div>
                      <div className="cocktail-price">{price}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPIRITS ══ */}
      <section className="spirits-section" id="spirits-section">
        <div className="wrap">
          <div className="section-intro r">
            <div className="section-intro-left">
              <div className="eyebrow">Our Collection</div>
              <h2 className="heading-lg">
                Premium{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  Spirits
                </em>
              </h2>
            </div>
            <p className="section-intro-right">
              A curated selection of the world's finest — from rare mezcals to coveted Japanese whiskeys.
            </p>
          </div>

          <div className="spirits-grid r">
            {SPIRITS.map(({ name, count, items }) => (
              <div className="spirit-cat" key={name}>
                <div className="spirit-cat-header">
                  <div className="spirit-cat-name">{name}</div>
                  <div className="spirit-count">{count}</div>
                </div>
                <div className="spirit-list">
                  {items.map(({ name: itemName, price }) => (
                    <div className="spirit-item" key={itemName}>
                      <div className="spirit-name">{itemName}</div>
                      <div className="spirit-price">{price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WINE & BUBBLES ══ */}
      <WineSection />

      {/* ══ NON-ALCOHOLIC ══ */}
      <section className="na-section" id="na-section">
        <div className="wrap">
          <div className="section-intro r">
            <div className="section-intro-left">
              <div className="eyebrow">Zero Proof</div>
              <h2 className="heading-lg">
                Non-Alcoholic{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>
                  Beverages
                </em>
              </h2>
            </div>
            <p className="section-intro-right">
              Beautifully crafted for every guest — our zero-proof selection is as thoughtful as the rest of the bar.
            </p>
          </div>

          <div className="na-grid r">
            {NA_ITEMS.map(({ name, desc, price, badge }) => (
              <div className="na-card" key={name}>
                <div className="na-name">{name}</div>
                <div className="na-desc">{desc}</div>
                <div className="na-footer">
                  <div className="na-price">{price}</div>
                  <div className="na-badge">{badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


 
    </>
  );
}