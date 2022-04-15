import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer  from './Components/Items/ItemListContainer'
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import NotFoundPage from './Components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='consolas' element/>
          <Route path='juegos' element/>
          <Route path='accesorios' element/>
        </Route>
       </Routes>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </BrowserRouter>
  );
}

export default App;
