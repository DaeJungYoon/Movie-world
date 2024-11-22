import axios from "axios";

const nowPlayInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});

// baseURL: "https://api.themoviedb.org/3",
// params: {
//   api_key: "2211333",
//   language: "ko-KR",
// },
const popularInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});
const topRatedInstance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});
// const popularInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_NOW_MOVIES +
//     "/popular" +
//     import.meta.env.VITE_API_KEY +
//     import.meta.env.VITE_API_LANG,
// });
// const topRatedInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_NOW_MOVIES +
//     "/top_rated" +
//     import.meta.env.VITE_API_KEY +
//     import.meta.env.VITE_API_LANG,
// });
// const movieDetailInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_NOW_MOVIES +
//     `/${movie.id}` +
//     import.meta.env.VITE_API_KEY +
//     import.meta.env.VITE_API_LANG,
// });

// const movieDetailInstance = axios.create({
//   baseURL: import.meta.env.VITE_NOW_MOVIES,
// });

export { nowPlayInstance, popularInstance, topRatedInstance };
