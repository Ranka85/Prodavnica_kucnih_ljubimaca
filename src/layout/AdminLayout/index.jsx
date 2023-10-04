import { AdminNav } from "../../components/AdminNav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const AdminLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
};
