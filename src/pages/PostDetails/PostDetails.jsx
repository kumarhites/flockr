import React from "react";
import Layout from "../../components/layout";
import Suggestions from "../../components/Suggestions/Suggestions";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { usePost } from "../../contexts/PostContext";
import Post from "../../components/feed/post";
import Comments from "../../components/Comments";
// import Comments from "../../components/comments";

const PostDetails = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const {
        postState: { allPosts },
    } = usePost();

    const post = allPosts?.find((post) => post._id === postId);

    return (
        <div>
            <Layout>
                <div className="max-w-[37.5rem] border-x-[1px]">
                    <section className="sticky top-0 px-4 py-6 backdrop-blur-md ">
                        <div className="flex items-center gap-x-2 text-[1.25rem] font-bold">
                            <button onClick={() => navigate(-1)}>
                                <BsArrowLeft size={24} />
                            </button>
                            <span className="text-sm font-semibold text-slate-700"></span>
                        </div>
                    </section>
                    <Post post={post} />
                    <div className="border-t-[1px] px-4 pb-2 pt-3">
                        <Comments comments={post?.comments} />
                    </div>
                </div>
                <Suggestions />
            </Layout>
        </div>
    );
};

export default PostDetails;
