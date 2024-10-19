import {
  CreateUserInformationError,
  CreateUserInformationInterface,
  UserInterface,
} from "@/interface/user";
import { useMutateData } from "../useFetchData";

export const useEditUser = ({ id }: { id: string }) => {
  const editUserRequest = useMutateData<
    Omit<UserInterface, "token">,
    CreateUserInformationInterface,
    unknown,
    CreateUserInformationError
  >({
    method: "POST",
    url: `/api/dashboard/${id}`,
  });
  return { editUserRequest };
};
