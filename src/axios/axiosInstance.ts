"use client"

import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create();
instance.defaults.timeout = 60000;

instance.defaults.baseURL = "https://buzz-hub-backend.onrender.com/api/v1/";
// instance.defaults.baseURL = "http://localhost:8080/api/v1/";
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = typeof window !== "undefined" && Cookies.get("accessKey");
 
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance };