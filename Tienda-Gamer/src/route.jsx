import {Routes, Route} from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Catalogo from './pages/catalogo';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element = {<App />} />
            <Route path='/home' element ={<Home />} />
            <Route path='/catalogo' element ={<Catalogo />} />
        </Routes>
    )
}

