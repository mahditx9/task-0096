import { useFetchData } from "@/hooks";
import { UserInterface } from "@/interface/user";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const { data, isError, error, isLoading } = useFetchData<
    Array<UserInterface>
  >({ method: "GET", url: "/api/dashboard/" });
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="w-full flex flex-col gap-2.5">
      {data?.length ? (
        data.map((i) => (
          <Link to={`/users/${i.id}`} key={i.id}>
            {i.full_name}
          </Link>
        ))
      ) : (
        <div className="text-red-500 text-3xl">لیست کاربران یافت نشد</div>
      )}
    </div>
  );
};
