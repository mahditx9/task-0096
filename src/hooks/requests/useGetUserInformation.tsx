import { UserInterface } from "@/interface/user";
import { useFetchData } from "../useFetchData";

export const useGetUserInformation = ({
  fetchInitial,
  id,
}: {
  fetchInitial: boolean;
  id: number;
}) => {
  const getUserInformationRequest = useFetchData<
    Omit<UserInterface, "token">,
    unknown
  >(
    {
      method: "GET",
      url: `/api/dashboard/${id}`,
    },
    {
      queryKey: ["getUserInformation", { url: `/api/dashboard/${id}` }],
      enabled: fetchInitial,
    }
  );
  return { getUserInformationRequest };
};
