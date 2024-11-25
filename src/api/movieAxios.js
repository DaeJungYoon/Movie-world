import axios from "axios";

const movieListsInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});
const moviesInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES + `/${movieId}`,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});
export { movieListsInstance, moviesInstance };
