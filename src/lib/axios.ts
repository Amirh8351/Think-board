import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://thinkboard.codewithmmd.ir",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
