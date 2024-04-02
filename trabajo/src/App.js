import './App.css';
import Inicio from './componentes/Inicio';
import {Routes, Route, HashRouter} from "react-router-dom";
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';

function App(){
    return (
        <HashRouter>
            <Route exact path='/'  element={<Inicio/>}/>
            <Route exact path='/registro' element={<Registro/>}/>
            <Route exact path="*"   element={<NotFound/>}/>
        </HashRouter>
    );
}
export default App;