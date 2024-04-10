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
  // Referência para o componente de carrossel
  const carousel = useRef();

  // Estado para armazenar a largura do carrossel
  const [width, setWidth] = useState(0);

  // Efeito utilizado para calcular dinamicamente a largura total do carrossel
  useEffect(() => {
    // Calcula a diferença entre a largura total do conteúdo do carrossel e a largura visível do carrossel
    // Isso permite determinar se há conteúdo além da área visível do carrossel
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
        {/* Carrossel de bebidas */}
        <motion.div
          ref={carousel} // Referência utilizada para obter o elemento DOM do carrossel
          // O termo "DOM" significa "Document Object Model" (Modelo de Objeto de Documento) 
          // e representa uma interface de programação para documentos HTML, XML e XHTML.
          // Quando se refere ao "elemento DOM" em um contexto de desenvolvimento web, 
          // geralmente está se falando sobre um objeto JavaScript que representa um elemento 
          // específico na página. Esse objeto oferece métodos e propriedades que permitem manipular 
          // e interagir com o elemento HTML associado
          className="caroussel-drinks"
          whileTap={{ cursor: "grabbing" }} // Define o cursor como "grabbing" durante o clique e arrasto
        >
          {/* Contêiner interno para o carrossel */}
          <motion.div
            className="inner"
            drag="x" // Permite arrastar horizontalmente o conteúdo do carrossel
            dragConstraints={{ right: 0, left: -width }} // Restringe o arrasto para dentro dos limites do carrossel
          >
            {/* Mapeando e renderizando as imagens do carrossel */}
            {images.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="" /> {/* Imagem do carrossel */}
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
