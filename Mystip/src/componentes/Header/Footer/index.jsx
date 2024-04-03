import "../Footer/style.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Fotos
import logoFooter from "../../../assets/img/drink-logo.svg";
import iconInstagram from "../../../assets/img/instagram.svg";
import iconWpp from "../../../assets/img/whatsapp.svg";
import iconBehance from "../../../assets/img/behance.svg";
import copyrightFooter from "../../../assets/img/copyright.svg";

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rola suavemente para o topo
    });
  }

export function Footer() {
  return (
    <div className="footer-pages">
      <div className="logo-footer">
        <div className="image-logoFooter">
          <img src={logoFooter} alt="" />
        </div>
        <div className="title-footer">
          <h1>
            MYS<span style={{ color: "#507A01" }}>TIP</span>
          </h1>
        </div>
      </div>

      <div className="menu-footer">
        <ul>
          <li onClick={scrollToTop}>HOME</li>
          <li>TERMOS DE USO</li>
          <li><Link to='/about'>SOBRE NÓS</Link></li>
          <li><Link to='/coments'>COMENTÁRIOS</Link></li>
        </ul>
      </div>

      <div className="socials">
        <Link to='https://www.instagram.com/zxnelato/' target="blank"><img src={iconInstagram} alt="" /></Link>
        <Link to='https://wa.me/11951789466' target="blank"><img src={iconWpp} alt="" /></Link>
        <Link to='https://www.behance.net/larazxnelato' target="blank"><img src={iconBehance} alt="" /></Link>
      </div>

      <div className="retangle-end">
        <div className="elements-retangle">
          <img src={copyrightFooter} alt="" />
          <h1>Todos os direitos reservados por Mystip</h1>
        </div>
      </div>
    </div>
  );
}
