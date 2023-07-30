import React from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
// import { useUser } from "../contexts/UserContext";
// import { useAuth } from "../contexts/AuthContext";

const FollowBtn = ({ user }) => {
    const { currentUser } = useAuth();
    const {
        setUser,
        followUserHandler,
        unfollowUserHandler,
        user: { allUsers },
    } = useUser();

    const {
        _id,
        firstName,
        lastName,
        username,
        password,
        bio,
        website,
        avatar,
        createdAt,
        updatedAt,
        following,
        followers,
    } = user;

    // const followingUsers = (userId) =>
    //   allUsers
    //     ?.find((user) => user?._id === userId)
    //     ?.followers?.some(
    //       (follower) => follower?.username === currentUser?.username
    //     );

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
