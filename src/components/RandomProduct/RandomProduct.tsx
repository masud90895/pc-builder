import { ProductType } from "@/utilities/globalType";
import React from "react";
import ProductCard from "../productCard/productCard";

type RandomProductType = {
  randomProduct: ProductType[];
};

const RandomProduct = ({ randomProduct }: RandomProductType) => {
  return (
    <div className="w-full my-[12px] lg:px-[250px]">
      <div className="w-full  text-center font-serif">
        <h2 className="lg:text-6xl ext-3xl font-bold">Featured Products</h2>
        <p className="text-center">
          Featured and popular products from our range
        </p>
      </div>

      <div className="my-[22px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {randomProduct?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RandomProduct;
