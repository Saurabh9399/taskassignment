import React from 'react'
import { auth } from './firebase';
import "./SignUp.css"

function SignUp() {

  const register = () => {
    if(!email){
      return alert("please enter email");
      
    }
    auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName:nam
        
      })
    })
  }
    return (
      <div className="signup">
        <p className="heading">Hello! Nice to see with us.</p>
        <h1 className="heading">Welcome to our academy!</h1>

        <form className="signup__form" action="">
          <label htmlFor="">Give name</label>
          <input placeholder="Name" type="text" />
          <label htmlFor="">Family name</label>
          <input placeholder="Family name" type="text" />

          <label htmlFor="">*Preferred Content Language</label>
          <input placeholder="Select language" type="text" />
          <label htmlFor="">*Email</label>
          <input placeholder="email" type="text" />
          <label htmlFor="">Password</label>
          <input placeholder="Name" type="password" />
          <p className="forget">Forgot password?</p>
          <button className="button">Sign Up</button>
        </form>
      </div>
    );
}

export default SignUp
