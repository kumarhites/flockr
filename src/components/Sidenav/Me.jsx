import React from "react";
import Avatar from "../Avatar";
import { NavLink } from "react-router-dom";

const Me = ({ currentUser }) => {
  return (
    <NavLink to={`/profile/${currentUser?.username}`}>
      <div className="hover-transition flex cursor-pointer items-center justify-between rounded-full px-3 py-3 hover:bg-neutral-700 desktop:w-[17rem] desktop:px-4">
        <div className="flex items-center gap-4">
          <Avatar src={currentUser?.avatar} alt="Profile" profile={false} />
          <div className="hidden desktop:block">
            <h1 className="text-lg font-bold">
              {currentUser?.firstName} {currentUser?.lastName}
            </h1>
            <h2 className="-mt-1 text-teal-500">@{currentUser?.username}</h2>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Me;
