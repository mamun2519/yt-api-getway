import axios, { AxiosInstance } from "axios";
import config from "../config";

const HttpService = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return error;
    }
  );
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

const AuthService = HttpService(config.authServiceURL as string);
const MainService = HttpService(config.mainServiceURL as string);
export { HttpService, AuthService, MainService };
