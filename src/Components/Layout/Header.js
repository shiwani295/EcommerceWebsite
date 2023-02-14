import React from "react";
import Navbar from "../Navbar";
import Slider from "./Slider";

const Header = (props) => {
  return (
    <>
      <Navbar onClickCart={props.onShowCart} />
      <Slider />
    </>
  );
};

export default Header;
