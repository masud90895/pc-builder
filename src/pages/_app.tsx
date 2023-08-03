import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className="max-w-[1920] mx-auto ">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
