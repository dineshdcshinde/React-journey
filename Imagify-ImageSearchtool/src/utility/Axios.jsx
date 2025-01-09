import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pexels.com",
  headers: {
    Authorization: import.meta.env.VITE_PEXEL_API_KEY,
  },

});

export default instance;

