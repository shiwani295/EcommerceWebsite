import { Fragment, useContext, useEffect, useState } from "react";
import React from "react";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Store from "./Components/Store";
import CartProvider from "./Components/StoreContext/CartProvider";
import Footer from "./Components/Layout/Footer";
import ContactUs from "./Components/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";
import LoginAuthForm from "./Components/LoginAuth/LoginAuthForm";
import AuthContext from "./Components/StoreContext/Auth-context";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const authCxt = useContext(AuthContext);
  const isLoggedIn = authCxt.isLoggedIn;

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
      await response.json();
      alert("Stored Data Successfully");
    } catch {
      console.log("error");
    }
  };

  //this useeffect for logout autometic after 5 mins
  useEffect(() => {
    setTimeout(() => {
      authCxt.logout();
      // Redirect("/auth");
    }, 5 * 60 * 1000);
  }, [authCxt]);
  return (
    <Fragment>
      <CartProvider>
        {cartIsShow && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/store"
            element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contactus"
            contactUsHandler
            element={<ContactUs OnSubmitContactForm={contactUsHandler} />}
          />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LoginAuthForm />} />
        </Routes>
      </CartProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
