import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Nosotros from './Components/Nosotros/Nosotros';
import PorQueMaguey from './Components/PorQueMaguey/PorQueMaguey';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import Categories from './Components/Categories/Categories';
import ListaShampoos from './Components/ListadoShampoos/ListaShampoos';
import {categorias, secciones} from './mock'
import './App.css';

function App() {
  
  return (
   <BrowserRouter className='App'>
    <NavBar secciones={secciones} categorias={categorias}/>
    <Routes>
      <Route exact path ='/' element={<ItemListContainer/>}/>
      <Route exact path ='/nosotros' element={<Nosotros/>}/>
      <Route exact path ='/porquemaguey' element={<PorQueMaguey/>}/>
      <Route exact path ='/category/:id' element={<ItemListContainer/>}/>
      <Route exact path ='/item/:id' element={<ItemListContainer/>}/>
      <Route exact path ='/productos' element={<Categories/>}/>
      <Route exact path ='/preguntas' element={<PreguntasFrecuentes/>}/>
      <Route exact path ='/listasproductos/:idproducto1/:nombre1' element={<ListaShampoos/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
