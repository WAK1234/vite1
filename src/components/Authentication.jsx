import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Authentication = (props) => {
    const location = useLocation()
    
    return (
      <>
        <div className={"flex flex-row"}>
          <div className="bg-[#79cce6] h-screen w-2/5 flex flex-row-reverse rounded-tl-3xl rounded-bl-3xl">
            <ul className={"my-auto"}>
            <Link to="/signin">
              <li
                className={`mb-1 font-bold ${
                  location.pathname === "/signin" ? "bg-white text-black" : ""
                }  p-2 mr-0 rounded-tl-xl rounded-bl-xl`}
              >
                Sign In
              </li>
              </Link>
              
                <Link to="/signup">
              <li
                className={
                  `bg-[#79cce6] ${location.pathname === '/signup' ? 'bg-white text-black' : '' } font-bold p-2 mr-0 rounded-tl-xl rounded-bl-xl`
                }
              >Sign Up
              </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-center object-center w-full bg-white  rounded-tr-3xl rounded-br-3xl">
            <div className="mx-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
}

export default Authentication;