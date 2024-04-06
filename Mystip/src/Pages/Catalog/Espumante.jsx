import "../../styles/catalog.css";

//Fotos
import espBack from "../../assets/img/esp-background.svg";
import espApe from "../../assets/img/esp-ape.svg";
import espBell from "../../assets/img/esp-bell.svg";
import espRoss from "../../assets/img/esp-ross.svg";
import { Header } from "../../componentes/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/Footer";

const imagesEsp = [espApe, espBell, espRoss];

export function Espumante() {
  return (
    <div className="page-espumante">
      <div className="background">
        <img src={espBack} alt="" />
      </div>
      <Header path="/espumante" />

      <div className="revenues">
        {imagesEsp.map((image) => (
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
  );
}
