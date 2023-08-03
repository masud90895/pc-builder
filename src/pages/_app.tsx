import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextUIProvider>
        <div className="max-w-[1920] mx-auto ">
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
    </Layout>
  );
}
