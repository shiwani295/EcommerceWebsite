import React, { useContext } from "react";
import CartContext from "../StoreContext/CartContext";

const CartButton = (props) => {
  const cartctx = useContext(CartContext);
  console.log(cartctx);

  const numberOfCartItem = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

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
