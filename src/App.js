import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer  from './Components/Items/ItemListContainer'
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import NotFoundPage from './Components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<><ItemListContainer/></>}>
        <Route path='/item/:id' element={ItemDetailContainer}/>  
        <Route path='/category/:categoryId' element={ItemListContainer}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
