import React from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
// import { useUser } from "../contexts/UserContext";
// import { useAuth } from "../contexts/AuthContext";

const UnfollowBtn = ({ user }) => {
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
        unfollowUserHandler(userId);
    };

    return (
        <div key={_id}>
            <button
                className="hover-transition text-sm group px-2 ml-auto cursor-pointer rounded-full duration-150 hover:bg-teal-500/[0.1] border border-teal-500/[0.2] bg-teal-900/[0.05] hover:text-white"
                onClick={() => handleFollow(_id)}
            >
                <p className="text-teal-500 group-hover:text-teal-600">
                    Unfollow
                </p>
            </button>
        </div>
    );
};

export default UnfollowBtn;
