import React from 'react'
import Header from './Header'
import { useState , useRef} from 'react';
import { checkValidData } from '../Utils/Validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Utils/Firebase";

const Login = () => {
  const[isSignInform, setIsSignInForm] = useState(true); 
  const[errorMessage , setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the data 

  const message = checkValidData(email.current.value , password.current.value)
  setErrorMessage(message)
  if(message) return;

  if(!isSignInform) {
     //signUp logic
    createUserWithEmailAndPassword(
      auth,
      email.current.value, 
      password.current.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage)
   
  });
  } else {
    //sign in logic
    signInWithEmailAndPassword(
       auth,
       email.current.value,
       password.current.value)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

}

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
   

  }
  return (
   <div>
    <Header />
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        alt='logo' />
    </div>
    <form  
     onSubmit = {(e) => e.preventDefault()}
    className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInform ? "sign In" : "Sign Up"}</h1>
     { !isSignInform && <input 
         type="text"
         placeholder="Full Name"
         className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
     }

        <input 
        ref={email}
         type="text"
         placeholder="Email Address"
         className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

        { !isSignInform &&<input 
         type="tel"
         placeholder="Mobile number"
         className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        }

        <input 
        ref={password}
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInform ? "sign In" :"Sign Up"}</button>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInform ? "New to Netflix? Sign up now" :"Already registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login