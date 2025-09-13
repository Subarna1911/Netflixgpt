import React, { useEffect, useState } from "react";
import logo from "../assets/logo11.png";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/70 shadow-md backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-screen-xl px-8 mx-auto flex justify-between items-center  py-2">
        {/* Logo */}
        <img
          className="w-20 md:w-28 object-contain cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => navigate("/browse")}
        />

        {/* Right Section */}
        {user && (
          <div className="flex items-center gap-3 md:gap-5">
         
            <select
              className="border border-gray-400 bg-black/60 text-white text-sm md:text-base py-1 md:py-2 px-2 md:px-4 rounded-lg cursor-pointer outline-none"
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
              className="py-1 px-3 md:py-2 md:px-4 bg-seconday text-white text-sm md:text-base rounded-lg cursor-pointer hover:bg-secondary transition"
            >
              Sign Out
            </button>

            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover cursor-pointer"
              src={user?.photoURL || "/default-avatar.png"}
              alt="userProfile"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
