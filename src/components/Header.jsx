import React, { useEffect } from "react";
import logo from "../assets/netflixLogo.png";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  }

  return (
    <div className="shadow-xl">
      <div className="container flex justify-between items-center">
      <img
        className="w-100 max-w-40 object-cover cursor-pointer"
        src={logo}
        alt="logo"
      />

      {user && (
        <div className="flex flex-wrap gap-4">
          <select
            className="border text-black border-gray-400 w-30 py-2 rounded-lg px-4 cursor-pointer outline-none"
            name="lang"
            id="lang"
          >
            <option className="text-black" value="English">
              English
            </option>
            <option className="text-black" value="Nepali">
              Nepali
            </option>
            <option className="text-black" value="Hindi">
              Hindi
            </option>
          </select>

          <button
            onClick={handleSignOut}
            className="inline-block py-2 px-3 w-30 bg-red-600 text-white rounded-lg cursor-pointer"
          >
            Sign Out
          </button>

          <img
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src={user?.photoURL || "/default-avatar.png"}
            alt="userProfile"
          />
        </div>
      )}
      </div>
    </div>
  );
};

export default Header;
