import React from "react";
import img from "../Asset/Image/home1.jpeg";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-4 mt-3">
          <img className="homeimg shadow-lg  bg-white rounded" src={img}></img>
        </div>
        <div className="col-md-8 col-lg-8 col-sm-8 mt-5">
          <p className="">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
//
