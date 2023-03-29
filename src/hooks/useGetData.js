import baseURL from "../Api/baseURL";

const useGetData = async (url) => {
  try {
    const res = await baseURL.get(url);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
const useGetDataWithToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  try {
    const res = await baseURL.get(url, config);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { useGetData, useGetDataWithToken };
