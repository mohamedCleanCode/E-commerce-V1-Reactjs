import baseURL from "../Api/baseURL";

const usePostData = async (url) => {
  try {
    const res = await baseURL.post(url, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default usePostData;
