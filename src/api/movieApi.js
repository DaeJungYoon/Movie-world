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

// const movieDetailApi = {
//   getMovieDetail: async () => {
//     const resposne = await movieDetailInstance.get("");
//     return resposne.data.results;
//   },
//   getMovieDetailId: async (movie_id) => {
//     console.log(movie_id);

//     const response = await api.get(
//       `/${movie_id}?api_key=f15d094fa013544c9bab38fbd5d29543&language=ko-kr`
//     );
//     console.log(response);
//     return response.data;
//   },
// };
export { nowPlayingApi, popularApi, topRatedApi };
