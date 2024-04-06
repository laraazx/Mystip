import "../../styles/catalog.css";

// Fotos
import backBoteco from "../../assets/img/boteco-background.svg";
import botBomb from "../../assets/img/boteco-bomb.svg";
import botCubra from "../../assets/img/boteco-cubra.svg";
import botGalo from "../../assets/img/boteco-galo.svg";
import { Header } from "../../componentes/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/Footer";

const imagesBoteco = [botBomb, botCubra, botGalo];
export function Boteco() {
  return (
    <div className="page-boteco">
      <div className="background">
        <img src={backBoteco} alt="" />
      </div>
      <Header path="/boteco" />

      <div className="revenues">
        {imagesBoteco.map((image) => (
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
