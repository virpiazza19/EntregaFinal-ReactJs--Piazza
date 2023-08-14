import "./CartContainer.css";
import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

function CartContainer() {
  const { cart, getTotalItemsInCart, getSubTotal, clearCart } = useContext(cartContext);
  const navigate = useNavigate();

  async function handleCheckout() {
    
    const orderData = {
      items: cart,
      buyer: { name: "Virginia", email: "vir@mail.com", phone: "123123123" },
      date: new Date(),
      total: getSubTotal, // lo sacan del context
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log(`Gracias por tu compra, tu numero de orden es ${idOrder}`);
      navigate(`/order-confirmation/${idOrder}`);
      clearCart()
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }

    // 0: NO hagan alert ni lo muestren por consola
    // 1. SweetAlert o Toastify
    // 2. Redirigir al usuario a /order-confirmation/{idOrder}
    // 3. Rendering condicional
  }  

  return (
    <div className="divItems">
      <h1 className="h1CartTitulo">Tus Productos</h1>
      <div>
      <CartItem {...cart}/>
      </div>
      <p className="cartInfo">Cant. Items: {getTotalItemsInCart}</p>
      <p className="cartInfo">Total de la compra: ${getSubTotal}</p>
      <button className="Option2" onClick={handleCheckout}>COMPRAR</button>
    </div>
  );
}

export default CartContainer;
