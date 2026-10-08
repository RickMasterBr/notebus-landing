import { LineBadge } from '../ui/LineBadge';
import { ConfidenceSeal } from '../ui/ConfidenceSeal';
import { PhoneFrame } from '../ui/PhoneFrame';

export function HeroPhoneMockup() {
  return (
    <PhoneFrame time="08:14" className="hero-mockup-frame">
      <div className="hero-app-screen">
        {/* Mapa Abstrato Vetorial Superior */}
        <div className="app-map-area" aria-hidden="true">
          <svg className="app-map-svg" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
            {/* Fundo do mapa */}
            <rect width="320" height="220" fill="#EAE8E1" />
            
            {/* Rio / curso de água suave */}
            <path
              d="M-20,60 C60,50 140,80 200,65 C260,50 300,70 340,65 L340,95 C300,100 240,80 180,95 C120,110 40,80 -20,90 Z"
              fill="#D4E3F0"
              opacity="0.85"
            />
            
            {/* Malha de ruas / avenidas brancas */}
            <path d="M50,-10 L70,230" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
            <path d="M190,-10 L175,230" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
            <path d="M-10,140 C100,135 200,145 330,130" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
            <path d="M-10,40 C80,35 180,45 330,30" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
            <path d="M100,10 C130,80 110,160 140,230" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />

            {/* Marcador de ponto no mapa com selos de linha */}
            <g transform="translate(142, 92)">
              <rect x="0" y="0" width="56" height="26" rx="7" fill="#FFFFFF" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.12))" />
              <g transform="translate(5, 4)">
                {/* Linha 1 */}
                <rect x="0" y="0" width="20" height="18" rx="4" fill="#7CB342" />
                <text x="10" y="13" fill="#1C1C1E" fontSize="11" fontWeight="700" textAnchor="middle">1</text>
                {/* Linha 2 */}
                <rect x="24" y="0" width="20" height="18" rx="4" fill="#D32F2F" />
                <text x="34" y="13" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">2</text>
              </g>
            </g>
          </svg>

          {/* Botão Flutuante + Registrar (Regra oficial D-038/4.5) */}
          <div className="app-floating-register">
            <button type="button" className="app-register-btn" aria-label="Registrar embarque">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <span>Registrar</span>
            </button>
          </div>
        </div>

        {/* Bottom Sheet Principal (Estilo Apple Maps / D-150) */}
        <div className="app-sheet">
          {/* Handle de arraste */}
          <div className="app-sheet-handle" />

          {/* Pílula de Busca */}
          <div className="app-search-pill">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="6.5" cy="6.5" r="4.5" />
              <path d="M10 10l4 4" />
            </svg>
            <span>Buscar ponto, linha ou lugar</span>
          </div>

          {/* Atalhos circulares de lugares */}
          <div className="app-shortcuts-row">
            <div className="app-shortcut-item">
              <div className="app-shortcut-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="app-shortcut-label">Casa</span>
            </div>

            <div className="app-shortcut-item">
              <div className="app-shortcut-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="app-shortcut-label">Facul</span>
            </div>

            <div className="app-shortcut-item">
              <div className="app-shortcut-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
                </svg>
              </div>
              <span className="app-shortcut-label">Academia</span>
            </div>

            <div className="app-shortcut-item">
              <div className="app-shortcut-icon app-shortcut-icon--dashed">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <span className="app-shortcut-label">Adicionar</span>
            </div>
          </div>

          {/* Seção Seu Ponto */}
          <div className="app-section-header">
            <span>Seu ponto</span>
            <span className="app-section-dot">·</span>
            <span>8 min a pé</span>
          </div>

          {/* Cartão de Partida Principal */}
          <div className="app-stop-card">
            <div className="app-stop-card-top">
              <span className="app-stop-name">Praça Central</span>
              <span className="app-leave-time">sair de casa 07:59</span>
            </div>

            <div className="app-stop-card-content">
              <div className="app-bus-line-info">
                <LineBadge code="1" />
                <div className="app-bus-details">
                  <span className="app-bus-dest">→ Estação</span>
                  <div className="app-bus-meta">
                    <span className="app-bus-eta">ônibus ~08:13</span>
                    <span className="app-meta-bullet">·</span>
                    <ConfidenceSeal level="medium" />
                  </div>
                </div>
              </div>

              <div className="app-stop-time-block">
                <span className="app-stop-time-label">no ponto às</span>
                <span className="app-stop-time-value num-tabular">08:07</span>
              </div>
            </div>
          </div>

          {/* Rodapé de conferência */}
          <div className="app-sheet-footer">
            <span>2 registros para conferir</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
