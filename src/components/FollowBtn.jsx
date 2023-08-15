import React from "react";
import { useUser } from "../contexts/UserContext";

const FollowBtn = ({ user }) => {
    const { followUserHandler } = useUser();

    const { _id } = user;

    const handleFollow = (userId) => {
        followUserHandler(userId);
    };

    return (
        <div key={_id}>
            <button
                className="hover-transition group ml-auto cursor-pointer rounded-full border border-teal-500/[0.2] bg-teal-900/[0.05] px-2 duration-150 hover:bg-teal-500/[0.1] hover:text-white"
                onClick={() => handleFollow(_id)}
            >
                <p className="text-teal-500 group-hover:text-teal-600">
                    Follow
                </p>
            </button>
        </div>
    );
};

export default FollowBtn;
