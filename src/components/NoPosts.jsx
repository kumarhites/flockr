import React from "react";

const NoPosts = () => {
  return (
    <div className="max-w-[37.5rem] flex items-center justify-center h-28">
      <section className="tablet:w-[37.5rem] mx-3">
        <h1 className="mobile:w-[500px] text-[1.25rem] font-bold">
          No Posts to show
        </h1>
      </section>
    </div>
  );
};

export default NoPosts;
