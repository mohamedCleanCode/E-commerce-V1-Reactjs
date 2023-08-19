import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://node-mongodb-api-1il0.onrender.com/",
});

export default baseURL;
