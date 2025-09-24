import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useGptSearch } from "../hooks/useGptSearch";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  //  hook is being used
  const { langKey, loading, searchTxt, handleGptSearch } = useGptSearch();

  return (
    <div className="max-w-screen-xl">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto mt-10"
      >
        <input
          ref={searchTxt}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-full sm:flex-grow p-2 rounded-lg border border-gray-300 outline-none text-white"
        />
        <button
          onClick={handleGptSearch}
          type="submit"
          disabled={loading}
          className={`w-full sm:w-auto px-6 py-2 rounded-lg font-medium transition cursor-pointer ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-secondary hover:opacity-75 text-white"
          }`}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>
      <GptMovieSuggestions loading = {loading} />
    </div>
  );
};

export default GptSearchBar;
