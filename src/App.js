import { Fragment, useState } from "react";
import React from "react";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Store from "./Components/Store";
import CartProvider from "./Components/StoreContext/CartProvider";
import Footer from "./Components/Layout/Footer";
import ContactUs from "./Components/ContactUs";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  const contactUsHandler = async (data) => {
    try {
      const response = await fetch(
        "https://ecomcontactform-default-rtdb.firebaseio.com/ContactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      alert("Stored Data Successfully");

      //console.log(responseData);
    } catch {
      console.log("error");
    }
  };

  return (
    <Fragment>
      <CartProvider>
        {cartIsShow && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contactus"
            contactUsHandler
            element={<ContactUs OnSubmitContactForm={contactUsHandler} />}
          />
        </Routes>
      </CartProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
//
