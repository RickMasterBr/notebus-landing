const PRINCIPLES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Seus dados, no seu aparelho',
    description: 'O NoteBus foi pensado para funcionar sem conta obrigatória nem cadastro na nuvem. Suas anotações e trajetos continuam sob seu controle no seu dispositivo.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
    title: 'Funciona mesmo sem sinal',
    description: 'O essencial fica disponível offline. Você não precisa esperar rede móvel carregar na parada nem gastar pacote de dados para consultar seus horários.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: 'Estimativas honestas',
    description: 'Em vez de fingir certeza com falsas promessas de tempo real, o NoteBus mostra margens reais de variação e níveis transparentes de confiança.',
  },
];

export function Principles() {
  return (
    <section id="principios" className="principles-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Um jeito mais calmo de lidar com a rotina.
          </h2>
          <p className="section-lead">
            Projetado para respeitar a sua autonomia, a privacidade dos seus deslocamentos e a realidade das ruas.
          </p>
        </div>

        <div className="principles-grid">
          {PRINCIPLES.map((principle) => (
            <article key={principle.title} className="principle-card">
              <div className="principle-icon-wrapper" aria-hidden="true">
                {principle.icon}
              </div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </article>
          ))}
        </div>

        {/* Faixa de tranquilidade */}
        <div className="principles-banner">
          <div className="banner-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Sem feed</span>
          </div>
          <span className="banner-separator">·</span>
          <div className="banner-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Sem anúncios</span>
          </div>
          <span className="banner-separator">·</span>
          <div className="banner-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Sem depender de operadoras</span>
          </div>
        </div>
      </div>
    </section>
  );
}
