import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import fetchMovieRecommendations from "../utils/openRouterApi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");

  const searchTxt = useRef(null);

  const handleGptSearchClick = async (e) => {
    e.preventDefault(); // prevent form submission
    const query = searchTxt.current.value.trim();
    if (!query) return;

    setLoading(true);
    setResults(""); // clear previous results

    try {
      const recommendations = await fetchMovieRecommendations(query);
      setResults(recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setResults("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Your existing form unchanged */}
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
          onClick={handleGptSearchClick}
          type="submit"
          disabled={loading}
          className={`w-full sm:w-auto px-6 py-2 rounded-lg font-medium transition ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 text-white"
          }`}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>

      {/* Display results below your form */}
      {results && (
        <div className="mt-6 p-4 max-w-md mx-auto bg-gray-800 text-white rounded-lg whitespace-pre-line">
          {results}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
