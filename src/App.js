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
        <Route path='/' element={<><Navbar/><ItemListContainer/></>}>
          <Route path='category/:categoryId' element={ItemListContainer}/>
        </Route>
        <Route path='/item/:id' element={ItemDetailContainer}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
