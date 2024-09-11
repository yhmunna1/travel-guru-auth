import React from "react";
import { Outlet } from "react-router-dom";

const Roots = () => {
  return (
    <div className="font-montserrat">
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
