import axios from "axios";

const nowPlayInstance = axios.create({
  baseURL:
    import.meta.env.VITE_NOW_MOVIES +
    "/now_playing" +
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_LANG,
});
const popularInstance = axios.create({
  baseURL:
    import.meta.env.VITE_NOW_MOVIES +
    "/popular" +
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_LANG,
});
const topRatedInstance = axios.create({
  baseURL:
    import.meta.env.VITE_NOW_MOVIES +
    "/top_rated" +
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_LANG,
});

// const movieDetailInstance = axios.create({
//   baseURL: import.meta.env.VITE_NOW_MOVIES,
// });

export { nowPlayInstance, popularInstance, topRatedInstance };
