import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeaturedCategory = ({ category }) => {
  return (
    <Link href={`/category/${category?.category}`}>
      <div className="flex flex-col justify-center items-center bg-gray-50 shadow-lg p-10 rounded-lg hover:bg-blue-200">
        <Image width={100} height={100} src={category?.Image} alt="" />
        <h1>{category?.category}</h1>
      </div>
    </Link>
  );
};

export default FeaturedCategory;
