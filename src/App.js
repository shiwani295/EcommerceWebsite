import { Fragment, useState } from "react";
import React from "react";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Store from "./Components/Store";
import CartProvider from "./Components/StoreContext/CartProvider";
import Footer from "./Components/Layout/Footer";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <Fragment>
      <CartProvider>
        {cartIsShow && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            {/* <Route path="cart" element={<Cart />} /> */}
          </Routes>
        </Router>
      </CartProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
//
