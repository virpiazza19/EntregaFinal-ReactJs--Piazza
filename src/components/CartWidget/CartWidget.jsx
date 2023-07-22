import React from "react";
import './CartWidget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartWidget = (props) => {
  return (
    <div className="cartDiv">
      <FontAwesomeIcon icon={faCartShopping} />
      <span> {props.totalNumber}</span>
    </div>
  );
};

export default CartWidget;