import React from "react";

const FullScreenSideBar = ({ children }) => {
  return (
    <div className="sm:hidden flex flex-col items-center h-fit w-full z-50 relative">
      {children}
    </div>
  );
};

export default FullScreenSideBar;
