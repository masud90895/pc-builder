import { Inter } from "next/font/google";

import { Button } from "@nextui-org/react";
import Head from "next/head";
import Banner from "@/components/banner/banner";
import RandomProduct from "@/components/RandomProduct/RandomProduct";
import { ProductType } from "@/utilities/globalType";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ randomProduct }: { randomProduct: ProductType[] }) => {
  console.log("🚀 ~ file: index.tsx:12 ~ Home ~ randomProduct:", randomProduct);
  return (
    <div>
      <Head>
        <title>Pc Builder</title>
        <link
          rel="icon"
          href="https://www.pngkey.com/png/detail/212-2126131_pc-logo-computer.png"
        />
        {/* <meta name="description" content="This is a description of my page." /> */}
      </Head>
      {/* banner  start  */}
      <Banner />
      {/* banner  end */}
      {/* Random product */}
      <RandomProduct />
      {/* <RandomProduct end */}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/random-product");
  const data = await res.json();
  return {
    props: {
      randomProduct: data?.data,
    },
  };
}

export default Home;
