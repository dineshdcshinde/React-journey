import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method

export const getPost = () => {
  return instance.get("/posts");
};


