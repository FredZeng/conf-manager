import { Link } from 'react-router-dom';
import NginxIcon from './icons/nginx.svg';
import './App.less';

function App() {
  return (
    <div className="app-container">
      <Link to="/nginx">
        <div className="conf-entry">
          <img className="conf-entry-logo" src={NginxIcon} alt="nginx" />
          <span className="conf-entry-name">Nginx</span>
        </div>
      </Link>
    </div>
  );
}

export default App;
