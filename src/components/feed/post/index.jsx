import React, { useState } from "react";
import Heading from "./Heading";
import Avatar from "../../Avatar";
import { formatDistanceToNow } from "date-fns";
// import { useUser } from "../../../contexts/UserContext";
// import { usePosts } from "../../../contexts/PostContext";
import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../../../contexts/AuthContext";
// import { useBookmark } from "../../../contexts/BookmarkContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { useUser } from "../../../contexts/UserContext";
import { usePost } from "../../../contexts/PostContext";
// import EditPostModal from "../../EditPostModal/EditPostModal";

const Post = ({ post }) => {
  const {
    user: { allUsers },
    isPostBookmarked,
    addToBookmark,
    removeFromBookmarks,
  } = useUser();
  // const [showMorePost, setShowMorePost] = useState(false);
  const navigate = useNavigate();
  const {
    _id,
    content,
    mediaURL,
    likes: { likeCount, likedBy, dislikedBy },
    username,
    createdAt,
    updatedAt,
    comments,
  } = post;

  const selectedUser = allUsers?.find((user) => user?.username === username);

  const {
    // _id,
    firstName,
    lastName,
    // username,
    password,
    bio,
    website,
    avatar,
    // createdAt,
    // updatedAt,
    following,
    followers,
  } = selectedUser;

  const { isPostLiked, likePostHandler, dislikePostHandler } = usePost();
  // let [isOpen, setIsOpen] = useState(false);
  // const { likePost, dislikePost } = usePosts();
  // const { authState } = useAuth();
  // const currentUser = authState?.user;

  // const { bookmarksState, addToBookmark, removeFromBookmarks } = useBookmark();

  // const { comments } = post;
  // const commentLength = comments?.length;

  // const { users } = useUser();
  // const { postsState } = usePosts();

  // const currentPost = postsState?.posts?.find(
  //   (dbPost) => dbPost._id === post._id
  // );

  // const userImage = users?.users?.find(
  //   (dbUser) => currentPost?.username === dbUser?.username
  // );

  const handleLikes = (post) => {
    isPostLiked(post) ? dislikePostHandler(_id) : likePostHandler(_id);
  };

  // const bookmarkedByUser = () => {
  //   return (
  //     bookmarksState?.bookmarks?.filter((bookmark) => bookmark === post?._id)
  //       ?.length !== 0
  //   );
  // };

  const fullname = firstName + " " + lastName;

  return (
    <div className="border-t-[1px] px-4 pb-2 pt-3 transition-colors duration-500 ease-out">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <Avatar src={avatar} alt={username} />
        <div>
          <Heading
            // setIsOpen={setIsOpen}
            postId={_id}
            name={fullname}
            username={username}
            time={formatDistanceToNow(new Date(createdAt))}
          />
          <p>{content}</p>
          {mediaURL && (
            <img
              className="md:w-[350px] xs:w-[280px] w-[600px] rounded-2xl pt-3"
              src={mediaURL}
              alt="uploads"
            />
          )}
          <div className="mt-3 flex max-w-md cursor-pointer justify-between">
            <button onClick={() => handleLikes(post)}>
              <div className="group flex items-center gap-1 tablet:px-4">
                {isPostLiked(post) ? (
                  <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                    <AiFillHeart className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl text-rose-500 hover:bg-rose-500/[0.3] hover:text-rose-500" />
                  </div>
                ) : (
                  <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                    <AiOutlineHeart className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-rose-500/[0.3] hover:text-rose-500" />
                  </div>
                )}
                <p className="text-xs group-hover:text-rose-500">
                  {post?.likes?.likeCount}
                </p>
              </div>
            </button>
            <div className="group flex items-center tablet:pr-4">
              <NavLink to={`/post/${post?._id}`}>
                <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                  <HiOutlineChatBubbleLeft className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-sky-500/[0.3] hover:text-sky-500" />
                </div>
              </NavLink>
              <p className="text-xs group-hover:text-sky-500">
                {comments.length}
              </p>
            </div>
            <div className="group flex items-center gap-1 tablet:px-4">
              {isPostBookmarked(_id) ? (
                <dislikePostHandlerbutton
                  onClick={() => removeFromBookmarks(_id)}
                >
                  <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                    <RxBookmarkFilled className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl text-teal-500 hover:bg-teal-500/[0.3] hover:text-teal-500" />
                  </div>
                </dislikePostHandlerbutton>
              ) : (
                <button onClick={() => addToBookmark(_id)}>
                  <div className="group ml-auto flex cursor-pointer gap-2 rounded-full p-2 transition-colors duration-500 ease-out">
                    <RxBookmark className="hover-transition h-9 w-9 cursor-pointer rounded-full p-2 text-xl hover:bg-teal-500/[0.3] hover:text-teal-500" />
                  </div>
                </button>
              )}
              {/* 
              ) : (
                 */}
            </div>
          </div>
        </div>
      </div>
      {/* <EditPostModal isOpen={isOpen} setIsOpen={setIsOpen} post={currentPost} /> */}
    </div>
  );
};

export default Post;
