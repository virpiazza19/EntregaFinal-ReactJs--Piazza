import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Tu Alfombra"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Tu Alfombra"}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Tu Alfombra"}/>}/>
          <Route path='*' element={<h1>404 NOT FOUNT</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
