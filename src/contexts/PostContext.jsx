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
                console.log("Successfully liked post!");
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
                console.log("Successfully unliked post!");
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
                console.log("Successfully created post!");
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
                console.log("Successfully deleted post!");
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
                console.log("Successfully updated post!");
            }
        } catch (err) {
            console.error(err);
        }
    };

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
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => useContext(PostContext);
