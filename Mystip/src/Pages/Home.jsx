// Importando estilos e dependências necessárias para a página Home
import "../styles/home.css";
import { Link } from "react-router-dom";
import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Footer";
import { Retangle } from "../componentes/Retangle";

// Importando Hooks do React para gerenciar estado e efeitos colaterais
import { useState, useEffect, useRef } from "react";

// Importando a biblioteca motion para animações
import { motion } from "framer-motion";

// Importando fotos
import drinkLogo from "../assets/img/drink-logo.svg";
import imageSlogan from "../assets/img/drink-slogan.svg";

// Importando imagens necessárias para o carrossel
import palomasDrink from "../assets/img/palomas-drink.svg";
import mojitoDrink from "../assets/img/mojito-drink.svg";
import gimletDrink from "../assets/img/gimlet-drink.svg";
import mintDrink from "../assets/img/mintJulep-drink.svg";
import cosmopolitanDrink from "../assets/img/cosmopolitan-drink.svg";
import moscowDrink from "../assets/img/moscowMule-drink.svg";

// Array contendo as imagens do carrossel
const images = [
  palomasDrink,
  mojitoDrink,
  gimletDrink,
  mintDrink,
  cosmopolitanDrink,
  moscowDrink,
];

// Componente da página Home
export function Home() {
  // Referência para o carrossel e estado para armazenar a largura total do carrossel
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  // Efeito para calcular a largura total do carrossel
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  // Renderização da página Home
  return (
    <section className="home">
      {/* Retângulo decorativo */}
      <Retangle />

      {/* Logo e título da página */}
      <div className="logo">
        <div className="image-logo">
          <img src={drinkLogo} alt="" />
        </div>
        <div className="title-logo">
          <h1>
            MYS<span style={{ color: "#28684A" }}>TIP</span>
          </h1>
          <h2>Revelando os segredos por trás de cada gole.</h2>
        </div>
      </div>

      {/* Cabeçalho da página */}
      <Header path="/" />

      {/* Imagem central */}
      <div className="middle-image">
        <img src={imageSlogan} alt="" />
      </div>

      {/* Slogan */}
      <div className="slogan-home">
        <h1>
          Onde os <span style={{ color: "#28684A" }}>amantes</span> da{" "}
          <span style={{ color: "#28684A" }}>
            bebida <br />
          </span>{" "}
          se encontram para <span style={{ color: "#28684A" }}>explorar</span>
        </h1>
      </div>

      {/* Seção dos drinks com carrossel */}
      <section id="drinks">
        <motion.div
          ref={carousel}
          className="caroussel-drinks"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {/* Mapeando as imagens do carrossel */}
            {images.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Frase e botão de ação */}
        <div className="phrase-and-button">
          <div className="phrase">
            <h1>
              Quer ver as receitas dessas{" "}
              <span style={{ color: "#28684A", fontWeight: "bold" }}>
                delícias?
              </span>
            </h1>
          </div>
          <div className="button-phrase">
            {/* Link para o catálogo */}
            <Link to="/catalog" className="button-phrase">
              VER CATÁLOGO
            </Link>
          </div>
        </div>
      </section>

      {/* Rodapé da página */}
      <Footer />
    </section>
  );
}
