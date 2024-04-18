import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://localhost:7109",
});
export default apiClient;
