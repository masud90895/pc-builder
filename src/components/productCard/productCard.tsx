import { ProductType } from "@/utilities/globalType";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";

import NextImage from "next/image";

interface ProductProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Card isFooterBlurred className="w-full h-[300px] ">
      <CardHeader className="absolute z-10 top-1 rounded-lg py-1  items-end bg-primary/75 w-[80px] text-white">
        {product?.status}
      </CardHeader>
      <Image
        as={NextImage}
        width={300}
        height={300}
        removeWrapper
        isZoomed
        alt="Relaxing app background"
        className="z-0 w-full h-[250px] object-cover"
        src={product?.image}
      />
      <CardFooter className="absolute bg-white bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-col">
          <h2 className="text-[20px] text-black font-semibold">
            {product?.productName}
          </h2>
          <p className="text-tiny text-white/60">
            Get a good night&apos;s sleep.
          </p>
        </div>
      </CardFooter>
    </Card>
    // <div className="bg-white shadow-lg border border-gray-200 rounded-lg  ">
    //   <Image
    //     src={product?.image}
    //     alt={product?.productName}
    //     width={250}
    //     height={300}
    //     className="w-full h-40 bg-white rounded-t-lg rounded-b-none  object-center"
    //   />
    //   <div className="p-3">
    //     <h3 className="text-gray-700 font-semibold text-lg">
    //       {product?.productName}
    //     </h3>
    //   </div>
    // </div>
  );
};

export default ProductCard;
