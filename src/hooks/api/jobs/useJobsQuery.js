import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

export const useGetJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () =>
      await axiosInstance.get("/jobs").then((res) => res.data),
  });
};

export const useGetJob = (jobId) => {
  return useQuery({
    queryKey: [jobId],
    queryFn: async () =>
      await axiosInstance.get(`/jobs/${jobId}`).then((res) => res.data),
  });
};
