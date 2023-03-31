import baseURL from "../Api/baseURL";

export const usePutDataWithImg = async (url, formData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  try {
    const res = await baseURL.put(url, formData, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const usePutData = async (url, formData) => {
  const res = await baseURL.put(url, formData);
  return res;
};
