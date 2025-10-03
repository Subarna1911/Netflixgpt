import React from "react";
import { Play, Info } from "lucide-react";
import { Link } from 'react-router-dom';

const VideoTitle = ({ title, overview }) => {
  return (
  
      <div className="py-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="w-full md:w-2/3 lg:w-1/2 text-base md:text-lg leading-relaxed md:leading-loose py-6 md:py-8">
          {overview}
        </p>
        <div className="flex gap-4 items-center">
          <button className="bg-white text-black hover:text-white font-bold rounded-lg w-35 cursor-pointer p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-400">
            <span className="flex items-center gap-2 justify-center">
             
              <Play />
              Play
            </span>
          </button>
          <button className="bg-gray-400 rounded-lg font-bold text-white p-2 cursor-pointer  w-35 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500">
        <Link to="/browse/my-list">
  <span className="flex gap-3 items-center">
    More info <Info />
  </span>
</Link>
          </button>
        </div>
      </div>

  );
};

export default VideoTitle;
