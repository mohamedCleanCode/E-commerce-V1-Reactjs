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
export default useGetData;
