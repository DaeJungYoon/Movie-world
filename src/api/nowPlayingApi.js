import api from "./nowPlayingAxios";

const nowPlayingApi = {
  getNowPlaying: async () => {
    const resposne = await api.get("");
    return resposne.data;
  },
  // getNowPlayingById: async (postId) => {
  //   const response = await api.get(`/${postId}`);
  //   return response.data;
  // },
  // createNowPlaying: async (data) => {
  //   const resposne = await api.post("", data);
  //   return resposne.data;
  // },
};

export default nowPlayingApi;
