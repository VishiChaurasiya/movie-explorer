import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const fetchMovies = async (query: string, page: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { s: query, page, apikey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies.");
  }
};
