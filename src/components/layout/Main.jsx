import React from "react";

const Main = ({ children }) => {
  return (
    <main>
      <div className="grid grid-cols-[auto,1fr] desktop:ml-72 ml-20 min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default Main;
