import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer';
import CustomProvider from './context/cartContext';
import Carrito from './components/Carrito/Carrito';
function App() {
  return (
    <> 
    <CustomProvider>

    <BrowserRouter>
     
       <Navbar/>

     <Routes>
   
     <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/panqueques' element={<ItemListContainer/>}/>
      <Route path='/sabor/:saboresId' element={<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Carrito/>}/>

      </Routes>
     
      <Footer/>
   
    </BrowserRouter>

      </CustomProvider>
    </>
  );
}

export default App;
