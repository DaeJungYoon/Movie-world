import { useParams } from "react-router-dom";
import { movieListsInstance, moviesInstance } from "./movieAxios";

const nowPlayingApi = {
  getNowPlaying: async () => {
    const resposne = await movieListsInstance.get("/now_playing");
    return resposne.data.results;
  },
};
const popularApi = {
  getPopular: async () => {
    const resposne = await movieListsInstance.get("/popular");
    return resposne.data.results;
  },
};
const topRatedApi = {
  getTopRated: async () => {
    const resposne = await movieListsInstance.get("/top_rated");
    return resposne.data.results;
  },
};

const detailApi = {
  getDetail: async (movieDetailId) => {
    const resposne = await moviesInstance.get(`/${movieDetailId}`);
    return resposne.data;
  },
};

export { nowPlayingApi, popularApi, topRatedApi, detailApi };
