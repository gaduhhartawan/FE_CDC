import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

export const useLoginMutation = ({ onSuccess, onMutate, onError }) => {
  return useMutation({
    mutationFn: async ({ email, password }) =>
      await axiosInstance.post("/auth/login", { email, password }),
    onSuccess,
    onMutate,
    onError,
  });
};

export const useRegisterMutation = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (user) =>
      await axiosInstance.post("/auth/signup", { ...user }),
    onSuccess,
  });
};

export const useLogoutMutation = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async () => await axiosInstance.post("/auth/logout"),
    onSuccess,
  });
};
