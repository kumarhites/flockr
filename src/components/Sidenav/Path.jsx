import React from "react";

const Path = ({ Icon, name, size }) => {
  return (
    <div className="flex group">
      <div className="flex gap-4 items-center group-hover:bg-neutral-700 laptop:px-4 px-3 py-3 rounded-full hover-transition">
        <Icon className="w-6 h-6" size={size} />
        <span className={`text-[1.25rem] hidden desktop:block `}>{name}</span>
      </div>
    </div>
  );
};

export default Path;
