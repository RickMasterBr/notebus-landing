import { useState } from 'react';
import { StopScreenMockup } from './mockups/StopScreenMockup';
import { RecordSheetMockup } from './mockups/RecordSheetMockup';
import { RouteCompareMockup } from './mockups/RouteCompareMockup';

const SHOWCASE_TABS = [
  {
    id: 'stop',
    badge: 'Tela inicial',
    title: 'Veja o que vem no seu ponto',
    summary: 'Horários próximos com nível honesto de confiança e acesso instantâneo ao registro.',
    component: <StopScreenMockup />,
  },
  {
    id: 'record',
    badge: 'Anotação rápida',
    title: 'Registre o que realmente aconteceu',
    summary: 'Salvar uma passagem leva menos de 5 segundos. Ajuste a hora em chips rápidos e veja se bateu com a tabela.',
    component: <RecordSheetMockup />,
  },
  {
    id: 'dest',
    badge: 'Destinos e rotas',
    title: 'Escolha pelo horário em que chega',
    summary: 'Compare alternativas de linha, saiba quando sair de casa e marque sua descida com um toque.',
    component: <RouteCompareMockup />,
  },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('stop');
  const currentTab = SHOWCASE_TABS.find((t) => t.id === activeTab) || SHOWCASE_TABS[0];

  return (
    <section id="produto" className="showcase-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Menos dúvida no ponto. Mais clareza para seguir.
          </h2>
          <p className="section-lead">
            Interface calibrada para a velocidade da rua: camadas inspiradas no Apple Maps, tipografia precisa com números tabulares e cartões fáceis de ler ao ar livre.
          </p>
        </div>

        {/* Seletor de Abas Minimalista */}
        <div className="showcase-tabs-wrapper">
          <div className="showcase-tabs" role="tablist" aria-label="Selecione uma funcionalidade">
            {SHOWCASE_TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  className={`showcase-tab-btn ${isActive ? 'showcase-tab-btn--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-btn-title">{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Painel Ativo de Apresentação */}
        <div
          id={`panel-${currentTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentTab.id}`}
          className="showcase-panel"
        >
          <div className="showcase-panel-grid">
            {/* Explicação da Tela */}
            <div className="showcase-panel-info">
              <h3 className="showcase-panel-title">{currentTab.title}</h3>
              <p className="showcase-panel-text">{currentTab.summary}</p>
              
              <ul className="showcase-panel-features">
                {currentTab.id === 'stop' && (
                  <>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Selos de linha com alto contraste e identificação clara</span>
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Barras de confiança (alta, média, baixa, estimado)</span>
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Toast com ação imediata de desfazer ou ajustar</span>
                    </li>
                  </>
                )}

                {currentTab.id === 'record' && (
                  <>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Botões delta (-10, -5, +1 min) para acerto com uma mão só</span>
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Validação com a tabela oficial sem impor regras rígidas</span>
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Opção “Anotei de memória” pondera a precisão com honestidade</span>
                    </li>
                  </>
                )}

                {currentTab.id === 'dest' && (
                  <>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Comparação de opções pelo horário estimado de chegada</span>
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Cartão Em Viagem com alerta do próximo ponto</span>
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Ação rápida de confirmação de descida</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* O Componente Real Renderizado */}
            <div className="showcase-panel-mockup">
              {currentTab.component}
            </div>
          </div>
        </div>

        <p className="showcase-disclaimer">
          Dados e nomes de paradas exibidos nesta landing são demonstrativos e fictícios.
        </p>
      </div>
    </section>
  );
}
