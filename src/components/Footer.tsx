import { BrandMark } from './BrandMark';
import { site } from '../content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <BrandMark size={28} />
            <strong className="footer-title">NoteBus</strong>
          </div>
          <p className="footer-disclaimer">
            © 2026 NoteBus. Projeto independente, sem afiliação a operadoras de transporte público.
          </p>
        </div>

        <div className="footer-right">
          <a href={`mailto:${site.contactEmail}`} className="footer-link">
            {site.contactEmail}
          </a>
          <span className="footer-separator" aria-hidden="true">·</span>
          <a href="#inicio" className="footer-link footer-top-link">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
