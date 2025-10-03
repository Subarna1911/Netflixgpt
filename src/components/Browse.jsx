import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Browse = () => {
  return (

     <div className="min-h-screen bg-white dark:bg-zinc-900  text-black dark:text-white transition-colors duration-300">
        <Header />
        <Outlet/>
        <Footer/>
      </div>

  );
};

export default Browse;
