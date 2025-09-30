import React from "react";
import Header from "../components/Header"
import bgImg from '../assets/bgImg.jpg'
import netflixgpt from '../assets/netflixgpt.png'
import greencam from '../assets/greencam.png'
import mvPhoto from '../assets/mvphoto.png'
import pop from '../assets/pop.png'
import moviecam from '../assets/movicam.png'
import logo11 from '../assets/logo11.png'



import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userProfile } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // this is for sign up.
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: userProfile,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode    = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }

    // this is for sign in
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User not found");
        });
    }
  };

  return (
    <div className="relative w-full h-screen">
  {/* Background */}
  <img
    className="object-cover w-full h-full absolute inset-0"
    src={bgImg}
    alt="banner"
  />

  <div className="absolute inset-0 bg-black/20"></div>
    <div className="absolute top-0 left-0 w-full z-20">
      <Header />
    </div>

  {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-sm p-8 bg-black/70 rounded-lg flex flex-col items-center gap-4"
        >
          <h2 className="text-2xl font-bogart font-bold mb-4 text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {/* Fullname for SignUp */}
          {!isSignIn && (
            <input
              ref={userName}
              type="text"
              placeholder="Full Name"
              autoComplete="username"
              className="w-full p-3 rounded-lg border border-gray-700 bg-slate-800 text-white outline-none"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className="w-full p-3 rounded-lg border border-gray-700 bg-slate-800 text-white outline-none"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="w-full p-3 rounded-lg border border-gray-700 bg-slate-800 text-white outline-none"
          />

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-sm text-center font-bogart">
              {errorMessage}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleBtnClick}
            className="bg-secondary text-white px-6 py-2 cursor-pointer rounded-lg font-bold hover:opacity-75 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle form */}
          <p
            onClick={toggleSignInForm}
            className="text-sm text-gray-300 cursor-pointer mt-2 hover:underline"
          >
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign in now"}
          </p>
        </form>
      
        <div className="max-w-screen px-8">
          <div className="left-20 absolute">
              <img className="sticker w-20 h-20" src={greencam} alt="sticker" />
          </div>

          <div className="right-10 absolute">
              <img className="sticker w-20 h-20" src={pop} alt="sticker" />
          </div>

          <div className="bottom-5 absolute">
              <img className="sticker w-20 h-20" src={moviecam} alt="sticker" />
          </div>

          <div className="top-10 absolute">
              <img className="sticker w-20 h-20" src={mvPhoto} alt="sticker" />
          </div>

          <div className="top-20  left-40 absolute">
              <img className="sticker w-20 h-20" src={netflixgpt} alt="sticker" />
          </div>

           <div className="top-20  right-30 absolute">
              <img className="sticker w-20 h-20" src={logo11} alt="sticker" />
          </div>
        </div>
      </div>
 </div>

  );
};

export default Login;
