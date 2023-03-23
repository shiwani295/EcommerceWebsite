import React from "react";
import Buttonhidden from "./Layout/Buttonhidden";
import Navbardata from "./Layout/Navbardata";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
        style={{ backgroundColor: "#72AB97" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h5 className="brand-name">E'com Shop</h5>
          </NavLink>
          <Buttonhidden />
          <Navbardata onClick={props.onClickCart} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
//color change - 3-23
