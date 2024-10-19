import { Button } from "@/components/UI";
import { Outlet, useLocation } from "react-router-dom";

export const Users = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full">
      <div className="flex-between">
        {pathname !== "/users" && (
          <Button type="info" path="/users">
            نمایش کاربران
          </Button>
        )}
        {pathname !== "/users/create" && (
          <Button type="info" path="/users/create">
            افزودن کاربر
          </Button>
        )}
      </div>
      <Outlet />
    </div>
  );
};
