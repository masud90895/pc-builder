import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Button } from "@nextui-org/react";
import Head from "next/head";
import Banner from "@/components/banner/banner";
import RandomProduct from "@/components/RandomProduct/RandomProduct";
import { ProductType } from "@/utilities/globalType";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ randomProduct }: { randomProduct: ProductType[] }) => {
  return (
    <div>
      <Head>
        <title>Pc Builder</title>
        <link
          rel="icon"
          href="https://i.ibb.co/W5sRzg6/a6c67360ed7472ee57ea422f578774a0-removebg-preview.png"
        />
        {/* <meta name="description" content="This is a description of my page." /> */}
      </Head>
      {/* banner  start  */}
      <Banner />
      {/* banner  end */}
      {/* Random product */}
      <RandomProduct randomProduct={randomProduct} />
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

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;
