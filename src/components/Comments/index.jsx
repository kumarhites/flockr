import React, { useState } from "react";
// import Comment from "./comment";
// import { useComment } from "../../contexts/CommentContext";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { usePost } from "../../contexts/PostContext";

const Comments = ({ comments }) => {
    const [commentInput, setCommentInput] = useState("");
    const { addComment } = usePost();
    const { postId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(postId, commentInput);
        setCommentInput("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <div>
                        <label
                            className="mb-2 block text-sm font-bold text-gray-100"
                            htmlFor="comment"
                        >
                            Add a comment
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border border-teal-500 bg-transparent px-3 py-2 leading-tight text-gray-200 shadow focus:outline-none"
                                id="comment"
                                type="text"
                                placeholder="Your comment..."
                                value={commentInput}
                                onChange={(e) =>
                                    setCommentInput(e.target.value)
                                }
                                required
                            />
                            <button
                                className="focus:shadow-outline rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700 focus:outline-none"
                                type="submit"
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <section className="mb-2">
                <span className="pt-2 font-semibold">
                    Comments ({comments?.length})
                </span>
            </section>
            {comments?.map((comment, i) => (
                <Comment comment={comment} key={i} postId={postId} />
            ))}
        </div>
    );
};

export default Comments;
