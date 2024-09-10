import React from "react";
import { Outlet } from "react-router-dom";

const Roots = () => {
  return (
    <div className="max-w-6xl mx-auto font-montserrat">
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
