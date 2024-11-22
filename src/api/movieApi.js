import {
  nowPlayInstance,
  popularInstance,
  topRatedInstance,
} from "./movieAxios";

const nowPlayingApi = {
  getNowPlaying: async () => {
    const resposne = await nowPlayInstance.get("/now_playing");
    return resposne.data.results;
  },
};
const popularApi = {
  getPopular: async () => {
    const resposne = await popularInstance.get("/popular");
    return resposne.data.results;
  },
};
const topRatedApi = {
  getTopRated: async () => {
    const resposne = await topRatedInstance.get("/top_rated");
    return resposne.data.results;
  },
};
const getMovieDetailApi = {
  getMovie: async () => {
    const resposne = await movieDetailInstance.get();
    console.log(resposne.data);
    return resposne.data.id;
  },
};
export { nowPlayingApi, popularApi, topRatedApi };
