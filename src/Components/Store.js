import React from "react";
import ProductDetails from "./Pages/ProductDetails";
import "./Store.css";
import StoreItems from "./StoreItem/StoreItems";

const Store = () => {
  const productsArr = [
    {
      id: "1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 4,
      productReview: [
        {
          username: "Mohit",
          ratings: 4,
          reviewstatement: "bad product",
          profileImg: "",
        },
        {
          username: "Prakash",
          ratings: 2.5,
          reviewstatement: "Good one",
          profileImg: "",
        },
      ],
    },
    {
      id: "2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 2,
      productReview: [
        {
          username: "virat",
          ratings: 4,
          reviewstatement: "bad product",
          profileImg: "",
        },
      ],
    },
    {
      id: "3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 3,
      productReview: [
        {
          username: "john",
          ratings: 4,
          reviewstatement: "bad product",
          profileImg: "",
        },
      ],
    },
    {
      id: "4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
      productReview: [
        {
          username: "harry",
          ratings: 4,
          reviewstatement: "bad product",
          profileImg: "",
        },
      ],
    },
  ];

  const storeData = productsArr.map((item) => {
    return (
      <StoreItems
        id={item.id}
        key={item.id}
        title={item.title}
        price={item.price}
        image={item.imageUrl}
        quantity={item.quantity}
        productReview={item.productReview}
      />
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
