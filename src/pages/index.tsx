import { Inter } from "next/font/google";

import { Button } from "@nextui-org/react";
import Head from "next/head";
import Banner from "@/components/banner/banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    </div>
  );
}
