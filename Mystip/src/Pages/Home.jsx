import "../styles/home.css";
import backgroundPhoto from "../assets/img/background.svg";
import { Link } from "react-router-dom";
import { Header } from "../componentes/Header";

export function Home() {
  return (
    <div className="home">
      <Header />
      <div className="background">
        <img src={backgroundPhoto} alt="" />
      </div>

      <div className="text-and-button">
        <div className="text">
          <h2>
            Onde os <span style={{ color: "#920104" }}>amantes</span> da{" "}
            <span style={{ color: "#A7C709" }}>bebida</span>{" "}
            <span style={{ fontSize: "2.8vw" }}>
              se encontram para{" "}
              <span style={{ color: "#517605" }}>explorar</span>
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
