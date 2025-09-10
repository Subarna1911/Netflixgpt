import React from 'react'
import Header from '../components/Header'
import banner from '../assets/banner.jpg'
import { useState, useEffect } from 'react';

const Login = () => {
  
  const[email, setEmail] = useState([]);
  const[password, setPassword] = useState([]);
   const[UserName, setUserName] = useState([]);
  const[isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = ()=>{
    setIsSignIn(!isSignIn);

  }
 
   const handleEmail= (e)=>{

   setEmail(e.target.value);

   }


   const handlePassword= (e)=>{

    setPassword(e.target.value);

   }

   
   const handleUserName= (e)=>{

    setUserName(e.target.value);

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
           
          <form className='flex w-90 p-8 rounded-lg  flex-col items-center justify-center gap-3 bg-black opacity-75'>
            <h2 className='text-2xl text-white font-bogart font-bold mb-4'>{isSignIn?"Sign In" : "Sign Up"}</h2>
              {!isSignIn &&
             <input className='w-70 outline-none border p-2 rounded-lg border-gray-200 bg-slate-800' type="text" onChange={handleUserName} value={UserName} placeholder='Fullname' />
              }
            <input className='w-70 outline-none border p-2 rounded-lg border-gray-200 bg-slate-800' type="text" onChange={handleEmail} value={email} placeholder='email address' />
            <input className='w-70 outline-none border p-2 rounded-lg border-gray-200 bg-slate-800' type="password" onChange={handlePassword} value={password} placeholder='password' />
          
            <button className='text-white bg-red-600 px-3 py-2 w-25 rounded-lg text-md font-sans font-bold cursor-pointer my-3'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p onClick = {toggleSignInForm} className='text-sm font-bogart cursor-pointer'>{isSignIn?"New to Netflix? Sign up now." :"Already registered? Sign in now"}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login
