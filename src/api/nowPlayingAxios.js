import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_NOW_MOVIES +
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_LANG,
});

export default instance;
