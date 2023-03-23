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

  //add to fav

  const AddToFavHandler = () => {
    console.log("fav page");
  };
  return (
    <>
      <div className="card card_storeItem" key={props.id}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/productDetails/${props.id}`}
          state={{
            title: props.title,
            image: props.image,
            price: props.price,
            productReview: props.productReview,
          }}
        >
          <div>
            <img
              className="card-img-top"
              src={props.image}
              alt="Cardimagecap"
            />
          </div>
          <div className=" pt-3 pb-3">
            <span className=" h5  fw-bold">{props.title}</span>
          </div>
          <div>
            <span className="price">{price}</span>
          </div>
        </Link>
        <span className="wishList">
          <Link style={{ textDecoration: "none", color: "black" }}>
            <i
              class="fa fa-heart-o"
              style={{ fontSize: "24px" }}
              onClick={AddToFavHandler}
            ></i>
            {/* <i className="fa fa-heart"></i> */}
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
