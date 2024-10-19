import { useGetUserInformation } from "@/hooks";
import { useUserSelector } from "@/store/selectors";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const UserInformationForm = ({ mode }: { mode: "edit" | "preview" }) => {
  const { id } = useUserSelector();

  const { getUserInformationRequest } = useGetUserInformation({
    fetchInitial: false,
    id: id!,
  });
  const getUserInfo = async () => {
    const { data, isError, error, isSuccess } =
      await getUserInformationRequest.refetch({ throwOnError: true });
    if (isSuccess) {
      console.log(data, "use info data");
    } else if (isError) {
      if (error) toast.error();
    }
  };
  useEffect(() => {}, []);

  return <div></div>;
};
