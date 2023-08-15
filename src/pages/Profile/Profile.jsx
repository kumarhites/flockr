import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Suggestions from "../../components/Suggestions/Suggestions";
import Header from "../../components/profile/Header";
import Feed from "../../components/feed";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useUser } from "../../contexts/UserContext";
import { usePost } from "../../contexts/PostContext";

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const {
        postState: { allPosts },
    } = usePost();

    const {
        user: { selectedUser },
        getUser,
    } = useUser();

    const displayUserPosts = allPosts?.filter(
        (post) => post?.username === selectedUser?.username
    );

    const sortedDisplayUserPosts = [...displayUserPosts]?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
    });

    useEffect(() => {
        getUser(username);
    }, [username, getUser]);

    return (
        <div>
            <Layout>
                <div className="max-w-[37.5rem] border-x-[1px]">
                    <section className="sticky top-0 w-full px-4 py-6 backdrop-blur-md">
                        <div className="">
                            <div className="flex items-center gap-x-2 text-[1.25rem] font-bold">
                                <button onClick={() => navigate(-1)}>
                                    <BsArrowLeft size={24} />
                                </button>
                                Profile
                                <span className="text-sm font-semibold text-slate-200">
                                    ({displayUserPosts?.length} posts)
                                </span>
                            </div>
                        </div>
                    </section>
                    <Header selectedUser={selectedUser} />
                    <Feed posts={sortedDisplayUserPosts} />
                </div>
                <Suggestions />
            </Layout>
        </div>
    );
};

export default Profile;
