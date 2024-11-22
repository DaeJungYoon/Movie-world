import {
  instance,

} from "./movieAxios";

const nowPlayingApi = {
  getNowPlaying: async () => {
    const resposne = await instance.get("/now_playing");
    return resposne.data.results;
  },
};
const popularApi = {
  getPopular: async () => {
    const resposne = await instance.get("/popular");
    return resposne.data.results;
  },
};
const topRatedApi = {
  getTopRated: async () => {
    const resposne = await instance.get("/top_rated");
    return resposne.data.results;
  },
};

export { nowPlayingApi, popularApi, topRatedApi };
