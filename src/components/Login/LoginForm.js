import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../Layout/LoadingIndicator";
import styles from "./LoginForm.module.css";
import { useNavigate, Link, NavLink } from "react-router-dom";

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
    setIsLoading(true);
    let url;
    if (isLogin) {
      //sign in
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClbSibFFRIu3SJhe8RhobCMyTdUtCMtU0";
    } else {
      //signup
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClbSibFFRIu3SJhe8RhobCMyTdUtCMtU0";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
          console.log(res);
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Error";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            // setErrorMessage(errorMessage)
            // console.log(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
        navigate("/homepage");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });

    setEnteredPassword("");
    setEnteredEmail("");
  };

  return (
    <div className={styles.formpage}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>{isLogin ? "Sign In" : " Sign Up "} </h1>
        {errorMessage && <div className={styles.errmsg}>{errorMessage}</div>}
        <input
          type="text"
          onFocus={() => {
            setErrorMessage(null);
          }}
          name="email"
          value={enteredEmail}
          onChange={(event) => {
            setEnteredEmail(event.target.value);
          }}
          id="email"
          placeholder=" Email or Phone number "
        />
        <br />
        <h6 id="emailh2"></h6>
        <input
          type="password"
          onFocus={() => {
            setErrorMessage(null);
          }}
          name="password"
          value={enteredPassword}
          onChange={(event) => {
            setEnteredPassword(event.target.value);
          }}
          id="password"
          placeholder=" Password"
        />
        <br />
        <h6 id="passh2"> </h6>
        {!isLoading && (
          <button type="submit" className={styles.submit}>
            {" "}
            {isLogin ? "Login" : "Create Account"}
          </button>
        )}
        <br />
        {isLoading && <LoadingSpinner />}
        <div id={styles.check}>
          <font color="white">Remember me</font>
          <input type="checkbox" name="checkbox" id="checkbox" />
        </div>
        <a id="helplink" href="">
          ?Need help
        </a>
        <div className={styles.flexdiv}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <a href="">Login with Facebook</a>
            <i className="bi bi-facebook"></i>
          </div>
          <div>
            {isLogin ? "" : "New href Netflix?"}{" "}
            <a
              className={styles.loginlink}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              {isLogin ? "Sign up" : "Sign in now"}
            </a>
          </div>
          <div>
            This page is protected by Google reCAPTCHA to <br /> ensure you're
            not a bot.
            <a href="">Learn more</a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
