import React from "react";
import { BsSearch } from "react-icons/bs";
import SuggestedUsers from "./users";
import { useUser } from "../../contexts/UserContext";

const Suggestions = () => {
    const {
        user: { allUsers },
    } = useUser();

    return (
        <div className="hidden space-y-2 px-8 laptop:block">
            <section className="sticky top-0 z-20 bg-transparent py-3">
                <div className="relative flex items-center gap-4 rounded-full bg-neutral-700 px-4 py-2">
                    <BsSearch className="h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent text-base placeholder:text-base focus:outline-none"
                    />
                </div>
            </section>
            <SuggestedUsers allUsers={allUsers} />
        </div>
    );
};

export default Suggestions;
