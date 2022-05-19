import type { AppProps } from "next/app";
import Contexto from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Contexto>
      <Component {...pageProps} />
    </Contexto>
    </>
  );
}

export default MyApp;
