import { ProductType } from "@/utilities/globalType";
import React from "react";

type RandomProductType = {
  randomProduct: ProductType[];
};

const RandomProduct = ({ randomProduct }: RandomProductType) => {
  return (
    <div className="w-full my-[12px]">
      <div className="w-full  text-center font-serif">
        <h2 className="lg:text-6xl ext-3xl font-bold">Featured Products</h2>
        <p className="text-center">
          Featured and popular products from our range
        </p>
      </div>

      <div className="my-[16px]"></div>
    </div>
  );
};

export default RandomProduct;
