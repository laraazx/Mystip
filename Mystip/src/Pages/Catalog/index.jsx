import { Link } from "react-router-dom";
import { Header } from "../../componentes/Header";
import { Retangle } from "../../componentes/Retangle";
import "../../styles/catalog.css";

// Fotos
import botecoC from "../../assets/img/boteco-catalog.svg";
import cachacaC from "../../assets/img/cachaça-catalog.svg";
import espumanteC from "../../assets/img/espumante-catalog.svg";
import ginC from "../../assets/img/gin-catalog.svg";
import sloganImage from "../../assets/img/image-catalog.svg";
import tequilaC from "../../assets/img/tequila-catalog.svg";
import vinhoC from "../../assets/img/vinho-catalog.svg";
import vodkaC from "../../assets/img/vodka-catalog.svg";
import whiskyC from "../../assets/img/whisky-catalog.svg";
import { Footer } from "../../componentes/Header/Footer";


export function Catalog() {
  const categoriesImages = [
    { image: ginC, path: './Gin'},
    { image: whiskyC, path: './Pages/Catalog/Categories/Whisky'},
    { image: vodkaC, path: './Pages/Catalog/Categories/Vodka'},
    { image: botecoC, path: './Pages/Catalog/Categories/Boteco'},
    { image: tequilaC, path: './Pages/Catalog/Categories/Tequila'},
    { image: espumanteC, path: './Pages/Catalog/Categories/Espumante'},
    { image: cachacaC, path: './Pages/Catalog/Categories/Cachaca'},
    { image: vinhoC, path: './Pages/Catalog/Categories/Vinho'}
  ]
  return (
    <section className="start-catalog">
      <Retangle/>
      <div className="slogan-catalog-start">
        <div className="image-slogan-catalog">
          <img src={sloganImage} alt="" />
        </div>
      </div>
      <Header path="/catalog" />

      <div className="categories">
        <div className="title-categories">
          <h1>
            APRENDA <span style={{ color: "#28684A" }}>SEM</span> MODERAÇÃO!
          </h1>
        </div>
        <div className="categories-img">
          {categoriesImages.map((item) => (
            <div className="items" key={item}>
              <Link to={item.path}><img src={item.image} alt="" /></Link>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </section>
  );
}
