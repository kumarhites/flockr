import { createContext, useContext, useEffect, useReducer } from "react";
import { initialUser, userReducer } from "../reducer/userReducer";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import {
  addToBookmarksHandlerService,
  allUsersBookmarksHandlerService,
  getAllUsersService,
  removeFromBookmarksHandlerService,
} from "../services/userService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useReducer(userReducer, initialUser);
  const { token, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersService();
      const {
        status,
        data: { users },
      } = response;
      if (status === 200) {
        setUser({ type: "GET_ALL_USERS", payload: users });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllBookmarks = async () => {
    try {
      const response = await allUsersBookmarksHandlerService(token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUser({ type: "GET_ALL_BOOKMARKS", payload: bookmarks });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isPostBookmarked = (postId) =>
    user?.allBookmarks?.find(({ _id }) => _id === postId);

  const addToBookmark = async (postId) => {
    try {
      const response = await addToBookmarksHandlerService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUser({ type: "ADD_TO_BOOKMARKS", payload: bookmarks });
        console.log("Successfully added to bookmarks!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromBookmarks = async (postId, doNotShowToast) => {
    try {
      const response = await removeFromBookmarksHandlerService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUser({ type: "REMOVE_FROM_BOOKMARKS", payload: bookmarks });
        // !doNotShowToast && console.log("Successfully removed from bookmarks!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUsers();
    if (token) {
      getAllBookmarks();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getAllUsers,
        isPostBookmarked,
        addToBookmark,
        removeFromBookmarks,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
