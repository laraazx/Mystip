import "../../styles/catalog.css";

// Fotos
import cacBack from "../../assets/img/cac-back.svg";
import cacCaip from "../../assets/img/cac-caip.svg";
import cacMel from "../../assets/img/cac-mel.svg";
import cacSamba from "../../assets/img/cac-samba.svg";
import { Header } from "../../componentes/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/Footer";

const imagesCachaca = [cacCaip, cacSamba, cacMel];

export function Cachaca() {
  return (
    <div className="page-cachaca">
      <div className="background">
        <img src={cacBack} alt="" />
      </div>
      <Header path="/cachaca" />

      <div className="revenues">
        {imagesCachaca.map((image) => (
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
