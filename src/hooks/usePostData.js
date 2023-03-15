import baseURL from "../Api/baseURL";

const usePostDataWithImg = async (url, formData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  try {
    const res = await baseURL.post(url, formData, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const usePostData = async (url, formData) => {
  try {
    const res = await baseURL.post(url, formData);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export { usePostDataWithImg, usePostData };
