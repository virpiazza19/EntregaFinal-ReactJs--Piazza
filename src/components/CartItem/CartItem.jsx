import "./CartItem.css";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";

const CartItem = (props) => {
  const { removeItem } = useContext(cartContext);

  return (
    <div className="CartItemDetails">
      <p className="CartDetails">Producto: {props.name}</p>
      <p className="CartDetails">Categoria: {props.category}</p>
      <p className="CartDetails">Precio por unidad: ${props.price}</p>
      <p className="CartDetails">Subtotal: ${props.count * props.price}</p>
      <button className="CartButton" onClick={() => removeItem(props.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
