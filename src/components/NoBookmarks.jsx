import React from "react";
import { NavLink } from "react-router-dom";

const NoBookmarks = () => {
  return (
    <div className="max-w-[37.5rem] flex items-center justify-center h-28">
      <section className="tablet:w-[37.5rem]  mx-3">
        <h1 className="mobile:w-[500px] text-[1.25rem] font-bold mb-5">
          No Bookmarks to show
        </h1>
        <NavLink to="/explore">
          <span className="rounded-lg px-3 py-2 text-lg bg-teal-100/[0.2] hover:bg-teal-200/[0.2] text-teal-200">
            {" "}
            Explore
          </span>
        </NavLink>
      </section>
    </div>
  );
};

export default NoBookmarks;
