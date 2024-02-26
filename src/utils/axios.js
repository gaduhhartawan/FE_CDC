import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://weary-gray-knickers.cyclic.app/api",
  withCredentials: true,
});

export default axiosInstance;
