import { LineBadge } from '../ui/LineBadge';

export function RecordSheetMockup() {
  return (
    <div className="mockup-card-container mockup-record-sheet">
      {/* Top Handle & ✕ */}
      <div className="record-sheet-top">
        <div className="app-sheet-handle" />
        <div className="record-header-row">
          <h4 className="record-title">Registro</h4>
          <span className="record-close-btn" aria-hidden="true">✕</span>
        </div>
      </div>

      {/* Linhas de Seleção */}
      <div className="record-rows">
        <div className="record-row">
          <span className="record-label">Linha</span>
          <div className="record-value-with-badge">
            <LineBadge code="1" size="sm" />
            <span>— Estação</span>
            <span className="record-arrow">›</span>
          </div>
        </div>

        <div className="record-row">
          <span className="record-label">Ponto</span>
          <div className="record-value">
            <span>Praça Central</span>
            <span className="record-arrow">›</span>
          </div>
        </div>

        <div className="record-row">
          <span className="record-label">Dia</span>
          <div className="record-value">
            <span>Hoje · quinta-feira</span>
            <span className="record-arrow">›</span>
          </div>
        </div>
      </div>

      {/* Alternância Embarquei / Só vi passar */}
      <div className="record-toggle-pills">
        <button type="button" className="record-pill record-pill--active">
          Embarquei
        </button>
        <button type="button" className="record-pill">
          Só vi passar
        </button>
      </div>

      {/* Ajuste de Horário */}
      <div className="record-time-section">
        <div className="record-time-display num-tabular">08:13</div>
        <div className="record-delta-chips">
          <span className="delta-chip">-10</span>
          <span className="delta-chip">-5</span>
          <span className="delta-chip">-2</span>
          <span className="delta-chip">-1</span>
          <span className="delta-chip delta-chip--active">+1</span>
        </div>
      </div>

      {/* Validação Inteligente */}
      <div className="record-validation-note">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>Casa com a viagem das 08:10 · pela tabela às 08:12</span>
      </div>

      {/* Switch Anotei de memória */}
      <div className="record-switch-row">
        <div>
          <span className="switch-title">Anotei de memória</span>
          <span className="switch-desc">Pesa menos na estimativa quando você não tem certeza</span>
        </div>
        <div className="switch-control" aria-hidden="true">
          <div className="switch-knob" />
        </div>
      </div>
    </div>
  );
}
