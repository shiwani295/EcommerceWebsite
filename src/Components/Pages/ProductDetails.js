import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RatingStar } from "rating-star";
import "../Pages/ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();

  const location = useLocation();
  const { title, image, price, productReview } = location.state;
  return (
    <section>
      <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div className="card card_shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="images_zoom p-5 ">
                    <img
                      className="img-responsive mr-5"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="col-md-6 p-5">
                    <br></br>
                    <img
                      className="img-responsive"
                      src={image}
                      alt={title}
                      style={{ width: "40px", marginRight: "20px" }}
                    />
                    <img
                      className="img-responsive"
                      src={image}
                      alt={title}
                      style={{ width: "40px", marginRight: "20px" }}
                    />
                    <img
                      className="img-responsive"
                      src={image}
                      alt={title}
                      style={{ width: "40px", marginRight: "20px" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa fa-long-arrow-left"></i>

                        <Link
                          to="/store"
                          style={{
                            textDecoration: "none",
                            color: "#6c757d",
                            marginLeft: "3px  ",
                          }}
                        >
                          <span className="ml-1">Back</span>
                        </Link>
                      </div>
                      <i className="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div className="mt-4 mb-3">
                      <h5 className="text-uppercase">{title}</h5>
                      <div className="price d-flex flex-row align-items-center">
                        <div className="ml-2">
                          <small className="price"> Price- ${price} </small>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="review">
                      {productReview.map((review) => {
                        return (
                          <div className="row">
                            <div className="col-md-6">
                              <div className="d-flex align-items-center">
                                <h5>{review.username}</h5>
                                <span className="text-muted">
                                  <RatingStar
                                    id={Math.random().toString()}
                                    rating={review.ratings}
                                  />
                                </span>
                              </div>
                              <div className="review-statement">
                                <span>
                                  <em>{review.reviewstatement}</em>
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div class="cart mt-4 align-items-center ">
                      <button class="btn  text-uppercase text-white">
                        Add to cart
                      </button>
                      &nbsp;&nbsp;&nbsp;<i class="fa fa-heart text-muted "></i>
                      &nbsp;&nbsp;&nbsp;
                      <i class="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

// note - here we use Store.js, storeitem.js then you get the data in ProductDetails
//we get all the data in productDetail.js from storeitem <link tag with id and state
