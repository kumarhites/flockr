import React, { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import Heading from "./Heading";
import Avatar from "../../Avatar";
import { useAuth } from "../../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import EditCommentModal from "../../EditCommentsModal/EditCommentModal";

// import { NavLink } from "react-router-dom";

const Comment = ({ comment, postId }) => {
    let [isOpen, setIsOpen] = useState(false);
    const {
        user: { allUsers },
    } = useUser();
    console.log(allUsers);
    const { currentUser } = useAuth();
    const user = allUsers?.find(
        (dbUser) => comment?.username === dbUser?.username
    );
    console.log("comment", comment);
    console.log("postId", postId);

    console.log("comment.jsx", user);
    const name = user?.firstName + " " + user?.lastName;
    return (
        <div className="border-t-[1px] px-4 pb-2 pt-3 transition-colors duration-500 ease-out">
            <div className="grid grid-cols-[auto,1fr] gap-3">
                <Avatar src={user?.avatar} alt={user?.username} />
                <div>
                    <div>
                        <Heading
                            setIsOpen={setIsOpen}
                            name={name}
                            username={user?.username}
                            postId={postId}
                            commentId={comment?._id}
                        />
                    </div>
                    <p>{comment?.text}</p>

                    {/* <div className="flex justify-between mt-3 max-w-md cursor-pointer">
            <button onClick={() => handleLikes(post._id)}>
              <div className="flex gap-1 items-center group tabletpx-4">
                {likedByUser() ? (
                  <Rune
                    Icon={<LikeIcon fill="fill-rose-600" />}
                    color="group-hover:bg-rose-100"
                  />
                ) : (
                  <Rune
                    Icon={<LikeIconOutline fill="group-hover:fill-rose-500" />}
                    color="group-hover:bg-rose-100"
                  />
                )}
                <p className="text-xs group-hover:text-rose-500">
                  {post?.likes?.likeCount}
                </p>
              </div>
            </button>
            <div className="flex items-center group tablet:pr-4">
              <NavLink to={`/post/${post?._id}`}>
                <Rune
                  Icon={<ReplyIcon fill="group-hover:fill-sky-500" />}
                  color="group-hover:bg-sky-100"
                />
              </NavLink>
              <p className="text-xs group-hover:text-sky-500">
                {commentLength}
              </p>
            </div>
            <div className="flex gap-1 items-center group tabletpx-4">
              {bookmarkedByUser() ? (
                <button onClick={() => removeFromBookmarks(post?._id)}>
                  <Rune
                    Icon={<Bookmark fill="fill-green-600" />}
                    color="group-hover:bg-green-100"
                  />
                </button>
              ) : (
                <button onClick={() => addToBookmark(post?._id)}>
                  <Rune
                    Icon={
                      <BookmarkOutline fill="group-hover:fill-green-500 green-100" />
                    }
                    color="group-hover:bg-green-100 "
                  />
                </button>
              )}
            </div>
          </div> */}
                </div>
            </div>
            <EditCommentModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                comment={comment}
                postId={postId}
            />
        </div>
    );
};

export default Comment;
