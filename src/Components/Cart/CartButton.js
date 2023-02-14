import React from "react";

const CartButton = (props) => {
  return (
    <div className="col-md-5 my-auto">
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link " type="button" onClick={props.onClick}>
            <i className="fa fa-shopping-cart"></i> Cart (0)
          </a>
        </li>
        {/*  */}
      </ul>
    </div>
  );
};

export default CartButton;
