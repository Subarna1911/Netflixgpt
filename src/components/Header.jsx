import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { House, Search, LogOut } from "lucide-react";

import logo from "../assets/logoPro.png";
import ToggleThemeBtn from "../components/ToggleThemeBtn";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { supportedLang } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  // Reusable classes
  const buttonClass =
    "text-white cursor-pointer transition duration-500 hover:text-[#fa3862]";
  const selectClass =
    "text-white px-4 py-2 min-w-[120px] bg-secondary text-sm font-semibold rounded-full cursor-pointer hover:opacity-75 transition-all duration-200 shadow-md hover:shadow-lg outline-none";
  const navLinkClass =
    "text-white font-semibold text-md cursor-pointer transition duration-500 hover:text-[#fa3862]";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => signOut(auth).catch(() => navigate("/error"));
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
   
  };
  const handleLangChange = (e) => dispatch(changeLanguage(e.target.value));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/70 shadow-md backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="max-w-screen-xl px-8 mx-auto flex items-center justify-between py-4">
       
        {user && (
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/browse" className={navLinkClass}>
              Home
            </Link>
            <Link to="/browse/my-list" className={navLinkClass}>
              My List
            </Link>
  
            <Link to="/browse/contact" className={navLinkClass}>
              Contact us
            </Link>
          </div>
        )}

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <img
            className="w-24 md:w-28 object-contain cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate("/browse")}
          />
        </div>

        {/* Right: User controls */}
        {user && (
          <div className="flex items-center gap-3 md:gap-5">
            {showGptSearch && (
              <select className={selectClass} onChange={handleLangChange}>
                {supportedLang.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

           <button onClick={handleGptSearchClick} className={buttonClass}> {showGptSearch ? <House size={20} /> : <Search size={20} />} </button>
           
            <ToggleThemeBtn />

            <button onClick={handleSignOut} className={buttonClass}>
              <LogOut size={20} />
            </button>

            <img
              className="w-8 h-8 md:w-8 md:h-8 rounded-full object-cover cursor-pointer"
              src={user?.photoURL || "/default-avatar.png"}
              alt="userProfile"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
