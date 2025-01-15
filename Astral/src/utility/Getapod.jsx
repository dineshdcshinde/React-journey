import axios from "axios";

export const Getapod = axios.create({
  baseURL: `
https://api.nasa.gov/planetary`,
});
