import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/* ── Nav config ───────────────────────────────────────────
   Add `dropdown` array to any link to give it a mega-menu.
   Each dropdown item needs { label, to }.
─────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Menus',
    to: '/menus',
    dropdown: [
      { label: 'Happy Hour', to: '/HAPPY-HOUR-MENU_cropped.pdf' },
      { label: 'Drinks',     to: '/DRINK-MENU-1.pdf' },
      { label: 'Dinner',     to: '/OFFICIAL-DINNER-MENU.pdf' },
      { label: 'Brunch',     to: '/BRUNCH-MENU.pdf' },
    ],
  },
  { label: 'Private Events', to: '/private-events' },
  { label: 'Contact',        to: '/contact' },
];

const RESERVE_URL =
  'https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873';

const LOGO_URL =
  'https://assets.cdn.filesafe.space/NEjxLU5iwbaubv6eHLc6/media/690d0867006d902d200c6540.png';

/* ── Desktop dropdown item ───────────────────────────────── */
function DropdownNavItem({ label, to, dropdown }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* Close when clicking outside */
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <li
      ref={ref}
      className={`nav-item-dropdown${open ? ' dropdown-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={to} className="nav-link-parent" onClick={() => setOpen(false)}>
        {label}
        <span className="nav-chevron" aria-hidden="true"><img src="/right-arrow.png" alt="" /></span>
      </Link>

      <div className="nav-dropdown" role="menu" aria-label={`${label} submenu`}>
        <div className="nav-dropdown-inner">
          {dropdown.map(({ label: dLabel, to: dTo }) => (
            <Link
              key={dTo}
              to={dTo}
              className="nav-dropdown-link"
              target="_blank"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="nav-dropdown-dot" aria-hidden="true" />
              {dLabel}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

/* ── Mobile drawer accordion item ────────────────────────── */
function MobileAccordionItem({ label, to, dropdown, onClose }) {
  const [open, setOpen] = useState(false);

  if (!dropdown) {
    return (
      <li>
        <Link to={to} className="mob-link" onClick={onClose}>{label}</Link>
      </li>
    );
  }

  return (
    <li className={`mob-accordion${open ? ' open' : ''}`}>
      <button
        className="mob-accordion-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <span className="mob-chevron" aria-hidden="true"><img src="/right-arrow.png" alt="" /></span>
      </button>

      <div className="mob-accordion-panel">
        {dropdown.map(({ label: dLabel, to: dTo }) => (
          <Link key={dTo} to={dTo} className="mob-dropdown-link" onClick={onClose}>
            {dLabel}
          </Link>
        ))}
      </div>
    </li>
  );
}

/* ── Header ─────────────────────────────────────────────── */
export default function Header() {
  const [solid,   setSolid]   = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  /* Scroll → solid nav */
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobOpen]);

  /* Escape key closes mobile menu */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeMob = () => setMobOpen(false);

  return (
    <>
      {/* ══ MOBILE DRAWER ══ */}
      <div
        className={`mob-nav${mobOpen ? ' open' : ''}`}
        aria-hidden={!mobOpen}
        onClick={(e) => { if (e.target === e.currentTarget) closeMob(); }}
      >
        <ul className="mob-nav-list">
          {NAV_LINKS.map((link) => (
            <MobileAccordionItem key={link.to} {...link} onClose={closeMob} />
          ))}
        </ul>

        <div className="mob-nav-line" />

        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-terra btn-arrow"
          onClick={closeMob}
        >
          Reserve Now
        </a>
      </div>

      {/* ══ MAIN NAV ══ */}
      <nav className={solid ? 'solid' : ''}>
        <Link to="/" className="nav-brand">
          <img src={LOGO_URL} alt="Salvatore's Cucina & Lounge" />
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <DropdownNavItem key={link.to} {...link} />
            ) : (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            )
          )}
        </ul>

        <div className="nav-right">
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-reserve"
          >
            Reserve Now
          </a>
          <button
            className={`hamburger${mobOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobOpen}
            onClick={() => setMobOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}