import "../../styles/catalog.css"

// fotos
import backgroundVk from "../../assets/img/vodka-background.svg";
import vkCosmo from "../../assets/img/vodka-cosmopolitan.svg";
import vkMoscow from "../../assets/img/vodka-moscow.svg";
import vkSex from "../../assets/img/vodka-sex.svg";
import { Header } from "../../componentes/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/Footer";

const imagesVodka = [vkCosmo, vkMoscow, vkSex];

export function Vodka(){
    return(
        <div className="page-vodka">
            <div className="background">
        <img src={backgroundVk} alt="" />     
      </div>
      <Header path='/vodka'/>

      <div className="revenues">
        {imagesVodka.map((image) => (
          <div className="revenues-image" key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="coment-site">
        <div className="title">
          <h1>Gostou?</h1>
        </div>
        <div className="sub-coment">
          <h2>Deixe seu <Link to='/coments'>comentário</Link></h2>
        </div>
      </div>

      <Footer/>
        </div>
    )
}