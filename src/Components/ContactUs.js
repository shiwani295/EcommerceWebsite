import React, { useRef } from "react";
import img from "../Asset/Image/contact-form.png";

const ContactUs = (props) => {
  const refname = useRef(null);
  const refemailid = useRef(null);
  const refphnnumber = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("kjfdhsdjfhsj");
    if (
      refname.current.value.length === 0 &&
      refemailid.current.value.length === 0 &&
      refphnnumber.current.value.length === 0
    ) {
      alert("Please  fill all the details first ");
    } else {
      const data = {
        name: refname.current.value,
        emailid: refemailid.current.value,
        phnnumber: refphnnumber.current.value,
      };
      props.OnSubmitContactForm(data);
    }
    refname.current.value = "";
    refemailid.current.value = "";
    refphnnumber.current.value = "";
  };
  return (
    <section>
      <div
        className="row "
        style={{ marginTop: "56px", marginBottom: "-225px" }}
      >
        <h1 className="text-center">Contact Us</h1>

        <div className="col-md-6 mt-4">
          <img
            className="    bg-white rounded "
            src={img}
            style={{ marginLeft: "30px", height: "50%" }}
          ></img>
        </div>
        <div className="col-md-6 mt-5">
          <div className="contact-us">
            <form
              onSubmit={handleSubmit}
              className=" mx-auto col-10 col-md-8 col-lg-6"
            >
              <div className="form-group">
                <label for="name" className="h6">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  ref={refname}
                />
              </div>
              <div className="form-group">
                <label for="InputEmail1" className="h6">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  ref={refemailid}
                  // placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="phnNumber" className="h6">
                  Phone Number
                </label>
                <input
                  type="password"
                  className="form-control mb-3"
                  id="phnNumber"
                  ref={refphnnumber}
                  //placeholder="PhoneNumber"
                />
              </div>
              <button
                className="btn text-white "
                style={{
                  backgroundColor: "#478E75",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
