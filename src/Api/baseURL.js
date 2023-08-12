import axios from "axios";

const baseURL = axios.create({ baseURL: "http://localhost:8000" });

export default baseURL;
