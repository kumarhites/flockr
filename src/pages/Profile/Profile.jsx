import React from "react";
import Layout from "../../components/layout";
import Suggestions from "../../components/Suggestions/Suggestions";
import Header from "../../components/profile/Header";
import Feed from "../../components/feed";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { usePosts } from "../../contexts/PostsContext";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { postsState } = usePosts();
  const { username } = useParams();
  const { authState } = useAuth();
  const feedPosts = postsState?.posts?.filter(
    (post) => post?.username === username
  );

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
                  ({feedPosts?.length} posts)
                </span>
              </div>
            </div>
          </section>
          <Header currentUser={authState?.user} />
          <Feed posts={feedPosts} />
        </div>
        <Suggestions />
      </Layout>
    </div>
  );
};

export default Profile;
