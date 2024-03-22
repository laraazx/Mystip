import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Catalog } from './Pages/Catalog';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;