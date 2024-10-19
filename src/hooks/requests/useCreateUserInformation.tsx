import {
  CreateUserInformationError,
  CreateUserInformationInterface,
  UserInterface,
} from "@/interface/user";
import { useMutateData } from "../useFetchData";

export const useCreateUserInformation = () => {
  const createUserInformationRequest = useMutateData<
    Omit<UserInterface, "token">,
    CreateUserInformationInterface,
    unknown,
    CreateUserInformationError
  >({
    method: "POST",
    url: "/api/dashboard/",
  });
  return { createUserInformationRequest };
};
