import React from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const context = useContext(cartContext);
  console.log(context);

  const cartNumber = context.getTotalItemsInCart();

  return (
    <NavLink to="/cart" className="custom-navlink">
      <div className="cartDiv">
        <FontAwesomeIcon icon={faCartShopping} />
        {cartNumber > 0 ? <span> {cartNumber}</span> : <span>0</span>}
      </div>
    </NavLink>
  );
};

export default CartWidget;
