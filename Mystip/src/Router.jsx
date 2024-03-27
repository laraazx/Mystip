import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';
import { About } from './Pages/About';
import { Coments } from './Pages/Coments';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/coments' element={<Coments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;