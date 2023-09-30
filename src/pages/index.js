import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/banner";
import FeaturedCategory from "@/components/ui/featuredcategory";
import Hero from "@/components/ui/hero";
import Marque from "@/components/ui/marquee";
import ProductCard from "@/components/ui/productcard";
import React from "react";

const HomePage = ({ products, categories }) => {
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

  // Featured Category

  let allCategory;

  if (categories.length === 0) {
    allCategory = <p>Loading....</p>;
  }

  if (categories.length > 0) {
    allCategory = categories.map((category) => (
      <FeaturedCategory category={category} key={category._id} />
    ));
  }

  return (
    <div className="">
      <Hero />
      {/* Marquee Slider Notice */}
      <div>
        <Marque />
      </div>

      {/* Featured Products */}
      <div>
        <div className="w-full  text-center font-serif mt-2">
          <h2 className="lg:text-6xl ext-3xl font-bold font-Poppins">Featured Products</h2>
          <p className="text-center font-Poppins">
            Featured and popular products from our range
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:w-[1170px] lg:mx-auto mx-3 my-[100px] lg:gap-[5px]">
          {allRandomProduct}
        </div>
      </div>
      <Banner />

      {/* Featured Category */}
      <div className="flex flex-col justify-center items-center gap-[5px] my-[50px]">
        <h1 className="lg:text-6xl text-3xl font-Poppins font-bold">
          Featured Category
        </h1>
        <p className="text-md">
          Get Your Desired Product from Featured Category
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 items-center lg:flex-row lg:gap-[30px] gap-[15px] mx-3 my-[40px]">
          {allCategory}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-6es4dg09p-masud90895.vercel.app/random-product");
  const response = await fetch("https://pc-builder-server-6es4dg09p-masud90895.vercel.app/categories");

  const data = await res.json();
  const category = await response.json();

  return {
    props: {
      products: data.data,
      categories: category.data,
    },
    // revalidate: 5,
  };
};


