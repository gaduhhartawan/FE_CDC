import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

export const useGetUser = (userId) => {
  return useQuery({
    queryKey: [userId],
    queryFn: async () =>
      await axiosInstance.get(`/users/${userId}`).then((res) => res.data),
  });
};

export const useUpdateUserMutation = (userId, { onSuccess }) => {
  return useMutation({
    mutationFn: async ({ user }) =>
      await axiosInstance.patch(`/users/${userId}`, { ...user }),
    onSuccess,
  });
};
