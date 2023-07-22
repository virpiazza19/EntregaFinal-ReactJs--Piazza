import './ItemListContainer.css';
import React,{ useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })

      AOS.init();
  }, [])

  return (
    <main>
      <div className="divIndex" data-aos="zoom-in">
        <h1>{greeting} </h1>
        <ItemList products={products} />
      </div>
    </main>
  );
};

export default ItemListContainer;