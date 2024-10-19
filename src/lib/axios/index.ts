import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
  timeout: 10000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFToken":
      "BiD9pWGYCHSs1coyub7W79maXMryA3H09uI2bW8sdqUrwKK7cCMLU3MTiDm5cxir",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    // toast.success("عملیات با موفقیت انجام شد");
    return response;
  },
  (error) => {
    console.error(error, "err in axios");
    if (error instanceof AxiosError && error?.response) {
      if (error?.status === 403) {
        toast.error(error?.response?.data?.detail ?? "مشکلی پیش امده");
      }
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(error.response || error.message);
    }
  }
);

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface APIRequestConfig<TBody = unknown, TQuery = unknown> {
  url: string;
  method: RequestMethod;
  data?: TBody;
  params?: TQuery;
}

export const apiRequest = async <TData, TBody, TQuery>({
  url,
  method,
  data,
  params,
}: APIRequestConfig<TBody, TQuery>): Promise<TData> => {
  const response = await axiosClient({
    url,
    method,
    data,
    params,
  });
  return response.data;
};
