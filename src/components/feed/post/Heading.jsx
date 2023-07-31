import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import UnfollowBtn from "../../UnfollowBtn";
import { useUser } from "../../../contexts/UserContext";
import FollowBtn from "../../FollowBtn";
import { usePost } from "../../../contexts/PostContext";
// import { usePosts } from "../../../contexts/PostContext";

const Heading = ({ postId, name, username, time, setIsOpen, isOpen }) => {
    const { currentUser } = useAuth();
    const { deletePostHandler } = usePost();

    const {
        user: { allUsers },
    } = useUser();

    const selectedUser = allUsers?.find(
        (dbUser) => dbUser?.username === username
    );

    const updatedCurrentUser = allUsers?.find(
        ({ username }) => username === currentUser?.username
    );

    const isFollowing = updatedCurrentUser?.following?.some(
        (user) => user?.username === username
    );

    return (
        <div className="flex items-center gap-1">
            <NavLink to={`/profile/${username}`} className={`flex gap-2`}>
                <h1 className="font-bold">{name}</h1>
                <h2 className="hidden text-teal-500 mobile:block">
                    @{username}
                </h2>
            </NavLink>
            <span className="text-neutral-500">•</span>
            <h2 className="text-neutral-500">{time} ago</h2>
            {currentUser?.username === username ? (
                <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MdOutlineModeEditOutline className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-teal-500/[0.2] hover:text-teal-500" />
                    </button>
                    <button onClick={() => deletePostHandler(postId)}>
                        <AiOutlineDelete className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-rose-500/[0.2] hover:text-rose-500" />
                    </button>
                </div>
            ) : (
                <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                    {isFollowing ? (
                        <UnfollowBtn user={selectedUser} />
                    ) : (
                        <FollowBtn user={selectedUser} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Heading;
