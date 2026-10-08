import { LineBadge } from '../ui/LineBadge';
import { ConfidenceSeal } from '../ui/ConfidenceSeal';

export function StopScreenMockup() {
  return (
    <div className="mockup-card-container">
      {/* Cabeçalho do Ponto */}
      <div className="stop-screen-header">
        <div>
          <h4 className="stop-screen-title">Praça Central</h4>
          <p className="stop-screen-subtitle">8 min a pé · Próximo da Estação</p>
        </div>
        <span className="stop-badge-pill">Seu ponto</span>
      </div>

      {/* Chips de tipo de dia (Regra DESIGN.md D-038) */}
      <div className="stop-chips-row">
        <span className="stop-chip stop-chip--active">Hoje · dia útil</span>
        <span className="stop-chip">Sábado</span>
        <span className="stop-chip">Domingo/feriado</span>
      </div>

      {/* Lista de Partidas */}
      <div className="stop-departures-list">
        <div className="stop-departure-item stop-departure-item--next">
          <div className="stop-dep-left">
            <LineBadge code="1" />
            <div className="stop-dep-info">
              <span className="stop-dep-dest">→ Estação Central</span>
              <span className="stop-dep-sub">passa a cada 15 min</span>
            </div>
          </div>
          <div className="stop-dep-right">
            <span className="stop-dep-time num-tabular">08:07</span>
            <ConfidenceSeal level="high" />
          </div>
        </div>

        <div className="stop-departure-item">
          <div className="stop-dep-left">
            <LineBadge code="3" />
            <div className="stop-dep-info">
              <span className="stop-dep-dest">→ Centro Universitário</span>
              <span className="stop-dep-sub">linha expressa</span>
            </div>
          </div>
          <div className="stop-dep-right">
            <span className="stop-dep-time num-tabular">08:28</span>
            <ConfidenceSeal level="medium" />
          </div>
        </div>

        <div className="stop-departure-item">
          <div className="stop-dep-left">
            <LineBadge code="7" />
            <div className="stop-dep-info">
              <span className="stop-dep-dest">→ Terminal Rodoviário</span>
              <span className="stop-dep-sub">tabela base</span>
            </div>
          </div>
          <div className="stop-dep-right">
            <span className="stop-dep-time num-tabular">08:45</span>
            <ConfidenceSeal level="estimated" />
          </div>
        </div>
      </div>

      {/* Toast oficial (Regra DESIGN.md D-039) */}
      <div className="app-toast-inline">
        <div className="app-toast-content">
          <span className="app-toast-title">Embarque registrado</span>
          <span className="app-toast-meta">Linha 1 · Praça Central · 08:13</span>
        </div>
        <div className="app-toast-actions">
          <button type="button" className="app-toast-btn">Desfazer</button>
          <button type="button" className="app-toast-btn">Ajustar</button>
        </div>
      </div>
    </div>
  );
}
