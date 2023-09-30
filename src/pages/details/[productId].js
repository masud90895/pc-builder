/* eslint-disable react/no-unescaped-entities */
import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import React from "react";
import pic from "../../Assets/card/product.jpg";

const ProductDetailsPage = ({ product }) => {
  console.log(product);

  return (
    <div>
      <div class="container mx-auto py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-4">
            <Image
              width={500}
              height={500}
              src={product.image}
              alt="Product Image"
              class="w-full rounded-lg shadow-lg"
            />
          </div>

          <div class="w-full md:w-1/2 px-4">
            <h1 class="text-2xl font-bold mb-4">{product?.productName}</h1>
            <p class="text-gray-600 mb-2">{product?.category}</p>
            <p class="text-green-600 font-semibold mb-4">
              Status: {product?.status}
            </p>
            <p class="text-2xl font-bold mb-4">${product?.price}</p>
            <p class="text-gray-800 leading-relaxed mb-4">
              {product?.description}
            </p>

            <div class="mb-4">
              <h2 class="text-lg font-semibold mb-2">Key Features:</h2>
              <ul class="list-disc list-inside">
                {product?.keyFeatures.map((feature) => (
                  <li key={Math.random()}>{feature} </li>
                ))}
              </ul>
            </div>

            <div class="flex items-center mb-4">
              <div class="mr-2">
                <p class="text-lg font-semibold">
                  Individual Rating: {product.individualRating}
                </p>
              </div>
            </div>
            <p class="text-lg font-semibold mb-2">
              Average Rating: {product?.averageRating}
            </p>

            <div>
              <h2 class="text-lg font-semibold mb-2">Reviews:</h2>
              {product?.reviews.map((review) => (
                <div key={Math.random()}>
                  <div class="border rounded-lg p-4">
                    <p class="text-gray-800 font-semibold">{review.reviewer}</p>
                    <p class="text-gray-600">{review.time}</p>
                    <p class="text-gray-600">{review.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-6es4dg09p-masud90895.vercel.app/products");
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-6es4dg09p-masud90895.vercel.app/product/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
