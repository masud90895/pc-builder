import RootLayout from "@/components/layout/RootLayout";
import PcBuilderCategory from "@/components/ui/pcbuildercategory";
import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const PcBuilderPage = () => {
  const { products, totalProduct } = useSelector((state) => state.products);

  console.log(products);

  let allCategory;

  if (products.length === 0) {
    allCategory = <p>Loading....</p>;
  }

  if (products.length > 0) {
    allCategory = products.map((category) => (
      <PcBuilderCategory category={category} key={category._id} />
    ));
  }

  const buildComplete = () => {
    Swal.fire("Your Build is completed !!!");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 lg:gap-[20px] w-full lg:w-[1170px] lg:mx-auto lg:p-20 p-5">
        {allCategory}
      </div>
      <div>
        <button
          onClick={() => buildComplete()}
          disabled={totalProduct < 5}
          className={`${
            totalProduct < 5
              ? " text-black border-gray-500 border"
              : "bg-blue-600 text-white"
          } flex  font-Poppins font-bold px-8 py-2 rounded-lg lg:-mt-[40px]`}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
