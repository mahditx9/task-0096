import { useAppDispatch, useLogoutUser } from "@/hooks";
import { logoutUser } from "@/store";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "./Modal";

type LogoutModalTypes = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export function LogoutModal({
  isModalOpen,
  setIsModalOpen,
  className,
}: LogoutModalTypes) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { logoutRequest } = useLogoutUser();
  const handleLogout = () => {
    logoutRequest.mutate(null, {
      onError(err) {
        console.log(err, "logout error");
        toast.error(err.detail);
      },
      onSuccess() {
        toast.success("با موفقیت خارج شدید");
        dispatch(logoutUser(null));
        navigate("/login");
      },
    });
  };
  return (
    <Modal
      showModal={isModalOpen}
      setShowModal={setIsModalOpen}
      className={className}
      childrenClass="w-[40%]"
    >
      <div className="flex flex-col gap-7 items-center w-full ">
        <h3 className="h3-semibold text-dark max-tablet:text-base">
          آیا میخواهید از برنامه خارج شوید؟
        </h3>
        <div className="flex items-center flex-col w-full  gap-5">
          <Button
            type="success"
            className="w-full py-2.5 text-center"
            onClick={handleLogout}
          >
            بله
          </Button>
          <Button
            type="danger"
            className="w-full py-2.5 text-center"
            onClick={() => setIsModalOpen(false)}
          >
            خیر
          </Button>
        </div>
      </div>
    </Modal>
  );
}
