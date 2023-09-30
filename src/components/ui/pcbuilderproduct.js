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
    <>
      <article className="md:flex items-center bg-white transition hover:shadow-sm my-2">
        <div className="flex w-full">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2023</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            {/* <img
          alt="Guitar"
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="aspect-square h-full w-full object-cover"
        /> */}
            <Image
              width={100}
              height={100}
              src={product?.image}
              alt=""
              className="aspect-square h-full w-full object-cover border border-purple-100 p-1"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <div className="flex items-center gap-[8px]">
                <h3 className="font-bold uppercase text-gray-900">
                  {product?.productName}
                </h3>
                <p className="bg-purple-500 p-[5px] text-sm text-white rounded-full">
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
        </div>



        <div className="flex flex-col items-center h-full  gap-[10px] p-3">
          <p className="font-bold text-3xl">${product?.price}</p>
          <button
            onClick={() => handleAddBuildProduct(product)}
            className="bg-[#ce24b4] font-bold text-white px-12 py-3 rounded-lg"
          >
            Add
          </button>
        </div>


      </article>


    </>


  );
};

export default PcBuilderProduct;
