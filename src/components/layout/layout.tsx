import React from "react";
import NavbarPage from "../Navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarPage />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
