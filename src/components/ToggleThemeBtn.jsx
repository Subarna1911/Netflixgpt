import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ContextApi/ThemeContext";

const ToggleThemeBtn = () => {

  const{ theme, toggleTheme }= useTheme();

  return (
    <button className=" text-white cursor-pointer transition duration-500 hover:text-[#fa3862]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Sun size={18} /> : <Moon size={20}/>}
    </button>
  );
};

export default ToggleThemeBtn;
