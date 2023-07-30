import React, { useEffect } from "react";
import Feed from "../../components/feed";
import Layout from "../../components/layout";
import Suggestions from "../../components/Suggestions/Suggestions";
import { usePost } from "../../contexts/PostContext";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Explore = () => {
    const navigate = useNavigate();
    const { postState, sortedPosts, postDispatch } = usePost();

    useEffect(() => {
        postDispatch({ type: "SET_SELECTED_SORT", payload: "Latest" });
    });

    return (
        <div>
            <Layout>
                <div className="max-w-[37.5rem] border-x-[1px]">
                    <section className="sticky top-0 px-4 py-6 backdrop-blur-md ">
                        <div className="font-bolde flex items-center gap-x-2 text-[1.25rem]">
                            <button onClick={() => navigate(-1)}>
                                <BsArrowLeft size={24} />
                            </button>
                            Explore
                        </div>
                    </section>
                    <Feed posts={sortedPosts(postState?.allPosts)} />
                </div>
                <Suggestions />
            </Layout>
        </div>
    );
};

export default Explore;
