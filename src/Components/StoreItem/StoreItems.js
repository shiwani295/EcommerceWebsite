import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import ProductDetails from "../Pages/ProductDetails";

import CartContext from "../StoreContext/CartContext";
import StoreItemForm from "./StoreItemForm";

const StoreItems = (props) => {
  //console.log(props);
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      quantity: quantity,
      image: props.image,
      price: props.price,
      productReview: props.productReview,
    });
  };
  return (
    <>
      <div className="card card_storeItem" key={props.id}>
        <Link
          to={`/productDetails/${props.id}`}
          state={{
            title: props.title,
            image: props.image,
            price: props.price,
            productReview: props.productReview,
          }}
        >
          {/* <Link to={`/productDetails/${props.id}`} state={{ title: props.title }}> */}
          <span className="text-center h5 font-weight-bold mt-1">
            {props.title}
          </span>

          <img className="card-img-top" src={props.image} alt="Cardimagecap" />
          <span className="price">{price}</span>
        </Link>
        <span className="wishList">
          <Link>
            <i className="fa fa-heart"></i>
          </Link>
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
