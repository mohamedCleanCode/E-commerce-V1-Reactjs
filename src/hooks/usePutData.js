import baseURL from "../Api/baseURL";

export const usePutDataWithImg = async (url, formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.put(url, formData, config);
  return res;
};
export const usePutData = async (url, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.put(url, formData, config);
  return res;
};
