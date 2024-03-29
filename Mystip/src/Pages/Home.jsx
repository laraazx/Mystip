import "../styles/home.css";
import { Link } from "react-router-dom";
import { Header } from "../componentes/Header";

import { useState, useEffect, useRef } from "react";

// Importando o motion = biblioteca usada para fazer animações, estou usando para fazer meu carrossel
import { motion } from 'framer-motion';

//Importação de fotos
import backgroundPhoto from "../assets/img/background.svg";
import palomasDrink from "../assets/img/palomas-drink.svg";
import mojitoDrink from "../assets/img/mojito-drink.svg";
import gimletDrink from "../assets/img/gimlet-drink.svg";
import mintDrink from "../assets/img/mintJulep-drink.svg";
import cosmopolitanDrink from "../assets/img/cosmopolitan-drink.svg";
import moscowDrink from "../assets/img/moscowMule-drink.svg";

const images = [palomasDrink, mojitoDrink, gimletDrink, mintDrink, cosmopolitanDrink, moscowDrink];
export function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (
    <section className="home">
      <Header />
      <div className="background">
        <div className="titleHome">
          <h1>MYS<br /><span style={{fontSize: "9rem", color: "#C7620C", marginLeft: '3%'}}>TIP</span></h1>
        </div>
        <img src={backgroundPhoto} alt="" />
      </div>

      <div className="text-introduction">
        <div className="text">
          <h2>
            Onde os <span style={{ color: "#F88406" }}> amantes </span> da
            <span style={{ color: "#C7620C" }}> bebida </span>
              se encontram para 
              <span style={{ color: "#F88406" }}> explorar </span>
          </h2>
        </div>
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
              <h1>Quer ver as receitas dessas <span style={{color: '#F88406', fontWeight: 'bold'}}>delícias?</span></h1>
            </div>
            <div className="button-phrase">
              <Link to='/catalog'>VER CATÁLOGO</Link>
            </div>
          </div>
      </section>

    </section>
  );
}