import {
  LoginError,
  LoginInterface,
  SuccessResponseUserLogin,
} from "@/interface/user";
import { useMutateData } from "../useFetchData";

export const useLoginUser = () => {
  const loginRequest = useMutateData<
    SuccessResponseUserLogin,
    LoginInterface,
    unknown,
    LoginError
  >({
    method: "POST",
    url: "/api/login/",
  });
  return { loginRequest };
};
