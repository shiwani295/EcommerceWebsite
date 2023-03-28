import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../StoreContext/Auth-context";
//import "..LoginAuth/LoginAuthForm.css";
const LoginAuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const authCxt = useContext(AuthContext);
  console.log(authCxt);

  const InputEmailRef = useRef("");
  const InputPasswordRef = useRef("");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const Enteredemail = InputEmailRef.current.value;
    const Enteredpassword = InputPasswordRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8NBmruAkzigSMs1HAVcEqIAt6pEzCNM8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8NBmruAkzigSMs1HAVcEqIAt6pEzCNM8";
    }
    fetch(url, {
      method: "Post",
      body: JSON.stringify({
        email: Enteredemail,
        password: Enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let ErrorMessage;
            if (data.error) {
              ErrorMessage = data.error.message;
              setmessage(ErrorMessage);
            }
          });
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.idToken);
        authCxt.login(data.idToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div className="container mt-5">
      <div
        className=" row login "
        style={{
          width: " 50%",
          marginLeft: "349px",
          backgroundColor: "#72ab97",
          borderRadius: "8px",
        }}
      >
        <h1 className="text-center text-white mt-2">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        {message && (
          <span
            className=" form-label text-white mt-2"
            style={{
              backgroundColor: "red",
              paddingTop: "4px",
              paddingBottom: "4px",
              marginLeft: "15px",
              width: "590px",
              borderRadius: " 5px",
            }}
          >
            {message}
          </span>
        )}
        <div className=" login-form mb-4">
          <form className="form" onSubmit={SubmitHandler}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label text-white">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                ref={InputEmailRef}
              />
            </div>
            <div class="mb-3">
              <label
                for="exampleInputPassword1"
                className="form-label text-white"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={InputPasswordRef}
              />
            </div>
            <div
              className="actionButton"
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
              }}
            >
              {isLoading && <p>Sending Request</p>}

              {!isLoading && (
                <button
                  type="submit"
                  className="btn text-white"
                  style={{ backgroundColor: "#337860", fontWeight: "bold" }}
                >
                  {isLogin ? "Login" : "Create Account"}
                </button>
              )}
              <button
                type="button"
                className="btn"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAuthForm;
