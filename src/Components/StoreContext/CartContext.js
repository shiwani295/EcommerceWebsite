import React, { createContext } from "react";

const CartContext = React.createContext({
  items: [],
  totalamount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
