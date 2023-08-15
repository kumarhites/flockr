export const postReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_ALL_POSTS":
        case "HANDLE_LIKE_POST":
        case "HANDLE_DISLIKE_POST":
        case "CREATE_POST":
        case "DELETE_POST":
        case "UPDATED_POSTS":
            return { ...state, allPosts: payload };
        case "SET_SELECTED_SORT":
            return { ...state, selectedSort: payload };
        case "EDIT_POST":
            return { ...state, toEditPost: payload };
        default:
            return state;
    }
};

export const initialPost = {
    allPosts: [],
    selectedSort: "Latest",
    showAddNewPostModal: false,
    toEditPost: null,
};
