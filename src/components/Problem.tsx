const PROBLEMS = [
  {
    number: '01',
    title: 'Horários que não batem',
    description: 'A tabela diz uma coisa. A rua mostra outra. O atraso acumulado ou a viagem adiantada mudam toda a rotina.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <path d="M19 19l3 3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Anotações espalhadas',
    description: 'Você até anota no WhatsApp ou nas notas do celular, mas não consegue cruzar dados nem enxergar um padrão prático.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Escolhas sob pressão',
    description: 'Perdeu uma viagem? O primeiro ônibus que apontar na esquina nem sempre é a melhor alternativa para chegar no destino.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12h6M15 12h6" />
        <path d="M12 3v6M12 15v6" />
      </svg>
    ),
  },
];

export function Problem() {
  return (
    <section className="problem-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Horário publicado não é sempre o horário que acontece.
          </h2>
          <p className="section-lead">
            Quando a rotina depende de ônibus, uma tabela sozinha nem sempre responde ao que importa: quando sair, qual opção ainda dá tempo de pegar e quando você deve chegar.
          </p>
        </div>

        <div className="problem-grid">
          {PROBLEMS.map((item) => (
            <article key={item.title} className="problem-card">
              <div className="problem-card-top">
                <span className="problem-icon-wrapper" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="problem-number num-tabular">{item.number}</span>
              </div>
              <h3 className="problem-card-title">{item.title}</h3>
              <p className="problem-card-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
