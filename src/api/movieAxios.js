import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_NOW_MOVIES,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_API_LANG,
  },
});


export { instance };
