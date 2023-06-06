import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

const Layout: React.FC<any> = () => {
  return (
    // Your layout JSX code goes here
    <div className="flex justify-between">
      {/* @ts-expect-error Server Component */}
      <NavBar />
      {/* <Drawer /> */}
    </div>
  );
};

export default Layout;
