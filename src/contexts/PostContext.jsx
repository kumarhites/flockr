import { createContext, useContext, useEffect, useReducer } from "react";
import { initialPost, postReducer } from "../reducer/postReducer";
import {
  dislikePostHandlerService,
  getAllPostsService,
  likePostHandlerService,
} from "../services/postService";
import { useAuth } from "./AuthContext";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postState, postDisptach] = useReducer(postReducer, initialPost);
  const { token, currentUser } = useAuth();

  const getAllPosts = async () => {
    try {
      const response = await getAllPostsService();
      const {
        status,
        data: { posts },
      } = response;
      if (status === 200) {
        postDisptach({ type: "SET_ALL_POSTS", payload: posts });
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
      return [...posts]?.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
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
        postDisptach({ type: "HANDLE_LIKE_POST", payload: posts });
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
        postDisptach({ type: "HANDLE_DISLIKE_POST", payload: posts });
        console.log("Successfully unliked post!");
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
        postDisptach,
        sortedPosts,
        isPostLiked,
        likePostHandler,
        dislikePostHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
