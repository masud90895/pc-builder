import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToBuilder } from "@/redux/feature/pcBuildSlice";

const PcBuilderProduct = ({ product }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleAddBuildProduct = (product) => {
    dispatch(addToBuilder({ category: product.category, product }));
    router.push("/pcbuilder");
  };

  return (
    <div className="mt-5 flex flex-col lg:flex-row justify-center lg:justify-between items-center p-10 bg-white rounded-md gap-[20px] shadow-md">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[25px]">
        <div>
          <Image
            width={100}
            height={100}
            src={product?.image}
            alt=""
            className="w-[150px] h-[150px]"
          />
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[8px]">
            <h1 className="text-3xl font-bold">{product?.productName}</h1>
            <p className="bg-gray-500 p-[5px] text-sm text-white rounded-full">
              {product?.status}
            </p>
          </div>
          <ul className="text-gray-500 font-Poppins flex flex-col gap-[10px]">
            {product?.keyFeatures.map((product) => (
              <li key={Math.random()}>{product}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <p className="font-bold text-3xl">${product?.price}</p>
        <button
          onClick={() => handleAddBuildProduct(product)}
          className="bg-blue-500 font-bold text-white px-12 py-3"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PcBuilderProduct;
