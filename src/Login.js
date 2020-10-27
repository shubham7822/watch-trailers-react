import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
  const history = useHistory("");

  const handellogin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <img
        className='login_logo'
        src='https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifCGpR9OmR3NwXs1M3EMoAJtliAugPNi8vg+'
      />
      <h2>Watch Trailers Here</h2>
      <button onClick={handellogin} className='login_button'>
        sign in with google
      </button>
    </div>
  );
}

export default Login;
