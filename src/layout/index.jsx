import { UserContext } from "../contexts/UserContext";
import { NavLink, Outlet } from "react-router-dom";
// import { Footer } from "../components/Footer";
import { useContext } from "react";


export const AppLayout = () =>{
    const {user, handlerUserLogout} = useContext(UserContext);
    const handleLinkClassName = ({ isActive }) =>
    isActive ? 'text-green-500' : '';

    return (
        <>
        <nav>
          <p> site +logo name</p>

          <div className="nav-without-logout">
           <NavLink to= "/" id="home-nav" className={handleLinkClassName}>
            Home
           </NavLink>
           |
              <NavLink to="/search" id="inventory-nav" className={handleLinkClassName}>
                Search by
                </NavLink>
                |
                <NavLink to="/shop" id="shop-nav"className={handleLinkClassName}>
                    Shop
                </NavLink>
                |
                <NavLink to="/whoAreWe" id="Contact-nav" className={handleLinkClassName}>
                    Who are we
                </NavLink>
                </div>
                
                {user?.userId ? (
          <button
            className="Sign-Out-Button"
            onClick={handlerUserLogout}
          >
            Logout
          </button>
        ) : (
           < div>
          <NavLink to="/login" id="Sign-in-Button" className={handleLinkClassName}>
            Login
          </NavLink>

            <NavLink to="/register" id="Reg-Button" className={handleLinkClassName}>
            Register
            </NavLink>

            </div>
        )}
      </nav>
      <Outlet />

      {/* <Footer/> */}
        </>
    );
};
