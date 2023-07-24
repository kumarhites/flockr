import React from "react";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto,1fr] desktop:max-w-7xl laptop:max-w-5xl max-w-2xl mx-auto">
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
