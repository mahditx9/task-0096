import { LogoutErrorInterface } from "@/interface/user";
import { useMutateData } from "../useFetchData";

export const useLogoutUser = () => {
  const logoutRequest = useMutateData<
    unknown,
    unknown,
    unknown,
    LogoutErrorInterface
  >({
    method: "POST",
    url: "/api/logout/",
  });
  return { logoutRequest };
};
