import React, { useState } from "react";
import { usePost } from "../contexts/PostContext";

const Filter = () => {
    const { postDispatch, postState: {selectedSort} } = usePost();
    const [filterState, setFilterState] = useState(selectedSort);

    const handleFilter = (filterType) => {
        setFilterState(filterType);
        postDispatch({ type: "SET_SELECTED_SORT", payload: filterType });
    };

    return (
        <div className="flex justify-between border-t-[1px]">
            <div className="h-full flex-1 items-center justify-center transition-colors duration-500 ease-out hover:bg-neutral-600">
                <button
                    onClick={() => handleFilter("Trending")}
                    className={`w-full py-2 text-center text-lg  ${
                        filterState === "Trending" ? "font-bold" : ""
                    }`}
                >
                    Trending
                </button>
            </div>
            <div className="flex-1 transition-colors duration-500 ease-out hover:bg-neutral-600">
                <button
                    onClick={() => handleFilter("Latest")}
                    className={`w-full py-2 text-center text-lg  ${
                        filterState === "Latest" ? "font-bold" : ""
                    }`}
                >
                    Latest Posts
                </button>
            </div>
        </div>
    );
};

export default Filter;
