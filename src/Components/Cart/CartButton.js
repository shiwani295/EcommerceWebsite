import React, { useContext } from "react";
import CartContext from "../StoreContext/CartContext";
import { NavLink } from "react-router-dom";
import AuthContext from "../StoreContext/Auth-context";
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isloggedIn = authCtx.isLoggedIn;

  const numberOfCartItem = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.quantity;
  }, 0);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className="col-md-5 my-auto">
      <ul className="navbar-nav justify-content-end">
        {!isloggedIn ? (
          <li className="nav-item">
            <NavLink className="nav-link " to="/login">
              Login
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink className="nav-link " onClick={logoutHandler}>
              Logout
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink className="nav-link " to="/contactus">
            Contact Us
          </NavLink>
        </li>
        {isloggedIn && (
          <li className="nav-item">
            <NavLink
              className="nav-link "
              type="button"
              onClick={props.onClick}
            >
              <i className="fa fa-shopping-cart"></i> Cart ({numberOfCartItem})
            </NavLink>
          </li>
        )}

        {/*  */}
      </ul>
    </div>
  );
};

export default CartButton;
