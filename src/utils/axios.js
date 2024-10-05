import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://be-cdc.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;
