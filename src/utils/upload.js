import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "careerpath");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dyr9rfhjd/image/upload",
      data
    );

    console.log(res.data.url);

    const url = res.data.url;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
