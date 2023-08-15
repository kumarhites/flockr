import React, { createContext, useContext } from "react";
import { usePost } from "./PostContext";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const { postDispatch } = usePost();
    const { token } = useAuth();

    const addComment = async (postId, commentData) => {
        try {
            const response = await axios.post(
                `/api/comments/add/${postId}`,
                { commentData },
                { headers: { authorization: token } }
            );
            if (response?.status === 201 || response?.status === 200) {
                postDispatch({
                    type: "SET_ALL_POSTS",
                    payload: response?.data?.posts,
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
                postDispatch({ type: "SET_ALL_POSTS", payload: data?.posts });
                console.log("Comment removed!");
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
                postDispatch({ type: "SET_ALL_POSTS", payload: data?.posts });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CommentContext.Provider
            value={{ addComment, deleteComment, editComment }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export const useComment = () => useContext(CommentContext);
