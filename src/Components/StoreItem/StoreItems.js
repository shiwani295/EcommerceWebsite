import React from "react";

const StoreItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
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
          <input
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
            //value={props.quantity}
            className="mb-2"
          ></input>
        </span>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
      <br />
    </>
  );
};

export default StoreItems;
