import React, { useState } from "react";
import "./Comprobante.css";
import { getOrder } from "../../services/firebase";
import { NavLink } from "react-router-dom";

const Comprobante = () => {
  const [orderId, setIdOrder] = useState();
  const [compra, setCompra] = useState();
  const [unidadesPorCompre, setUnidadesPorCompre] = useState();
  const [totalCompra, setTotalCompra] = useState();
  const [fechaDeCompra, setFecha] = useState()

  async function recibirInfo() {
    const orden = await getOrder(orderId)
    setCompra(orden);
    let totalCalcular = orden.total;
    let unidades = 0;
    const fechaACalcular = orden.date.toDate()
    orden.items.forEach((item) => {
      unidades += item.count;
    });
    setFecha(fechaACalcular.toLocaleString())
    setTotalCompra(totalCalcular);
    setUnidadesPorCompre(unidades);
  }

  if (compra) {
    {
      return (
        <div className="divItems">
          <h1 className="h1CartTitulo">Compra {orderId}</h1>
          <div>
            {compra.items.map((item) => (
              <div className="CartItemDetails">
                <img
                  src={item.image}
                  alt={item.name}
                  className="CartDetails fotosProductosCartDetails"
                />
                <p className="CartDetails">{item.name}</p>
                <p className="CartDetails">Categoria: {item.category}</p>
                <p className="CartDetails">Precio por unidad: ${item.price}</p>
                <p className="CartDetails">
                  Subtotal: ${item.count * item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="parrafosCart">
            <p className="cartInfo">Cant. Items: {unidadesPorCompre}</p>
            <p className="cartInfo">Total de la compra: ${totalCompra}</p>
            <p className="cartInfo">Usuario: {compra.buyer.name}</p>
            <p className="cartInfo">Email: {compra.buyer.email}</p>
            <p className="cartInfo">Fecha de compra: {fechaDeCompra}</p>
            <NavLink className="Option2" to="/">
              Volver al home
            </NavLink>
          </div>
        </div>
      );
    }
  }

  return (
    <main>
      <div classname="divContacto">
        <h1 className="h1DetailsTitulo">Buscar compras</h1>
        <form classname="formDiv" id="formMensajes">
          <div classname="mb-3">
            <label for="name" classname="form-label formFonts">
              Número de comprobante
            </label>
            <input
              type="text"
              name="nombre"
              classname="form-control"
              placeholder="Ingrese su nombre"
              id="name"
              value={orderId}
              onChange={({ target }) => setIdOrder(target.value)}
              required
            />
          </div>
        </form>
        <div>
          <button className="Option2" onClick={recibirInfo}>
            Buscar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Comprobante;
