// Importando estilos e dependências necessárias para a página Home
import "../styles/home.css";
import { Link } from "react-router-dom";
import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Header/Footer";

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

const images = [palomasDrink, mojitoDrink, gimletDrink, mintDrink, cosmopolitanDrink, moscowDrink];

// Componente da página Home
export function Home() {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  // Renderização da página Home
  return (
    <section className="home">
      <div className="retangle">
        <div className="title-retangle">
          <h2>um lugar para você explorar</h2>
        </div>
      </div>

      <div className="logo">
        <div className="image-logo">
          <img src={drinkLogo} alt="" />
        </div>
        <div className="title-logo">
          <h1>
            MYS<span style={{ color: '#28684A' }}>TIP</span>
          </h1>
          <h2>Revelando os segredos por trás de cada gole.</h2>
        </div>
      </div>

      <Header path="/" />

      <div className="middle-image">
        <img src={imageSlogan} alt="" />
      </div>

      <div className="slogan-home">
        <h1>Onde os <span style={{color: '#28684A'}}>amantes</span> da <span style={{color: '#28684A'}}>bebida <br /></span> se encontram para <span style={{color: '#28684A'}}>explorar</span></h1>
      </div>

      <section id="drinks">
          <motion.div ref={carousel} className="caroussel-drinks" whileTap={{cursor: 'grabbing'}}> 
            <motion.div className="inner" drag='x' dragConstraints={{ right: 0, left: -width}}>
              {images.map(image => (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="phrase-and-button">
            <div className="phrase">
              <h1>Quer ver as receitas dessas <span style={{color: '#28684A', fontWeight: 'bold'}}>delícias?</span></h1>
            </div>
            <div className="button-phrase">
              <Link to='/catalog' className="button-phrase">VER CATÁLOGO</Link>
            </div>
          </div>
      </section>
      < Footer/>
    </section>
  );
}