import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Header/Footer";
import "../styles/about.css";

// Fotos
import imageAbout from "../assets/img/about-image.svg";
import image1 from "../assets/img/img1-about.svg";
import image2 from "../assets/img/img2-about.svg";
import image3 from "../assets/img/img3-about.svg";

export function About() {
  return (
    <section className="about-page">
      <div className="retangle">
        <div className="title-retangle">
          <h2>um lugar para você explorar</h2>
        </div>
      </div>

      <div className="imageStart">
        <img src={imageAbout} alt="" />
      </div>

      <Header path="/about" />

      <div className="infos-about">
        <div className="texts">
          <div className="title-about">
            <h1>
              Nosso compromisso{" "}
              <span style={{ fontSize: "3rem" }}>com a arte das</span> <br />
              <span style={{ textTransform: "uppercase" }}>bebidas.</span>
            </h1>
          </div>
          <div className="text-info">
            <p>
              Somos apaixonados por compartilhar os segredos por trás de cada
              bebida. <br />
              <br />
              Aqui, ensinamos receitas e técnicas para você se tornar o mestre
              dos coquetéis.
            </p>
          </div>
        </div>
        <div className="images-about">
          <div className="row-1">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
          </div>
          <div className="row-2">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box" style={{background: '#28684A'}}>
          <div class="number"><h1>50 +</h1></div>
          <div class="description">Receitas para você</div>
        </div>

        <div class="box" style={{background: '#2A7E68'}}>
          <div class="number"><h1>100 +</h1></div>
          <div class="description">Feedbacks recebidos</div>
        </div>

        <div class="box" style={{background: '#33B074'}}>
          <div class="number"><h1>1000 +</h1></div>
          <div class="description">Visitas ao nosso site</div>
        </div>
      </div>

      <Footer/>
    </section>
  );
}
