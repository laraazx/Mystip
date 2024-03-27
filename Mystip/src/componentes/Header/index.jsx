import { Link } from "react-router-dom";
import "../Header/style.css";

export function Header() {
  return (
    <header>
      <div className="menu">
        <ul>
          <li><Link to='/'>INÍCIO</Link></li>
          <li><Link to='/catalog'>CATÁLOGO</Link></li>
          <li><Link to="/about">SOBRE</Link></li>
          <li><Link to="/coments">COMENTÁRIOS</Link></li>
        </ul>
      </div>
    </header>
  );
}
