import React from "react";
import logo from "../assets/netflixLogo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

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
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
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
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <>
      <div className="flex justify-between items-center mx-5 p-5 container">
        <img
          className="w-50 object-cover cursor-pointer"
          src={logo}
          alt="logo"
        />
        <div className="flex flex-wrap gap-4">
          <select
            className="border text-white border-gray-400 w-30 py-2 rounded-lg px-4 cursor-pointer outline-none"
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

          {user && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
