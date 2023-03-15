import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import ProductDetails from "../Pages/ProductDetails";

import CartContext from "../StoreContext/CartContext";
import StoreItemForm from "./StoreItemForm";

const StoreItems = (props) => {
  // console.log(props.item);
  const cartCtx = useContext(CartContext);

  const price = `$${props.item.price.toFixed(2)}`;
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
      <div className="card card_storeItem" key={props.id}>
        <Link
          to={`/productDetails/${props.id}`}
          state={{
            item: props.item,
          }}
        >
          <span className="text-center h5 font-weight-bold mt-1">
            {props.item.title}
          </span>
          <img
            className="card-img-top"
            src={props.item.imageUrl}
            alt="Card image cap"
          />
          <span className="price">{price}</span>
          <span className="wishList">
            <a>
              <i className="fa fa-heart"></i>
            </a>
          </span>
          <span className="quantity">
            <StoreItemForm onAddToCart={AddToCartHandler} />
          </span>
        </Link>
      </div>
      <br />
    </>
  );
};

export default StoreItems;
