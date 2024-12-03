import axios from "axios";

const movieListsInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});
const moviesInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

const movieSearchInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",

  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});
export { movieListsInstance, moviesInstance, movieSearchInstance };
