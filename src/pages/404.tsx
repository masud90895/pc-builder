import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

const errorPage = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center ">
        <div className="bg-white rounded-md flex items-center justify-center mx-4 md:w-2/3">
          <div className="flex flex-col items-center">
            <div className="px-4 hidden md:block">
              <Image
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="md:hidden">
              <Image
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt=""
                width={250}
                height={250}
              />
            </div>
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS! <span className="text-red-600">404</span>
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              {/* <span className="text-red-600">{statusText}</span> <br /> */}
              <br />
              No signal here! we cannot find the page you are looking for{" "}
            </p>

            <Button
              onClick={() => router.push("/")}
              className="mx-4 h-10 w-44 border rounded-md text-white text-base  bg-[#ce24b4] hover:bg-[#fa07d5] focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-[#43efb9]"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default errorPage;
