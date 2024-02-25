import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

export const useGetJobs = (
  title = "",
  location = "",
  min = "",
  max = "",
  jobType = "",
  category = ""
) => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () =>
      await axiosInstance
        .get(
          `/jobs?search=${title}&location=${location}&min=${min}&max=${max}&jobtype=${jobType}&category=${category}`
        )
        .then((res) => res.data),
  });
};

export const searchJobs = (searchKey, locationKey) => {
  return useQuery({
    queryKey: [searchKey, locationKey],
    queryFn: async () =>
      await axiosInstance
        .get(`jobs/?search=${searchKey}&location=${locationKey}`)
        .then((res) => res.data),
  });
};

export const useGetJob = (jobId) => {
  return useQuery({
    queryKey: [jobId],
    queryFn: async () =>
      await axiosInstance.get(`/jobs/${jobId}`).then((res) => res.data),
  });
};

export const useGetMyJob = (userId) => {
  return useQuery({
    queryKey: [userId],
    queryFn: async () =>
      await axiosInstance.get(`/jobs/myjobs/${userId}`).then((res) => res.data),
  });
};

export const usePostJob = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (job) => await axiosInstance.post("/jobs", { ...job }),
    onSuccess,
  });
};

export const useDeleteJob = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (jobId) => await axiosInstance.delete(`/jobs/${jobId}`),
    onSuccess,
  });
};

export const useUpdateJob = (jobId, { onSuccess, onMutate }) => {
  return useMutation({
    mutationFn: async ({ job }) =>
      await axiosInstance.patch(`/jobs/${jobId}`, { ...job }),
    onSuccess,
    onMutate,
  });
};
