import React from "react";
import lang from '../utils/languageConstant'

const GptSearchBar = () => {
  return (
    <div>
   <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto mt-10">

  <input
    type="text"
    placeholder={lang.nepali.gptSearchPlaceholder}
    className="w-100 sm:flex-grow p-2 rounded-lg border border-gray-300 outline-none text-white"
  />
  <button
    type="submit"
    className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition"
  >
    {lang.nepali.search}
  </button>
</form>
</div>

  );
};

export default GptSearchBar;
