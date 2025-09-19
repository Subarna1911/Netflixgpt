import express from "express";
import cors from "cors";
import fetch from "node-fetch"; 
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;


app.post("/api/movies", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: `Recommend movies related to "${query}"` }],
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    console.log("OpenRouter response:", data); // log full response

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: "Invalid response from OpenRouter API" });
    }

    res.json(data.choices[0].message.content);

  } catch (error) {
    console.error("OpenRouter API error:", error);
    res.status(500).json({ error: error.message || "Failed to fetch recommendations" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
