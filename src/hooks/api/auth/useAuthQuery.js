import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async ({ email, password }) =>
      await axiosInstance.post("/auth/login", { email, password }),
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => await axiosInstance.post("/auth/logout"),
  });
};
