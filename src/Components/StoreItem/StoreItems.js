import React, { useContext } from "react";
import CartContext from "../StoreContext/CartContext";
import StoreItemForm from "./StoreItemForm";

const StoreItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      quantity: quantity,
      image: props.image,
      price: props.price,
    });
  };
  return (
    <>
      <div className="card">
        <span className="text-center h5 font-weight-bold mt-1">
          {props.title}
        </span>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <span className="price">{price}</span>
        <span className="wishList">
          <a>
            <i className="fa fa-heart"></i>
          </a>
        </span>
        <span className="quantity">
          <StoreItemForm onAddToCart={AddToCartHandler} />
        </span>
      </div>
      <br />
    </>
  );
};

export default StoreItems;
