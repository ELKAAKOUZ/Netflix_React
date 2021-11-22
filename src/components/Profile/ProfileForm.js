import { Fragment, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import stylingForm from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = passwordInputRef.current.value;
    console.log(enteredNewPassword);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyClbSibFFRIu3SJhe8RhobCMyTdUtCMtU0",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assumption every thing true
      navigate("/homepage");
    });
  };
  return (
    <Fragment>
      <form onSubmit={submitFormHandler} className={stylingForm.form}>
        <input
          id="password_input"
          ref={passwordInputRef}
          type="password"
          required
          minLength="6"
          placeholder="Enter New Password"
        />
        <input type="submit" value="Change Password" />
      </form>
    </Fragment>
  );
};
export default ProfileForm;
