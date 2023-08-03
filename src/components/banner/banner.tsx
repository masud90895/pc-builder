import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative banner_image bg-cover bg-center bg-no-repeat ">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right ">
          <h1 className="text-3xl text-[#ce24b4] font-extrabold sm:text-5xl font-serif">
            Lets Build Your
            <strong className="block font-extrabold ">Dream computer</strong>
          </h1>
          <p className="mt-4 max-w-xl sm:text-xl/relaxed  text-gray-400 font-serif">
            The heart of your dream PC is a powerful and fast processor.
            Consider the latest generation Intel Core i9 or AMD Ryzen 9
            processor. These processors offer multiple cores and high clock
            speeds, making them excellent for both gaming and heavy
            multitasking.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link href="/build">
              <Button className="block w-full rounded bg-[#ce24b4] px-12  text-sm font-medium text-white shadow hover:bg-[#e405c2] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Let&apos;s Build
              </Button>
            </Link>

            <Button className="block w-full rounded bg-white px-12  text-sm font-medium text-[#ce24b4] shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
