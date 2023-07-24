import React from "react";
import SideNav from "../Sidenav/SideNav.jsx";

const Header = () => {
  return (
    <header className="fixed">
      <div>
        <SideNav />
      </div>
    </header>
  );
};

export default Header;
