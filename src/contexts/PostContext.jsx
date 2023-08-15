import { createContext, useContext, useEffect, useReducer } from "react";
import { initialPost, postReducer } from "../reducer/postReducer";
import {
    createPostHandlerService,
    deletePostHandlerService,
    dislikePostHandlerService,
    editPostHandlerService,
    getAllPostsService,
    likePostHandlerService,
} from "../services/postService";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postState, postDispatch] = useReducer(postReducer, initialPost);
    const { token, currentUser } = useAuth();

    const getAllPosts = async () => {
        try {
            const response = await getAllPostsService();
            const {
                status,
                data: { posts },
            } = response;
            if (status === 200) {
                postDispatch({ type: "SET_ALL_POSTS", payload: posts });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const sortedPosts = (posts) => {
        const { selectedSort } = postState;
        if (selectedSort === "Latest") {
            return [...posts]?.sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateB - dateA;
            });
        } else {
            return [...posts]?.sort(
                (a, b) => b.likes.likeCount - a.likes.likeCount
            );
        }
    };

    const isPostLiked = (post) => {
        return post?.likes?.likedBy?.find(
            ({ username }) => username === currentUser?.username
        );
    };

    const likePostHandler = async (postId) => {
        try {
            const response = await likePostHandlerService(postId, token);
            const {
                status,
                data: { posts },
            } = response;
            if (status === 201) {
                postDispatch({ type: "HANDLE_LIKE_POST", payload: posts });
                toast.success("Post liked!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const dislikePostHandler = async (postId) => {
        try {
            const response = await dislikePostHandlerService(postId, token);
            const {
                status,
                data: { posts },
            } = response;
            if (status === 201) {
                postDispatch({ type: "HANDLE_DISLIKE_POST", payload: posts });
                toast.success("Post disliked", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const createPostHandler = async (postData) => {
        try {
            const response = await createPostHandlerService(postData, token);
            const {
                status,
                data: { posts },
            } = response;
            if (status === 201) {
                postDispatch({ type: "CREATE_POST", payload: posts });
                toast.success("Post created!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const deletePostHandler = async (postId) => {
        try {
            const response = await deletePostHandlerService(postId, token);
            const {
                status,
                data: { posts },
            } = response;
            if (status === 201) {
                postDispatch({ type: "DELETE_POST", payload: posts });
                toast.success("Post deleted!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const editPostHandler = async (postId, postData) => {
        try {
            const response = await editPostHandlerService(
                postId,
                postData,
                token
            );
            const {
                status,
                data: { posts },
            } = response;
            if (status === 201) {
                postDispatch({ type: "UPDATED_POSTS", payload: posts });
                toast.success("Post updated successfully!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    //comments
    const addComment = async (postId, commentData) => {
        try {
            const response = await axios.post(
                `/api/comments/add/${postId}`,
                { commentData },
                { headers: { authorization: token } }
            );
            if (response?.status === 201 || response?.status === 200) {
                postDispatch({
                    type: "GET_POSTS",
                    payload: response?.data?.posts,
                });
                toast.success("Comment added!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteComment = async (postId, commentId) => {
        try {
            const { data, status } = await axios({
                method: "POST",
                url: `/api/comments/delete/${postId}/${commentId}`,
                headers: { authorization: token },
            });
            if (status === 201 || status === 200) {
                postDispatch({ type: "GET_POSTS", payload: data?.posts });
                toast.success("Comment removed!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const editComment = async (postId, commentId, commentData) => {
        try {
            const { data, status } = await axios.post(
                `/api/comments/edit/${postId}/${commentId}`,
                { commentData },
                { headers: { authorization: token } }
            );
            if (status === 201) {
                postDispatch({ type: "GET_POSTS", payload: data?.posts });
                toast.success("Comment updated!", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    //comments

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <PostContext.Provider
            value={{
                postState,
                postDispatch,
                sortedPosts,
                isPostLiked,
                likePostHandler,
                dislikePostHandler,
                createPostHandler,
                editPostHandler,
                deletePostHandler,
                addComment,
                editComment,
                deleteComment,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => useContext(PostContext);
