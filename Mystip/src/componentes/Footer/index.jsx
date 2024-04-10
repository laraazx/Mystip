import "./style.css"; // Importa os estilos do componente Footer
import { Link } from "react-router-dom"; // Importa o componente Link do React Router
// React Router Dom é uma biblioteca de roteamento de aplicativos dentro do React
// O roteamento de aplicativos, em um contexto de desenvolvimento web, refere-se à prática de definir e gerenciar diferentes "rotas" dentro de um aplicativo web
// Uma rota nada mais é do que um caminho específico para algum lugar

// Importa as imagens necessárias
import logoFooter from "../../assets/img/drink-logo.svg";
import iconInstagram from "../../assets/img/instagram.svg";
import iconWpp from "../../assets/img/whatsapp.svg";
import iconBehance from "../../assets/img/behance.svg";
import copyrightFooter from "../../assets/img/copyright.svg";

// Esta função é responsável por rolar a página suavemente para o topo
function scrollToTop() {
  // Utiliza a API do navegador para rolar a página para uma posição específica
  window.scrollTo({
    // Define a posição para onde a página deve rolar, neste caso, o topo (0 pixels)
    top: 0,
    // Define o comportamento da rolagem, neste caso, suavemente
    behavior: "smooth", // Rola suavemente para o topo
  });
}
// Window é um objeto global em JavaScript que representa a janela do navegador

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
          {/* Item do menu para rolar para o topo */}
          <li onClick={scrollToTop}>INÍCIO</li>{" "}
          <li>TERMOS DE USO</li>
          <li>
            <Link to="/about">SOBRE NÓS</Link>
          </li>{" "}
          <li>
            <Link to="/coments">COMENTÁRIOS</Link>
          </li>{" "}
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
