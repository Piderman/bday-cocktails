import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Chicle } from "next/font/google";
const chicle = Chicle({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-deco: ${chicle.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
