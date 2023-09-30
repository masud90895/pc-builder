/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/details/${product._id}`}>
      <div className="mt-10 w-full ">
        <div className="card m-2 bg-base-100 shadow-lg slide-top">
          <figure>
            <Image
              width={400}
              height={50}
              src={product?.image}
              alt="Shoes"
              className="w-full h-[250px]"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{product?.productName}</h2>
            <p className="font-extrabold text-red-600 text-lg">
              {" "}
              ${product?.price}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-secondary">
                {product?.averageRating}
              </div>
              <div className="badge badge-outline">{product?.status}</div>
              <div className="badge badge-outline">{product.category}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
