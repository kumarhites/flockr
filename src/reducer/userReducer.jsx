export const userReducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_ALL_USERS":
            return { ...state, allUsers: payload };
        case "GET_ALL_BOOKMARKS":
            return { ...state, allBookmarks: payload };
        case "ADD_TO_BOOKMARKS":
            return { ...state, allBookmarks: payload };
        case "REMOVE_FROM_BOOKMARKS":
            return { ...state, allBookmarks: payload };
        case "FOLLOW_USER":
        case "UNFOLLOW_USER":
            return {
                ...state,
                allUsers: state?.allUsers?.map((user) => {
                    const changedUser = payload.find(
                        ({ _id }) => _id === user._id
                    );
                    return changedUser ? changedUser : user;
                }),
            };
        case "SET_USER":
            return { ...state, selectedUser: payload };
        case "EDIT_USER_PROFILE":
          return {
            ...state,
            allUsers: state?.allUsers?.map((user) =>
              user._id === payload._id ? payload : user
            ),
          };
        default:
            return state;
    }
};

export const initialUser = {
    allUsers: [],
    allBookmarks: [],
    selectedUser: {},
};
