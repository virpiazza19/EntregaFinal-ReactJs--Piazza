import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = (props) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(props.id);

  const maxItems = itemInCart ? props.stock - itemInCart.count : props.stock;

  function handleAddToCart(quantity) {
    console.log(props, quantity);
    addToCart(props, quantity);
    alert(`Producto agregado al carrito, cantidad: ${quantity}`);
    setIsAddedToCart(true);
  }

  return (
    <div className="CardItemDetails">
      <h4 className="CardHeaderDetails">{props.name}</h4>
      <img
        src={props.image}
        alt={props.name}
        className="fotosProductosDetails"
      />
      <div className="SectionDetails">
        <p className="InfoDetails">Precio: ${props.price}</p>
        <p className="InfoDetails">Categoria: {props.category}</p>
        <p className="InfoDetails">
          {!props.stock
            ? "Sin Stock Disponible"
            : `Stock Disponible: ${props.stock}`}
        </p>
      </div>
      <div>
        {props.stock > 0 ? (
          isAddedToCart ? (
            <a className="SectionDetails" href="/cart">
              Ir al carrito
            </a>
          ) : (
            <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
          )
        ) : (
          <p className="SectionDetails">No hay stock disponible</p>
        )}
        {itemInCart && (
          <p className="SectionDetails">
            Ya agregaste {itemInCart.count} unidades de este producto
          </p>
        )}
        <NavLink to="/" className="Option2">
          Volver al inicio
        </NavLink>
      </div>
    </div>
  );
};

export default ItemDetail;
