import "../../styles/catalog.css"

// Fotos
import teqBack from "../../assets/img/tequila-background.svg";
import teqMarg from "../../assets/img/teq-marg.svg";
import teqPalo from "../../assets/img/teq-palo.svg";
import teqSun from "../../assets/img/teq-sun.svg";
import { Header } from "../../componentes/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/Footer";

const imagesTeq = [teqMarg, teqSun, teqPalo];

export function Tequila(){
    return(
        <div className="page-tequila">
            <div className="background">
        <img src={teqBack} alt="" />
      </div>
      <Header path="/tequila" />

      <div className="revenues">
        {imagesTeq.map((image) => (
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