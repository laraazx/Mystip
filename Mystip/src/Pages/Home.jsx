import "../styles/home.css";
import backgroundPhoto from "../assets/img/background.svg";
import { Link } from "react-router-dom";
import { Header } from "../componentes/Header";

export function Home() {
  return (
    <div className="home">
      <Header />
      <div className="background">
        <div className="titleHome">
          <h1>MYS<br /><span style={{fontSize: "9rem", color: "#C7620C"}}>TIP</span></h1>
        </div>
        <img src={backgroundPhoto} alt="" />
      </div>

      <div className="text-and-button">
        <div className="text">
          <h2>
            Onde os <span style={{ color: "#F88406" }}>amantes</span> da{" "}
            <span style={{ color: "#C7620C" }}>bebida</span>{" "}
            <span style={{ fontSize: "2.4rem" }}>
              se encontram para{" "}
              <span style={{ color: "#F88406" }}>explorar</span>
            </span>
          </h2>
        </div>
        <div className="button">
          <Link to="/catalog">VER CATÁLOGO</Link>
        </div>
      </div>
    </div>
  );
}
