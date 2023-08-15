import React, { useState } from "react";
import "./Checkout.css";
import { createOrder } from "../../services/firebase";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const Checkout = () => {
  const { cart, clearCart, getSubTotal } = useContext(cartContext);
  const [isLoading, setIsLoading] = useState(false);
  const subTotal = getSubTotal();

  const [nameForm, setNameForm] = useState();
  const [emailForm, setEmailForm] = useState();
  const [phoneForm, setPhoneForm] = useState();
  const [idOrder, setIdOrder] = useState();

  async function handleCheckout() {
    setIsLoading(true);

    const orderData = {
      items: cart,
      buyer: { name: nameForm, email: emailForm, phone: phoneForm },
      date: new Date(),
      total: subTotal,
    };

    setIdOrder(await createOrder(orderData));
    setIsLoading(false);
    clearCart();

    // 1. SweetAlert o Toastify

  }

  if (isLoading) {
    return (
      <div className="divItems">
        <h1 className="h1CartTitulo">Generando orden...</h1>
      </div>
    );
  }
  if (idOrder) {
    {
      return (
        <div className="divItems">
          <h1 className="h1CartTitulo">
            Orden generada con éxito. Su número de comprobante es: {idOrder}
          </h1>
        </div>
      );
    }
  }

  return (
    <main>
      <div classname="divContacto">
        <h1 className="h1Titulo">Checkout</h1>
        <form classname="formDiv" id="formMensajes">
          <div classname="mb-3">
            <label for="name" classname="form-label formFonts">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="nombre"
              classname="form-control"
              placeholder="Ingrese su nombre"
              id="name"
              value={nameForm}
              onChange={({ target }) => setNameForm(target.value)}
              required
            />
          </div>
          <div classname="mb-3">
            <label for="email" classname="form-label formFonts">
              Mail
            </label>
            <input
              type="email"
              name="mail"
              classname="form-control"
              placeholder="Ingrese su email"
              id="email"
              value={emailForm}
              onChange={({ target }) => setEmailForm(target.value)}
              required
            />
          </div>
          <div classname="mb-3">
            <label for="phone" classname="form-label formFonts">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              classname="form-control"
              placeholder="Ingrese su teléfono con código de área"
              id="phone"
              value={phoneForm}
              onChange={({ target }) => setPhoneForm(target.value)}
              required
            />
          </div>
        </form>
        <div>
          <button className="Option2" onClick={handleCheckout}>
            CONFIRMAR COMPRA
          </button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
