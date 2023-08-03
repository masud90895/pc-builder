import React from "react";
import NavbarPage from "../shared/Navbar/Navbar";
import { ReactNode } from "react";
import Footer from "../shared/Footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="w-full">
      {router.pathname === "/404" ? (
        <main>{children}</main>
      ) : (
        <>
          <NavbarPage />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
