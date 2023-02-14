import React from "react";
import CartContext from "./CartContext";

const addItemFromCartHandler = (item) => {};
const removeItemFromCartHandler = (id) => {};
const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemFromCartHandler,
  removeItem: removeItemFromCartHandler,
};
const CartProvider = (props) => {
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
