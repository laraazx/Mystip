// Importando os componentes necessários do React e do React Router
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer";
import { Link } from "react-router-dom";

// Importando o arquivo de estilos CSS específico para esta página
import "../../styles/catalog.css";

// Importando as imagens relacionadas ao gin
import backgroundGin from "../../assets/img/gin-background.svg";
import ginGimlet from "../../assets/img/gin-gimlet.svg";
import ginNegroni from "../../assets/img/gin-negroni.svg";
import ginDry from "../../assets/img/gin-dry.svg";

// Criando um array com as imagens de gin
const imagesGin = [ginDry, ginGimlet, ginNegroni];

// Componente da página Gin
export function Gin() {
  return (
    <div className="gin-page">
      {/* Definindo o background da página */}
      <div className="background">
        <img src={backgroundGin} alt="" />
      </div>

      {/* Incluindo o cabeçalho da página */}
      <Header path="/gin" />

      {/* Exibindo as imagens relacionadas aos drinks de gin */}
      <div className="revenues">
        {imagesGin.map((image) => (
          <div className="revenues-image" key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      {/* Incluindo o formulário de comentários */}
      <div className="coment-site">
        <div className="title">
          <h1>Gostou?</h1>
        </div>
        <div className="sub-coment">
          {/* Link para a página de comentários */}
          <h2>
            Deixe seu <Link to="/coments">comentário</Link>
          </h2>
        </div>
      </div>

      {/* Incluindo o rodapé da página */}
      <Footer />
    </div>
  );
}
