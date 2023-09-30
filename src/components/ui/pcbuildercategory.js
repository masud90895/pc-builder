import Image from "next/image";
import Link from "next/link";
import React from "react";

const PcBuilderCategory = ({ category }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center w-full lg:w-[75%] bg-purple-200 shadow-sm  p-5 gap-[40px] lg:gap-0 border border-purple-500 rounded-lg">
      <div className="flex items-start gap-[15px]">
        <Image width={100} height={100} src={category?.Image} alt="" />
        <div className="flex flex-col items-start ">
          <p className="font-extrabold font-Tektur">{category?.category}</p>
          {category?.products?.map((product) => (
            <p key={Math.random()}> {product?.productName}</p>
          ))}
        </div>
      </div>
      <div>
        <Link href={`/pcbuildercategory/${category?.category}`}>
          <button className=" border-[#ce24b4] border-2 text-[#ce24b4] px-8 py-2 rounded-md">
            Choose
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderCategory;
