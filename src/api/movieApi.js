import { useParams } from "react-router-dom";
import {
  movieListsInstance,
  movieSearchInstance,
  moviesInstance,
} from "./movieAxios";

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
  getDetailReview: async (movieDetailId) => {
    const resposne = await moviesInstance.get(`/${movieDetailId}/reviews`);
    return resposne.data.results;
  },
};

const searchApi = {
  getSearch: async (inputKeyword) => {
    const resposne = await movieSearchInstance.get("", {
      params: {
        query: inputKeyword,
      },
    });

    return resposne.data.results;
  },
};
export { nowPlayingApi, popularApi, topRatedApi, detailApi, searchApi };
