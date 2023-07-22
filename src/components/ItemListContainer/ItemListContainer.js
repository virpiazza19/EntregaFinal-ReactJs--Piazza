import './ItemListContainer.css';
import React,{ useState, useEffect } from 'react';
import { getProductsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })

      AOS.init();
  }, [categoryId])

  return (
    <main>
      <div className="divProductos" data-aos="zoom-in">
        <h1 className="h1Titulo">{greeting} </h1>
        <ItemList products={products} />
      </div>
    </main>
  );
};

export default ItemListContainer;