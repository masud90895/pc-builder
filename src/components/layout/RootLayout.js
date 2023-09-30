import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
