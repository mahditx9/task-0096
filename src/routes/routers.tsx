import { AppLayout, AuthLayout, ErrorLayout } from "@/layouts";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage, SignUpPage } from "./Authentication";
import { Home } from "./Home";
import { CreateUser, Users, UsersList } from "./Users";
import { EditUser } from "./Users/EditUser";
export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/sign-up", element: <SignUpPage /> },
        ],
      },
      {
        path: "/users",
        element: <Users />,
        children: [
          { element: <UsersList />, index: true },
          { path: ":id", element: <EditUser /> },
          { path: "create", element: <CreateUser /> },
        ],
      },
    ],
  },
]);
