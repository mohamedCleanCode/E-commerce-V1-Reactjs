import baseURL from "../Api/baseURL";

export const usePutDataWithImg = async (url) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  try {
    const res = await baseURL.put(url, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const usePutData = async (url) => {
  try {
    const res = await baseURL.put(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
