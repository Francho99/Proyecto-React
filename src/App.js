import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer  from './Components/Items/ItemListContainer'
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import NotFoundPage from './Components/NotFoundPage';
import CartContainer from './Components/Cart/CartContainer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<><ItemListContainer/></>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>  
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
