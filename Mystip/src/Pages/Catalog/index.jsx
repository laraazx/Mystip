// Importando os componentes necessários do React e do React Router
import { Link } from "react-router-dom";
import { Header } from "../../componentes/Header";
import { Retangle } from "../../componentes/Retangle";
import { Footer } from "../../componentes/Footer";

// Importando o arquivo de estilos CSS específico para esta página
import "../../styles/catalog.css";

// Importando as imagens relacionadas às categorias do catálogo
import botecoC from "../../assets/img/boteco-catalog.svg";
import cachacaC from "../../assets/img/cachaça-catalog.svg";
import espumanteC from "../../assets/img/espumante-catalog.svg";
import ginC from "../../assets/img/gin-catalog.svg";
import sloganImage from "../../assets/img/image-catalog.svg";
import tequilaC from "../../assets/img/tequila-catalog.svg";
import vinhoC from "../../assets/img/vinho-catalog.svg";
import vodkaC from "../../assets/img/vodka-catalog.svg";
import whiskyC from "../../assets/img/whisky-catalog.svg";

// Componente da página Catalog
export function Catalog() {
  // Array contendo as imagens e os caminhos para cada categoria
  const categoriesImages = [
    { image: ginC, path: "./Gin" },
    { image: whiskyC, path: "./Whisky" },
    { image: vodkaC, path: "./Vodka" },
    { image: botecoC, path: "./Boteco" },
    { image: tequilaC, path: "./Tequila" },
    { image: espumanteC, path: "./Espumante" },
    { image: cachacaC, path: "./Cachaca" },
    { image: vinhoC, path: "./Vinho" },
  ];

  return (
    <section className="start-catalog">
      {/* Incluindo o componente Retangle */}
      <Retangle />

      <div className="slogan-catalog-start">
        <div className="image-slogan-catalog">
          {/* Exibindo a imagem do slogan */}
          <img src={sloganImage} alt="" />
        </div>
      </div>

      {/* Incluindo o cabeçalho da página */}
      <Header path="/catalog" />

      <div className="categories">
        <div className="title-categories">
          <h1>
            APRENDA <span style={{ color: "#28684A" }}>SEM</span> MODERAÇÃO!
          </h1>
        </div>

        {/* Exibindo as imagens das categorias com links para as respectivas páginas */}
        <div className="categories-img">
          {categoriesImages.map((item) => (
            <div className="items" key={item}>
              {/* Link para a categoria específica */}
              <Link to={item.path}>
                <img src={item.image} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Incluindo o rodapé da página */}
      <Footer />
    </section>
  );
}
