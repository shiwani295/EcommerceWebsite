import React from "react";
import CartButton from "../Cart/CartButton";
import { NavLink } from "react-router-dom";
import "./Navbardata.css";
const Navbardata = (props) => {
  const actionClass = {
    backgroungColor: "red",
  };
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className={(status) =>
                status.isActive ? "nav-link active " : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(status) =>
                status.isActive ? "nav-link active" : "nav-link"
              }
              to="/store"
            >
              Store
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(status) =>
                status.isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* <Searchbar /> */}
        <CartButton onClick={props.onClick} />
      </div>
    </>
  );
};

export default Navbardata;
