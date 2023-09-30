import RootLayout from "@/components/layout/RootLayout";
import ProductCard from "@/components/ui/productcard";
import React from "react";

const CategoryWiseProduct = ({ products }) => {
  // Featured Product

  let allRandomProduct = [];

  if (products.length === 0) {
    allRandomProduct = <p>Loading....</p>;
  }

  if (products.length > 0) {
    allRandomProduct = products.map((product) => (
      <ProductCard product={product} key={product._id} />
    ));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:w-[1170px] lg:mx-auto my-[100px] gap-[25px] mx-3">
      {allRandomProduct}
    </div>
  );
};

export default CategoryWiseProduct;

CategoryWiseProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-6es4dg09p-masud90895.vercel.app/categories");
  const categories = await res.json();
  console.log(categories);
  const paths = categories?.data?.map((category) => ({
    params: { categoryName: category?.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-6es4dg09p-masud90895.vercel.app/category?search=${params.categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
