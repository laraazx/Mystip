import '../styles/home.css'
import drinkFoto from '../assets/img/drink.svg'
import { Link } from 'react-router-dom'

export function Home(){
    return (
        <header>
        <div className="start">
          <div className="image-and-name">
            <div className="imageDrink">
              <img src={drinkFoto} alt="" />
            </div>
            <div className="textLogo">
                <h1><span style={{color: '#CD001F'}}>MYS</span><span style={{fontSize: '9.5vw'}}>TIP</span></h1>
            </div>
          </div>
          <div className="text-and-button">
            <div className="textIntroduction">
                <h2>Descubra o mundo das bebidas no Mystip. Receitas e dicas - <span style={{color: '#1F9A84'}}>tudo em um só lugar.</span></h2>
            </div>
            <div className="buttonCatalog">
                <Link to="/catalog">VER CATÁLOGO</Link>
            </div>
          </div>
        </div>
      </header>
    )
}