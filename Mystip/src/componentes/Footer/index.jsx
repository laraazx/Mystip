import "./style.css"; // Importa os estilos do componente Footer
import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import { useRef } from "react"; // Importa o hook useRef do React

// Importa as imagens necessárias
import logoFooter from "../../assets/img/drink-logo.svg";
import iconInstagram from "../../assets/img/instagram.svg";
import iconWpp from "../../assets/img/whatsapp.svg";
import iconBehance from "../../assets/img/behance.svg";
import copyrightFooter from "../../assets/img/copyright.svg";

// Função para rolar suavemente para o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Rola suavemente para o topo
  });
}

// Componente Footer
export function Footer() {
  return (
    <div className="footer-pages">
      {/* Logo do rodapé */}
      <div className="logo-footer">
        <div className="image-logoFooter">
          <img src={logoFooter} alt="" /> {/* Imagem do logo */}
        </div>
        <div className="title-footer">
          <h1>
            MYS<span style={{ color: "#28684A" }}>TIP</span>{" "}
            {/* Título do footer */}
          </h1>
        </div>
      </div>

      {/* Menu do rodapé */}
      <div className="menu-footer">
        <ul>
          <li onClick={scrollToTop}>INÍCIO</li>{" "}
          {/* Item do menu para rolar para o topo */}
          <li>TERMOS DE USO</li> {/* Item do menu para os termos de uso */}
          <li>
            <Link to="/about">SOBRE NÓS</Link>
          </li>{" "}
          {/* Item do menu com link para a página "Sobre Nós" */}
          <li>
            <Link to="/coments">COMENTÁRIOS</Link>
          </li>{" "}
          {/* Item do menu com link para a página "Comentários" */}
        </ul>
      </div>

      {/* Ícones das redes sociais */}
      <div className="socials">
        {/* Link para o Instagram */}
        <Link to="https://www.instagram.com/zxnelato/" target="blank">
          <img src={iconInstagram} alt="" />
        </Link>
        {/* Link para o WhatsApp */}
        <Link to="https://wa.me/11951789466" target="blank">
          <img src={iconWpp} alt="" />
        </Link>
        {/* Link para o Behance */}
        <Link to="https://www.behance.net/larazanelato" target="blank">
          <img src={iconBehance} alt="" />
        </Link>
      </div>

      {/* Retângulo de direitos autorais */}
      <div className="retangle-end">
        <div className="elements-retangle">
          <img src={copyrightFooter} alt="" />
          <h1>Todos os direitos reservados por Mystip</h1>{" "}
          {/* Direitos autorais */}
        </div>
      </div>
    </div>
  );
}
