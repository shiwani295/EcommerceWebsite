import React from "react";
import CartButton from "../Cart/CartButton";
//import Searchbar from "./Searchbar";
const Navbardata = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="store">
            Store
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">
            About
          </a>
        </li>
      </ul>
      {/* <Searchbar /> */}
      <CartButton onClick={props.onClick} />
    </div>
  );
};

export default Navbardata;
