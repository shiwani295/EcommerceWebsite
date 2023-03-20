import React, { useContext } from "react";
import CartContext from "../StoreContext/CartContext";
import { NavLink } from "react-router-dom";
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
          <NavLink className="nav-link " to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contactus">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " type="button" onClick={props.onClick}>
            <i className="fa fa-shopping-cart"></i> Cart ({numberOfCartItem})
          </NavLink>
        </li>

        {/*  */}
      </ul>
    </div>
  );
};

export default CartButton;
