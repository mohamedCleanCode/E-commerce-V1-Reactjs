import baseURL from "../Api/baseURL";

const useGetData = async (url) => {
  const res = await baseURL.get(url);
  const data = await res.data;
  return data;
};
const useGetDataWithToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.get(url, config);
  const data = await res.data;
  return data;
};
export { useGetData, useGetDataWithToken };
