import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProductById } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";

const ItemDetail = () => {

  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id } = useParams();
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
      <h4 className="CardHeaderDetails">{product.name}</h4>
      <img src={product.image} alt={product.name} className="fotosProductosDetails" />
      <div className="SectionDetails">
        <p className="InfoDetails">Precio: ${product.price}</p>
        <p className="InfoDetails">Categoria: {product.category}</p>
        <p className="InfoDetails">
          {!product.stock ? "Sin Stock Disponible" : `Stock Disponible: ${product.stock}`}
        </p>
      </div>
      {product.stock > 0 ? (
        isAddedToCart ? (
          <a href="/cart">Ir al carrito</a>
        ) : (
            <ItemCount
            initial={1}
            stock={maxItems}
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