import React from 'react'
import Header from '../components/Header'
import banner from '../assets/banner.jpg'
import { useState, useEffect, useRef } from 'react';
import { checkValidateData } from '../utils/validate';


const Login = () => {
  
  const[isSignIn, setIsSignIn] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);
 
  const email    = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = ()=>{
    setIsSignIn(!isSignIn);

  }

  const handleBtnClick =()=>{
  const message = (checkValidateData(email.current.value, password.current.value));
 setErrorMessage(message);
  }
 
  return (
    <div className="relative w-full h-[100vh]">
      
      <img
        className="object-cover bg-center w-full h-full absolute inset-0"
        src={banner}
        alt="banner"
      />
 
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 ">
        <Header />

        <div className="flex flex-col items-center justify-center  text-white text-center px-4">
           
          <form onSubmit={(e)=>e.preventDefault()} className='flex w-90 p-8 rounded-lg  flex-col items-center justify-center gap-3 bg-black opacity-75'>
            <h2 className='text-2xl text-white font-bogart font-bold mb-4'>{isSignIn?"Sign In" : "Sign Up"}</h2>
              {!isSignIn &&
             <input   className='w-70 outline-none border p-2 rounded-lg border-gray-200 bg-slate-800' type="text"  placeholder='Fullname' autoComplete='username' />
              }
            <input ref = {email} className='w-70 outline-none border p-2 rounded-lg border-gray-200 bg-slate-800' type="text"  placeholder='email address' autoComplete='email-address' />

            <input ref = {password} className='w-70 outline-none border p-2 rounded-lg border-gray-200 bg-slate-800' type="password"  placeholder='password' autoComplete='current-password' />
           
           <p className='text-red-600 text-md text-center font-bogart font-bold'>{errorMessage}</p>
            <button onClick = {handleBtnClick} className='text-white bg-red-600 px-3 py-2 w-25 rounded-lg text-md font-sans font-bold cursor-pointer my-3'>{isSignIn ? "Sign In" : "Sign Up"}</button>

            <p onClick = {toggleSignInForm} className='text-sm font-bogart cursor-pointer font-bold'>{isSignIn?"New to Netflix? Sign up now." :"Already registered? Sign in now"}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login
