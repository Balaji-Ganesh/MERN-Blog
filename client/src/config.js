import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://blog-in-mern.herokuapp.com/",
});