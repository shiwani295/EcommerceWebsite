import React, { useContext, useReducer } from "react";
import classes from "../Cart/Cart.module.css";
import CartContext from "../StoreContext/CartContext";
import CardItem from "./CardItem";
import Model from "./Model";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed("2")}`;
  const hasItem = cartCtx.items.length > 0;

  //that add and remove for inside the cart table
  const removeCartHandler = (id) => {
    cartCtx.removeItem(id);
  };
  // const addCartHandler = (item) => {};

  const CardData = (
    <tbody className={classes["cart-items"]} id="table">
      {cartCtx.items.map((item) => (
        <CardItem
          key={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
          onRemove={removeCartHandler.bind(null, item.id)}
          //onAdd={addCartHandler.bind(null, item)}
        />
      ))}
    </tbody>
  );

  ////
  return (
    <Model onClose={props.onClose}>
      <table class="table table-responsive">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        {CardData}
      </table>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItem && <button className={classes.button}>Order Now</button>}
        <button className={classes.button} onClick={props.onClose}>
          close
        </button>
      </div>
    </Model>
  );
};

export default Cart;

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl:
//       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl:
//       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl:
//       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];
