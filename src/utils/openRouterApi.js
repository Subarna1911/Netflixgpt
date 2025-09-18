const fetchMovieRecommendations = async (query) => {
  const response = await fetch("http://localhost:5000/api/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return await response.json(); 
};



export default fetchMovieRecommendations;