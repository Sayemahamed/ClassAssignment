import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://localhost:7109",
  headers: {
    "Content-type": "application/json",
  },
});
export default apiClient;
