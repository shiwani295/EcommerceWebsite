import React, { useContext } from "react";
import CartContext from "../StoreContext/CartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.quantity;
  }, 0);

  //console.log(numberOfCartItem);
  return (
    <div className="col-md-5 my-auto">
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link " type="button" onClick={props.onClick}>
            <i className="fa fa-shopping-cart"></i> Cart ({numberOfCartItem})
          </a>
        </li>
        {/*  */}
      </ul>
    </div>
  );
};

export default CartButton;
