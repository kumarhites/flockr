import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useAuth } from "../../../contexts/AuthContext";
import { usePost } from "../../../contexts/PostContext";
import { NavLink } from "react-router-dom";
// import { useComment } from "../../../contexts/CommentContext";

const Heading = ({ name, username, postId, commentId, setIsOpen }) => {
    const { currentUser } = useAuth();
    const { deleteComment } = usePost();

    return (
        <div className="flex items-center gap-1">
            <NavLink to={`/profile/${username}`} className="font-bold">
                {name}
            </NavLink>
            <h2 className="hidden text-teal-500 mobile:block">@{username}</h2>
            {currentUser?.username === username ? (
                <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out ">
                    <MdOutlineModeEditOutline
                        className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-teal-500/[0.2] hover:text-teal-500"
                        onClick={() => setIsOpen(true)}
                    />
                    <button onClick={() => deleteComment(postId, commentId)}>
                        <AiOutlineDelete className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-rose-500/[0.2] hover:text-rose-500" />
                    </button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Heading;
