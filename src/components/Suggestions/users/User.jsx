import React from "react";
import Avatar from "../../Avatar";
import { NavLink } from "react-router-dom";
import FollowBtn from "../../FollowBtn";

const User = ({ user }) => {
  const {
    _id,
    firstName,
    lastName,
    username,
    password,
    bio,
    website,
    avatar,
    backgroundImage,
    createdAt,
    updatedAt,
    following,
    followers,
  } = user;
  return (
    <>
      <div className="hover-transition flex cursor-pointer items-center justify-between rounded-full px-3 py-3 desktop:w-[20rem] desktop:px-4">
        <NavLink to={`/profile/${username}`}>
          <div className="flex flex-wrap items-center gap-3">
            <Avatar src={avatar} alt={firstName} />
            <div className="hidden tablet:block">
              <h1 className="text-lg font-bold">
                {firstName}
              </h1>
              <h2 className="-mt-1 text-teal-500">@{username}</h2>
            </div>
          </div>
        </NavLink>
        <FollowBtn user={user} />
      </div>
    </>
  );
};

export default User;
