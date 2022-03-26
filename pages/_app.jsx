import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components";
import light from "../theme/light";
import LayoutHeaderComponent from "../components/layoutHeader";
import LayoutFooterComponent from "../components/layoutFooter";
import Head from "next/head";

import nProgress from "nprogress";
import { Router } from "next/router";
import "../styles/nprogress.css"

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Head>
        <title>Hi, Matheus Barbosa</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ height: 80 }}>
        <LayoutHeaderComponent />
      </div>
      <div className="mt-5">
        <Component {...pageProps} />
      </div>
      <LayoutFooterComponent />
    </ThemeProvider>
  );
}

export default MyApp;
