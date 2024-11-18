import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie" +
    "/now_playing" +
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_LANG,
});

export default instance;
