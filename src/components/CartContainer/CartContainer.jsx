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
  //1  Vamos a crear nuestro objeto de orden de compra
  //! 2 Guardarlo en Firestore

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
    <div>
      <h1>Cart</h1>
        <CartItem {...cart}/>
      <br />
      <button onClick={clearCart()}>Eliminar</button>
      <div>Total de la compra: ${getSubTotal}</div>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default CartContainer;
