import { UserContext } from "../contexts/UserContext";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { NavBar } from "../components/NavBar";


export const AppLayout = () =>{
    const {user, handlerUserLogout} = useContext(UserContext);
  


    return (
        <>
        <NavBar/>


      <Outlet />

      <Footer/>
        </>
    );
};
