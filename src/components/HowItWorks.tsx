const STEPS = [
  {
    step: '01',
    line: '1',
    color: '#7CB342',
    name: 'Registre',
    tagline: 'Em poucos toques, sem esforço',
    description: 'Viu o ônibus passar ou acabou de embarcar? Salve a passagem com 2 toques. Se anotou de cabeça mais tarde, o app entende e pondera a margem.',
  },
  {
    step: '02',
    line: '2',
    color: '#5B4BD6',
    name: 'Aprenda',
    tagline: 'Padrão real no seu trajeto',
    description: 'O NoteBus cruza o horário oficial com o que você registrou na rua. Ele calcula a variação real de horários e atribui níveis honestos de confiança.',
  },
  {
    step: '03',
    line: '3',
    color: '#4FC3F7',
    name: 'Decida',
    tagline: 'Saiba a hora certa de sair',
    description: 'Compare alternativas de linha, veja a previsão de chegada estimada no seu destino e saiba exatamente quando dar o primeiro passo para o ponto.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Seu caderno de horários, feito para a rua.
          </h2>
          <p className="section-lead">
            Três passos práticos que transformam anotações do dia a dia em previsibilidade real para o seu deslocamento.
          </p>
        </div>

        {/* Linha esquemática de trânsito conectando os 3 passos */}
        <div className="steps-container">
          <div className="transit-track-line" aria-hidden="true" />
          
          <div className="steps-grid">
            {STEPS.map((step) => (
              <div key={step.step} className="step-card">
                {/* Estação da linha com número */}
                <div className="step-station-node" style={{ borderColor: step.color }}>
                  <div className="step-station-inner" style={{ backgroundColor: step.color }} />
                  <span className="step-station-num num-tabular">{step.step}</span>
                </div>

                <div className="step-body">
                  <span className="step-tagline">{step.tagline}</span>
                  <h3 className="step-title">{step.name}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
