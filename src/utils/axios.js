import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://weary-gray-knickers.cyclic.app/api",
  withCredentials: true,
});

export default axiosInstance;
