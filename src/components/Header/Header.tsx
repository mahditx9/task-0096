import { NavLink } from "react-router-dom";
import { Button, LogoutModal } from "../UI";
import { useUserSelector } from "@/store/selectors";
import { useState } from "react";

export const Header = () => {
  const { token } = useUserSelector();
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  return (
    <header className="w-full  flex-between px-4 py-2.5 bg-blue-dark text-white sticky top-0">
      <nav className="flex items-center gap-2.5 ">
        <>
          {token?.access &&
            token?.refresh &&
            menuLinks.map((mLink, i) => (
              <NavLink
                className="body-medium !text-white"
                key={i + 1}
                to={mLink.href ?? "#"}
              >
                {mLink.title}
              </NavLink>
            ))}
        </>
      </nav>
      <div className="flex items-center gap-2.5">
        {!token?.access && !token?.refresh && (
          <Button path="/login" className="p-2.5" type="orangeGold">
            ورود / ثبت نام
          </Button>
        )}
      </div>
      <LogoutModal
        isModalOpen={showLogoutModal}
        setIsModalOpen={setShowLogoutModal}
      />
    </header>
  );
};

const menuLinks = [
  { title: "خانه", href: "/" },
  { title: "کاربران", href: "/users" },
];
