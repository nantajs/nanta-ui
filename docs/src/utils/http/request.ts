import axios from "axios";

const service = axios.create({
  timeout: 8000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

export default service;
