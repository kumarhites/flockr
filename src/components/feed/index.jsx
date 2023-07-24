import React from "react";
import Post from "./post/index";
import NoPosts from "../NoPosts";

const Feed = ({ posts }) => {
  return (
    <section>
      {posts?.length === 0 ? (
        <NoPosts />
      ) : (
        posts?.map((post) => <Post key={post?.id} post={post} />)
      )}
    </section>
  );
};

export default Feed;
