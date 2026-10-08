import { useState, useEffect } from 'react';
import { BrandMark } from './BrandMark';
import { site } from '../content/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-container">
        {/* Wordmark */}
        <a className="wordmark" href="#inicio" aria-label="NoteBus, ir para o início">
          <BrandMark size={32} />
          <span className="wordmark-text">NoteBus</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="header-nav" aria-label="Navegação principal">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão de Contato */}
        <div className="header-actions">
          <a
            className="btn btn-pill btn-secondary header-cta"
            href={`mailto:${site.contactEmail}`}
            title="Enviar e-mail para o NoteBus"
          >
            Falar com o NoteBus
          </a>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            className="mobile-menu-trigger"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile gaveta */}
      {menuOpen && (
        <div className="mobile-nav-drawer" id="mobile-menu">
          <nav aria-label="Menu móvel">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-primary btn-pill mobile-nav-cta"
              href={`mailto:${site.contactEmail}`}
              onClick={() => setMenuOpen(false)}
            >
              Falar com o NoteBus
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
