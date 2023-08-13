import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ id, name, price, image, category, stock }) => {

  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(id);

  const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock;

  console.log(maxItems);
  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductById(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
    setIsAddedToCart(true);
  }

  return (
    <div className="CardItemDetails">
      <h4 className="CardHeaderDetails">{name}</h4>
      <img src={image} alt={name} className="fotosProductosDetails" />
      <div className="SectionDetails">
        <p className="InfoDetails">Precio: ${price}</p>
        <p className="InfoDetails">Categoria: {category}</p>
        <p className="InfoDetails">
          {!stock ? "Sin Stock Disponible" : `Stock Disponible: ${product.stock}`}
        </p>
      </div>
      {product.stock > 0 ? (
        isAddedToCart ? (
          <a href="/cart">Ir al carrito</a>
        ) : (
            <ItemCount
            initial={1}
            stock={product.stock}
            onConfirm={handleAddToCart}
          />
        )
      ) : (
        <p>No hay stock disponible</p>
      )}
      {itemInCart && (
        <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
      )}
      <Link to="/" className='Option'>
        Volver al inicio
      </Link>
      
    </div>
  );
};

export default ItemDetail;