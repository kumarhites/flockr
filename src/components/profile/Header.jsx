import React, { useState } from "react";
import Avatar from "../Avatar";
import { useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import FollowBtn from "../FollowBtn";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import { IoLinkOutline } from "react-icons/io5";
import UnfollowBtn from "../UnfollowBtn";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

const Header = ({ selectedUser }) => {
    const { token, currentUser, logoutHandler } = useAuth();
    const {
        user: { allUsers },
        setUser,
        followUserHandler,
        unfollowUserHandler,
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
        bookmarks,
    } = selectedUser;

    console.log(followers, following);

    const updatedCurrentUser = allUsers?.find(
        ({ username }) => username === currentUser?.username
    );

    const isFollowing = updatedCurrentUser?.following?.some(
        (user) => user?.username === username
    );
    let [isOpen, setIsOpen] = useState(false);
    // const { users } = useUser();
    // const usersArray = users?.users;
    // const { authState } = useAuth();
    // const currentUser = authState?.user;
    // const { username } = useParams();
    // const currentUser = usersArray?.find((user) => user.username === username);

    return (
        <>
            <div className="hover-transition flex cursor-pointer items-center justify-between rounded-full px-3 py-5 desktop:w-full desktop:px-4">
                <div className="flex items-center gap-3">
                    <div>
                        <Avatar src={avatar} alt={username} profile={true} />
                    </div>
                    <div className="flex flex-col justify-between space-y-3">
                        <div>
                            <h1 className="text-xl font-bold">
                                {firstName} {lastName}
                            </h1>
                            <h2 className="-mt-1 text-base text-teal-500">
                                @{username}
                            </h2>
                            <h2 className="text-base">{bio}</h2>
                            <a
                                className="flex items-center gap-3 text-base text-blue-400 underline"
                                href={website}
                                target="_blank"
                            >
                                <IoLinkOutline size={20} />
                                {website}
                            </a>
                        </div>
                    </div>
                </div>
                {currentUser?.username === username ? (
                    <button onClick={() => setIsOpen(true)}>
                        <MdOutlineModeEditOutline className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-teal-500/[0.2] hover:text-teal-500" />
                    </button>
                ) : (
                    // <FollowBtn user={selectedUser} />
                    <>
                        {isFollowing ? (
                            <UnfollowBtn user={selectedUser} />
                        ) : (
                            <FollowBtn user={selectedUser} />
                        )}
                    </>
                    // {isFollowing ? }
                )}
            </div>
            <div className="flex border-collapse justify-between border-y-[1px] px-4 pb-2 pt-3 transition-colors duration-500 ease-out">
                <div className="flex gap-5">
                    <p className="font-semibold">
                        ({followers?.length}) Followers
                    </p>
                    <p className="font-semibold">
                        ({following?.length}) Following
                    </p>
                </div>
                <EditProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    );
};

export default Header;
