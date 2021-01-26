import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <div className="sign__logo">
        <img src="" alt="" />
      </div>
      <p className="heading">Welcome back</p>
      <h1 className="heading">Login to your account</h1>
      <form className="signin__form" action="">
        <label htmlFor="">Email</label>
        <input
         value={email}
         placeholder="Email"
         type="email" 
         onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" 
        type="password" 
        />

        <input type="checkbox" name="" id="" />
        <div className="checkbox">
          <p className="signin__remember">Remember me</p>
          <p className="forget">Forgot password?</p>
        </div>
        <button className="button" onClick={signIn}>
          Login Now
        </button>
      </form>
    </div>
  );
}

export default SignIn;
