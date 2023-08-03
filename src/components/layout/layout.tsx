import React from "react";
import NavbarPage from "../shared/Navbar/Navbar";
import { ReactNode } from "react";
import Footer from "../shared/Footer/Footer";

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
