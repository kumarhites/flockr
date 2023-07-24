import React from "react";
import Avatar from "../../Avatar";
import { NavLink } from "react-router-dom";
// import FollowBtn from "../../FollowBtn";


const User = ({ user }) => {
  return (
    <>
      <div className="flex items-center justify-between desktop:w-[20rem] desktop:px-4 px-3 py-3 rounded-full hover-transition cursor-pointer">
        <NavLink to={`/profile/${user.username}`}>
          <div className="flex flex-wrap items-center gap-3">
            <Avatar src={user.image} alt={user.fullname} />
            <div className="tablet:block hidden">
              <h1 className="font-bold text-lg">{user.fullname}</h1>
              <h2 className="text-teal-500 -mt-1">@{user.username}</h2>
            </div>
          </div>
        </NavLink>
        {/* <FollowBtn user={user} /> */}
      </div>
    </>
  );
};

export default User;
