import React from "react";
import Feed from "../../components/feed";
import Layout from "../../components/layout";
import Suggestions from "../../components/Suggestions/Suggestions";
import NoBookmarks from "../../components/NoBookmarks";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useUser } from "../../contexts/UserContext";
import Post from "../../components/feed/post";
import { usePost } from "../../contexts/PostContext";

const Bookmarks = () => {
  const {
    user: { allBookmarks },
  } = useUser();
  const {
    postState: { allPosts },
  } = usePost();

  const navigate = useNavigate();

  return (
    <div>
      <Layout>
        <div className="max-w-[37.5rem] border-x-[1px]">
          <section className="sticky top-0 px-4 py-6 backdrop-blur-md">
            <div className="flex items-center gap-x-2 text-[1.25rem] font-bold">
              <button onClick={() => navigate(-1)}>
                <BsArrowLeft size={24} />
              </button>
              Bookmarks
              <span className="text-sm font-semibold text-slate-300">
                ({allBookmarks?.length} bookmarks)
              </span>
            </div>
          </section>
          {allBookmarks?.length === 0 ? (
            <NoBookmarks />
          ) : (
            <div>
              {[...allBookmarks]?.reverse()?.map((indPost) => {
                const post = allPosts?.find(({ _id }) => _id === indPost?._id);
                return <Post post={post} key={post?._id} />;
              })}
            </div>
          )}
        </div>
        <Suggestions />
      </Layout>
    </div>
  );
};

export default Bookmarks;
