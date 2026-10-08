import { site } from '../content/site';

export function Contact() {
  return (
    <section id="sobre" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="contact-title">O NoteBus está a caminho.</h2>
            <p className="contact-text">
              Estamos desenvolvendo a primeira versão do NoteBus. Quer acompanhar o projeto ou contar como você organiza seus horários de ônibus no dia a dia? Adoraríamos ouvir você.
            </p>

            <div className="contact-actions">
              <a
                className="btn btn-pill contact-btn"
                href={`mailto:${site.contactEmail}`}
                title="Abrir seu cliente de e-mail"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Falar com o NoteBus</span>
              </a>

              <span className="contact-email-hint">{site.contactEmail}</span>
            </div>
          </div>

          <div className="contact-aside">
            <p className="contact-aside-text">
              Um aplicativo pessoal para quem quer menos ansiedade no ponto de ônibus e mais controle sobre a própria rotina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
