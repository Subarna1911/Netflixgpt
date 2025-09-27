import React, { useEffect, useState } from "react";
import logo from "../assets/logoPro.png";
import { Search } from "lucide-react";
import { House } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { LogOut } from "lucide-react";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { supportedLang } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import ToggleThemeBtn from "../components/ToggleThemeBtn"




const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/70 shadow-md backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >


      <div className="max-w-screen-xl px-8 mx-auto flex justify-between items-center">

         <div  className="text-white cursor-pointer transition duration-500 hover:text-[#fa3862] font-bold text-md">
          <Link to="/browse/my-list">My List</Link>
         </div>
       
        <img
          className="w-24 md:w-28 object-contain cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => navigate("/browse")}
        />


        {/* Right Section */}
        {user && (
          <div className="flex items-center gap-3 md:gap-8 justify-center">
          
            {showGptSearch && (
              <select
                className="text-white flex items-center justify-center gap-2 px-4 py-2 w-full min-w-[120px] bg-secondary text-sm font-semibold rounded-full cursor-pointer hover:opacity-75 transition-all duration-200 shadow-md hover:shadow-lg outline-none"
                name="lang"
                id="lang"
                onChange={handleLangChange}
              >
                {supportedLang.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

             <button
              onClick={handleGptSearchClick}
              className="text-white cursor-pointer transition duration-500 hover:text-[#fa3862]"
            >
              {showGptSearch ? (
                <House size={20} />
              ) : (
                <Search size={20} />
              )}
            </button>
           
           <ToggleThemeBtn/>
    
              <button className=" text-white cursor-pointer transition duration-500 hover:text-[#fa3862]"  onClick={handleSignOut}><LogOut size={20}/></button>

              {/* <button
                onClick={handleSignOut}
                className=" text-white flex items-center justify-center gap-2 px-4 py-2 w-full min-w-[120px] bg-secondary text-sm font-semibold rounded-full cursor-pointer hover:opacity-75 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign Out
                <ChevronRight className="w-4 h-4" />
              </button> */}
            <img
              className="w-8 h-8 md:w-8 md:h-8 rounded-full object-cover cursor-pointer"
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
