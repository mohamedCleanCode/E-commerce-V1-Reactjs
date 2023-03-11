import baseURL from "../Api/baseURL";

const usePostData = async (url, formData) => {
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
export default usePostData;
