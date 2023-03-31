import baseURL from "../Api/baseURL";

const usePostDataWithImg = async (url, formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.post(url, formData, config);
  return res;
};

const usePostData = async (url, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.post(url, formData, config);
  return res;
};
export { usePostDataWithImg, usePostData };
