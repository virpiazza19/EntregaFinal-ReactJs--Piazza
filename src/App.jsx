import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Productos"}/>}/>
          <Route path='/category/:categoryId' element={<CategoryItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Tu Alfombra"}/>}/>
          <Route path='*' element={<h1>404 NOT FOUNT</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//Cambiar automáticamente el título de la página
function CategoryItemListContainer() {
  const { categoryId } = useParams();
  return <ItemListContainer greeting={categoryId} />;
}

export default App;
