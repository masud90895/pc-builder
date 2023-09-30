import React from "react";

const Banner = () => {
  return (
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 lg:w-[1170px] lg:mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracki font-bold">
            Up to 50% Off <br />
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">ELONMUSK</span>
          </div>
          <a
            href="#"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
