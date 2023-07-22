import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
import { getProductsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()
  const asyncFunc = categoryId ? getProductsByCategory : getProducts

  useEffect(() => {
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  return (
    <main>
      <div className="divProductos">
        <h1 className="h1Titulo">{greeting} </h1>
        <ItemList products={products} />
      </div>
    </main>
  );
};

export default ItemListContainer;