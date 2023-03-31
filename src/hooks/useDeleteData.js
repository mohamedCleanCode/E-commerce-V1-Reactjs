import baseURL from "../Api/baseURL";

const useDeleteData = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.delete(url, config);
  return res;
};
export default useDeleteData;
