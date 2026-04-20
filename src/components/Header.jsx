import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Menus', to: '/menus' },
  { label: 'Private Events', to: '/private-events' },
  { label: 'Contact', to: '/contact' },
];

const RESERVE_URL =
  'https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873';

const LOGO_URL =
  '/logo.png';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  /* Scroll listener → solid nav */
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

  /* Close mobile nav on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeMob = () => setMobOpen(false);

  return (
    <>
      {/* ── Mobile drawer ── */}
      <div
        className={`mob-nav${mobOpen ? ' open' : ''}`}
        aria-hidden={!mobOpen}
        onClick={(e) => { if (e.target === e.currentTarget) closeMob(); }}
      >
        <ul>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} onClick={closeMob}>{label}</Link>
            </li>
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

      {/* ── Main nav ── */}
      <nav className={solid ? 'solid' : ''}>
        <Link to="/" className="nav-brand">
          <img src={LOGO_URL} alt="Salvatore's Cucina & Lounge" />
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}><Link to={to}>{label}</Link></li>
          ))}
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