import baseURL from "../Api/baseURL";

const useDeleteData = async (url) => {
  try {
    const res = await baseURL.delete(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default useDeleteData;
