import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Coments } from './Pages/Coments';
import { Catalog } from './Pages/Catalog/index';
import { About } from './Pages/About';
import { Boteco } from './Pages/Catalog/Boteco';
import { Cachaca } from './Pages/Catalog/Cachaca';
import { Espumante } from './Pages/Catalog/Espumante';
import { Tequila } from './Pages/Catalog/Tequila';
import { Vinho } from './Pages/Catalog/Vinho';
import { Vodka } from './Pages/Catalog/Vodka';
import { Whisky } from './Pages/Catalog/Whisky';
import { Gin } from './Pages/Catalog/Gin';

const Router = () => {
    return (
        <BrowserRouter> {/* Define o roteador para gerenciar as rotas */}
            <Routes> {/* Define as rotas da aplicação */}
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/coments' element={<Coments/>}/>
                <Route path='/catalog/gin' element={<Gin/>}/>
                <Route path='/catalog/whisky' element={<Whisky/>}/>
                <Route path='/catalog/vodka' element={<Vodka/>}/>
                <Route path='/catalog/boteco' element={<Boteco/>}/>
                <Route path='/catalog/tequila' element={<Tequila/>}/>
                <Route path='/catalog/espumante' element={<Espumante/>}/>
                <Route path='/catalog/cachaca' element={<Cachaca/>}/>
                <Route path='/catalog/vinho' element={<Vinho/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;