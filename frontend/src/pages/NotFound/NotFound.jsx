import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <div className="notfound-code">404</div>
        <div className="notfound-icon">
          <span className="material-icons">explore_off</span>
        </div>
        <h1 className="notfound-title">Sayfa Bulunamadı</h1>
        <p className="notfound-desc">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="notfound-btn-primary">
            <span className="material-icons">home</span>
            Ana Sayfa
          </Link>
          <Link to="/help" className="notfound-btn-secondary">
            <span className="material-icons">help_outline</span>
            Yardım Merkezi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
