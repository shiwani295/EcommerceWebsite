import React from "react";
import Buttonhidden from "./Layout/Buttonhidden";
import Navbardata from "./Layout/Navbardata";
function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h5 className="brand-name">Funda Ecom</h5>
          </a>
          <Buttonhidden />
          <Navbardata onClick={props.onClickCart} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
