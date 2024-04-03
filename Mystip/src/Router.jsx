import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Coments } from './Pages/Coments';
import { Catalog } from './Pages/Catalog/index';
import { Gin } from './Pages/Catalog/Categories/Gin';
import { Whisky } from './Pages/Catalog/Categories/Whisky';
import { Vodka } from './Pages/Catalog/Categories/Vodka';
import { Boteco } from './Pages/Catalog/Categories/Boteco';
import { Tequila } from './Pages/Catalog/Categories/Tequila';
import { Espumante } from './Pages/Catalog/Categories/Espumante';
import { Cachaca } from './Pages/Catalog/Categories/Cachaca';
import { Vinho } from './Pages/Catalog/Categories/Vinho';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/coments' element={<Coments/>}/>
                <Route path='/gin' element={<Gin/>}/>
                <Route path='/whisky' element={<Whisky/>}/>
                <Route path='/vodka' element={<Vodka/>}/>
                <Route path='/boteco' element={<Boteco/>}/>
                <Route path='/tequila' element={<Tequila/>}/>
                <Route path='/espumante' element={<Espumante/>}/>
                <Route path='/cachaca' element={<Cachaca/>}/>
                <Route path='/vinho' element={<Vinho/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;