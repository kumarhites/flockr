import Textbox from "./Textbox";
import React, { useEffect, useState } from "react";
import Avatar from "../Avatar";
import { useAuth } from "../../contexts/AuthContext";
import { usePost } from "../../contexts/PostContext";
import { useNavigate } from "react-router-dom";

const Publisher = () => {
    const [postContent, setPostContent] = useState("");
    const {
        currentUser: { username, avatar },
    } = useAuth();
    const {
        postState: { toEditPost },
        createPostHandler,
        postDispatch,
        editPostHandler,
    } = usePost();
    const navigate = useNavigate();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (toEditPost) {
            editPostHandler(toEditPost?._id, { content: postContent });
        } else {
            createPostHandler({ content: postContent });
        }
        postDispatch({ type: "EDIT_POST", payload: null });
        setPostContent("");
    };

    useEffect(() => {
        if (toEditPost) {
            setPostContent(toEditPost.content);
        }
    }, []);

    return (
        <section className="grid grid-cols-[auto,1fr] gap-4 px-4 py-4 ">
            <Avatar src={avatar} alt="Profile" />
            <div className="w-full">
                <div className="flex-1 py-2">
                    <textarea
                        id="message"
                        rows="5"
                        name="caption"
                        className="block h-full w-full resize-none rounded-lg border  border-gray-300 bg-transparent/10 p-2.5 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Whats on your mind??"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex items-center justify-end gap-4">
                    <div className="group flex gap-3">
                        {postContent?.length === 0 || postContent === undefined ? (
                            <button className="disabled cursor-not-allowed rounded-full bg-gray-500 px-5 font-semibold text-white">
                                Post
                            </button>
                        ) : (
                            <button
                                className="rounded-full bg-teal-500 px-5 font-semibold text-white hover:bg-teal-600"
                                onClick={formSubmitHandler}
                            >
                                Post
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publisher;
