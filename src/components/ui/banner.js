import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div class="container mx-auto  px-4 md:px-6">
      <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
          <div class="flex flex-col justify-center md:w-1/2">
            <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Best Deal</h1>
            <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">Save upto <span class="font-bold">50%</span></p>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">

            <Image
              alt=""
              src={"https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"}
              width={304}
              height={171}
            />
          </div>
        </div>
        <div class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
            <p class="text-base lg:text-xl text-gray-800 dark:text-white">Save Upto <span class="font-bold">30%</span></p>
          </div>
          <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">

            <Image
              alt=""
              src={"https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"}
              width={145}
              height={143}
              className="md:w-20 md:h-20 lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
