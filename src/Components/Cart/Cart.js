import React, { Fragment, useState } from "react";
import classes from "../Cart/Cart.module.css";
import Model from "./Model";
const Cart = (props) => {
  const [order, setOrder] = useState(true);
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const CardData = (
    <tbody className={classes["cart-items"]}>
      {cartElements.map((item) => (
        <tr>
          <td>
            <img
              src={item.imageUrl}
              className="rounded"
              style={{ width: "100px" }}
            />
            <span style={{ marginLeft: "6px", fontWeight: "500" }}>
              {item.title}
            </span>
          </td>
          <td>
            <p>{item.price}</p>
          </td>
          <td className="">
            <input
              className="form-control-sm border border-light"
              id="amount_"
              type="number"
              max="5"
              min="1"
              step="1"
              defaultValue="1"
              style={{ width: "40px", marginRight: "15px" }}
            />
            <button className="border border-danger rounded bg-danger ">
              Remove
            </button>
          </td>
        </tr>
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
          </tr>
        </thead>
        {CardData}
      </table>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$34.66</span>
      </div>
      <div className={classes.actions}>
        {order && <button className={classes.button}>Order Now</button>}
        <button className={classes.button} onClick={props.onClose}>
          close
        </button>
      </div>
    </Model>
  );
};

export default Cart;
