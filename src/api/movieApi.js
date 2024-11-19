import {
  nowPlayInstance,
  popularInstance,
  topRatedInstance,
} from "./movieAxios";

const nowPlayingApi = {
  getNowPlaying: async () => {
    const resposne = await nowPlayInstance.get("");
    return resposne.data.results;
  },
};
const popularApi = {
  getPopular: async () => {
    const resposne = await popularInstance.get("");
    return resposne.data.results;
  },
};
const topRatedApi = {
  getTopRated: async () => {
    const resposne = await topRatedInstance.get("");
    return resposne.data.results;
  },
};

export { nowPlayingApi, popularApi, topRatedApi };
