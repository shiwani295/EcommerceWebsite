import React from "react";
import "./Store.css";

const Store = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const storeData = productsArr.map((item) => {
    return (
      <>
        <div className="card">
          <img
            className="card-img-top"
            src={item.imageUrl}
            alt="Card image cap"
          />
          <span className="price">{item.price}</span>
          <span className="wishList">
            <a>
              <i className="fa fa-heart"></i>
            </a>
          </span>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <br />
      </>
    );
  });
  return (
    <section id="music" className="container">
      <h2>MUSIC</h2>
      <div className="row">{storeData}</div>
    </section>
  );
};

export default Store;
