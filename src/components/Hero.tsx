import { HeroPhoneMockup } from './mockups/HeroPhoneMockup';
import { site } from '../content/site';

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        {/* Lado esquerdo: Conteúdo e Proposta */}
        <div className="hero-copy">
          <h1 className="hero-title">
            Saiba quando sair para pegar o ônibus.
          </h1>

          <p className="lead hero-lead">
            O NoteBus transforma o que você observa no ponto em horários mais úteis para o seu dia. Registre passagens, compare alternativas e veja quando estar no ponto — mesmo sem internet.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary btn-pill hero-cta"
              href={`mailto:${site.contactEmail}`}
            >
              <span>Falar com o NoteBus</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              className="btn btn-secondary btn-pill hero-secondary"
              href="#como-funciona"
            >
              <span>Como funciona</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Lado direito: Mockup do Produto Real */}
        <div className="hero-visual">
          {/* Selos flutuantes do mockup */}
          <div className="hero-floating-badge hero-floating-badge--1" aria-hidden="true">
            <span className="floating-badge-pill" style={{ backgroundColor: 'var(--line-1)' }}>1</span>
            <span className="floating-badge-label">Estação · 08:07</span>
          </div>

          <div className="hero-floating-badge hero-floating-badge--2" aria-hidden="true">
            <span className="floating-badge-pill" style={{ backgroundColor: 'var(--line-3)' }}>3</span>
            <span className="floating-badge-label">Campus · ~08:28</span>
          </div>

          <HeroPhoneMockup />
        </div>
      </div>
    </section>
  );
}
