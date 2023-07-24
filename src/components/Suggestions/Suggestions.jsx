import React from "react";
import { BsSearch } from "react-icons/bs";
import SuggestedUsers from "./users";
// import { useUser } from "../../contexts/UserContext";

const Suggestions = () => {
  // const { users } = useUser();

  return (
    <div className="laptop:block hidden px-8 space-y-2">
      <section className="sticky top-0 py-3 bg-transparent z-20">
        <div className="flex items-center gap-4 px-4 py-2 bg-neutral-700 rounded-full">
          <BsSearch className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="text-base placeholder:text-base focus:outline-none bg-transparent"
          />
        </div>
      </section>
      {/* <SuggestedUsers allUsers={users?.users} /> */}
    </div>
  );
};

export default Suggestions;
