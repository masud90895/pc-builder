import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeaturedCategory = ({ category }) => {

  return (
    <Link href={`/category/${category?.category}`}>
      <div className="flex flex-col justify-center items-center bg-gray-50 shadow-lg p-10 rounded-lg hover:bg-purple-400 h-[200px]">
        <Image width={100} height={100} src={category?.Image} alt="" className="w-[100px] h-[100px] rounded-lg" />

        <h1 className="font-semibold font-Poppins">{category?.category}</h1>
      </div>
    </Link>
  );
};

export default FeaturedCategory;
