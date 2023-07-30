import React from "react";
import Layout from "../../components/layout";
import Feed from "../../components/feed";
import { usePost } from "../../contexts/PostContext";
import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/AuthContext";
import Suggestions from "../../components/Suggestions/Suggestions";
import Publisher from "../../components/publisher";
import Filter from "../../components/Filter";
// import Suggestions from "../../components/Suggestions/Suggestions";
// import { usePosts } from "../../contexts/PostsContext";
// import { useAuth } from "../../contexts/AuthContext";
// import Feed from "../../components/feed";

const Home = () => {
    const { currentUser } = useAuth();
    const {
        postState: { allPosts, selectedSort },
        setPost,
        sortedPosts,
    } = usePost();

    const {
        user: { allUsers },
    } = useUser();

    const updatedCurrentUser = allUsers?.find(
        ({ username }) => username === currentUser?.username
    );

    const displayPosts = allPosts?.filter(
        (post) =>
            updatedCurrentUser?.following?.some(
                ({ username }) => username === post.username
            ) || post?.username === updatedCurrentUser?.username
    );
    // console.log(sortedPosts(displayPosts));
    return (
        <>
            <Layout>
                <div className="max-w-[37.5rem] border-x-[1px]">
                    <section className="sticky top-0 px-4 py-6 backdrop-blur ">
                        <h1 className="text-[1.25rem] font-bold">Home</h1>
                    </section>
                    <Publisher />
                    <Filter />
                    <Feed posts={sortedPosts(displayPosts)} />
                </div>
                <Suggestions />
            </Layout>
        </>
    );
};

export default Home;
