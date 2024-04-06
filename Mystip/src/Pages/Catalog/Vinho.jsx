import "../../styles/catalog.css"

// fotos
import backVinho from "../../assets/img/vinho-background.svg";
import vinho1 from "../../assets/img/vinho-1.svg"
import vinho2 from "../../assets/img/vinho-2.svg"
import { Header } from "../../componentes/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/Footer";

const imagesVinho = [vinho1, vinho2];

export function Vinho(){
    return(
        <div className="page-vinho">
            <div className="background">
        <img src={backVinho} alt="" />
      </div>
      <Header path="/vinho" />

      <div className="revenues">
        {imagesVinho.map((image) => (
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
          <h2>
            Deixe seu <Link to="/coments">comentário</Link>
          </h2>
        </div>
      </div>

      <Footer />
        </div>
    )
}