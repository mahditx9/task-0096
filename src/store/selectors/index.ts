import { useAppSelector } from "@/hooks";

export const useUserSelector = () => {
  const user = useAppSelector((state) => state.userReducer);
  return { ...user };
};
