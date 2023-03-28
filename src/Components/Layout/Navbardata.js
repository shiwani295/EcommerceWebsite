import React, { useContext } from "react";
import CartButton from "../Cart/CartButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../StoreContext/Auth-context";
const Navbardata = (props) => {
  const authCxt = useContext(AuthContext);
  const isloggedIn = authCxt.isLoggedIn;
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {!isloggedIn && (
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
          )}
          {isloggedIn && (
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
          )}
          {isloggedIn && (
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
          )}
        </ul>
        <CartButton onClick={props.onClick} />
      </div>
    </>
  );
};

export default Navbardata;
