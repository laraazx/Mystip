import "../../styles/catalog.css"

// Fotos
import backgroundWh from "../../assets/img/whisky-background.svg";
import whLemo from "../../assets/img/whisky-lemonade.svg";
import whOld from "../../assets/img/whisky-old.svg";
import whSour from "../../assets/img/whisky-sour.svg";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Link } from "react-router-dom";

const imagesWhisky = [whLemo, whOld, whSour];

export function Whisky(){
    return(
        <div className="whisky-page">
             <div className="background">
        <img src={backgroundWh} alt="" />     
      </div>
      <Header path='/whisky'/>

      <div className="revenues">
        {imagesWhisky.map((image) => (
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