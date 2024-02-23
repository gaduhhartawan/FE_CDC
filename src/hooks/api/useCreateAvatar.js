import axios from "axios";

export const useCreateAvatar = async (name) => {
  const res = await axios
    .get(`https://ui-avatars.com/api/?name=${name}`)
    .then((res) => res.data);
  return res;
};
