import { useUserSelector } from "@/store/selectors";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const user = useUserSelector();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("use auth useEffect fired");

    if (!user?.token?.access && !user?.token?.refresh) {
      toast.error("ابتدا وارد شوید");
      navigate("/login");
    }
  }, []);
};
