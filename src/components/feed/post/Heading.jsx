import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { useAuth } from "../../../contexts/AuthContext";
// import { usePosts } from "../../../contexts/PostContext";

const Heading = ({ postId, name, username, time, setIsOpen }) => {

  return (
    <div className="flex gap-1 items-center">
      <NavLink to={`/profile/${username}`} className={`flex gap-2`}>
        <h1 className="font-bold">{name}</h1>
        <h2 className="text-teal-500 hidden mobile:block">@{username}</h2>
      </NavLink>
      <span className="text-neutral-500">•</span>
      <h2 className="text-neutral-500">{time} ago</h2>
      {/* {currentUser?.username === username ? (
        <div className="p-2 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out flex gap-2">
          <MdOutlineModeEditOutline
            className="hover:text-teal-500 hover:bg-teal-500/[0.2] w-9 h-9 p-2 rounded-full hover-transition cursor-pointer text-xl"
            onClick={() => setIsOpen(true)}
          />
          <button onClick={() => deletePost(postId)}>
            <AiOutlineDelete className="hover:text-rose-500 hover:bg-rose-500/[0.2] w-9 h-9 p-2 rounded-full hover-transition cursor-pointer text-xl" />
          </button>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Heading;
