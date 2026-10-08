import { LineBadge } from '../ui/LineBadge';
import { ConfidenceSeal } from '../ui/ConfidenceSeal';

export function RouteCompareMockup() {
  return (
    <div className="mockup-card-container mockup-route-compare">
      {/* Título de Destino */}
      <div className="route-dest-header">
        <div>
          <span className="route-dest-label">Destino</span>
          <h4 className="route-dest-title">Ir para Facul</h4>
        </div>
        <span className="route-opt-count">2 alternativas</span>
      </div>

      {/* Cartão Ativo "Em Viagem" (Regra DESIGN.md D-042 / TripCard.tsx) */}
      <div className="app-trip-card">
        <div className="app-trip-head">
          <LineBadge code="1" />
          <div className="app-trip-info">
            <span className="app-trip-title">Em viagem → Facul</span>
            <span className="app-trip-sub num-tabular">embarcou 08:13 · Praça Central</span>
          </div>
          <span className="app-trip-eta num-tabular">~08:42</span>
        </div>
        <div className="app-trip-actions">
          <button type="button" className="app-alight-btn">
            Desci aqui
          </button>
          <button type="button" className="app-dismiss-btn">
            Dispensar
          </button>
        </div>
      </div>

      {/* Lista de Alternativas Comparadas */}
      <div className="route-options-list">
        <div className="route-option-card route-option-card--active">
          <div className="route-opt-top">
            <div className="route-opt-line">
              <LineBadge code="1" />
              <span className="route-opt-tag">Mais rápida hoje</span>
            </div>
            <ConfidenceSeal level="medium" />
          </div>

          <div className="route-opt-times">
            <div>
              <span className="route-time-caption">Sair de casa</span>
              <span className="route-time-val num-tabular">08:03</span>
            </div>
            <div className="route-time-divider">→</div>
            <div>
              <span className="route-time-caption">No ponto</span>
              <span className="route-time-val num-tabular">08:11</span>
            </div>
            <div className="route-time-divider">→</div>
            <div>
              <span className="route-time-caption">Chega</span>
              <span className="route-time-val route-time-val--arrival num-tabular">~08:42</span>
            </div>
          </div>
        </div>

        <div className="route-option-card">
          <div className="route-opt-top">
            <div className="route-opt-line">
              <LineBadge code="3" />
              <span className="route-opt-tag">Menos caminhada</span>
            </div>
            <ConfidenceSeal level="high" />
          </div>

          <div className="route-opt-times">
            <div>
              <span className="route-time-caption">Sair de casa</span>
              <span className="route-time-val num-tabular">08:15</span>
            </div>
            <div className="route-time-divider">→</div>
            <div>
              <span className="route-time-caption">No ponto</span>
              <span className="route-time-val num-tabular">08:26</span>
            </div>
            <div className="route-time-divider">→</div>
            <div>
              <span className="route-time-caption">Chega</span>
              <span className="route-time-val route-time-val--arrival num-tabular">~08:58</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
