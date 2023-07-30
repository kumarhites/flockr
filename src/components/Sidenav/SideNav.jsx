import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt, BiBookmark, BiHash } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Path from "./Path";
import Me from "./Me";
import Logo from "./Logo";
import { useAuth } from "../../contexts/AuthContext";

const SideNav = () => {
  const { currentUser, logoutHandler } = useAuth();
  return (
    <nav className="flex min-h-screen flex-col items-center justify-between gap-5 px-2 py-4 mobile:flex">
      <div className="flex w-full flex-col items-stretch gap-5">
        <div className="">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="flex flex-col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "py-3 font-bold" : "inactive py-3"
            }
          >
            <Path Icon={BiHomeAlt} size={24} name={"Home"} />
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "py-3 font-bold" : "inactive py-3"
            }
          >
            <Path Icon={BiHash} size={24} name={"Explore"} />
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? "py-3 font-bold" : "inactive py-3"
            }
          >
            <Path Icon={BiBookmark} size={24} name={"Bookmarks"} />
          </NavLink>
          <button onClick={logoutHandler}>
            <Path Icon={RiLogoutCircleRLine} size={24} name={"Logout"} />
          </button>
        </div>
      </div>
      <div>
        <Me currentUser={currentUser} />
      </div>
    </nav>
  );
};

export default SideNav;
