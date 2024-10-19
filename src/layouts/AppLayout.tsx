import { Header } from "@/components/Header";
import { useAuth } from "@/hooks";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  useAuth();
  return (
    <>
      <Header />
      <main className="container mx-auto p-2.5 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};
