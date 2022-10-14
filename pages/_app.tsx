import type { AppProps } from "next/app";

import { ActionsContextProvider } from "../utilities/store/actionsContext";
import { Layout } from "../components";
import "../sass/global.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActionsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActionsContextProvider>
  );
}

export default MyApp;
