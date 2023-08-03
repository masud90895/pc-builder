import React from "react";
import NavbarPage from "../shared/Navbar/Navbar";
import { ReactNode } from "react";
import Footer from "../shared/Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <NavbarPage />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
