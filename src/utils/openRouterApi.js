const fetchMovieRecommendations = async (query) => {
  const response = await fetch("http://localhost:5000/api/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return await response.text();
};


export default fetchMovieRecommendations;