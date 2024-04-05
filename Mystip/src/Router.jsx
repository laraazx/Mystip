import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Boteco } from './Pages/Catalog/Categories/Boteco';
import { Cachaca } from './Pages/Catalog/Categories/Cachaca';
import { Espumante } from './Pages/Catalog/Categories/Espumante';
import { Tequila } from './Pages/Catalog/Categories/Tequila';
import { Vinho } from './Pages/Catalog/Categories/Vinho';
import { Vodka } from './Pages/Catalog/Categories/Vodka';
import { Whisky } from './Pages/Catalog/Categories/Whisky';
import { Gin } from './Pages/Catalog/Gin';
import { Catalog } from './Pages/Catalog/index';
import { Coments } from './Pages/Coments';
import { Home } from './Pages/Home';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/coments' element={<Coments/>}/>
                <Route path='/catalog/gin' element={<Gin/>}/>
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