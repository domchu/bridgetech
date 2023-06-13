
import React from "react"
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/globals.css";
import { ChakraBaseProvider  } from '@chakra-ui/react'
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import ScrollToTop from "../Components/ScrollToTop";



const linkTags = [
  {
    rel: "icon",
    href: "/logo-blue.png",
    sizes: "80x80",
  },
];

const theme = extendTheme({
  colors: {
    primary: {
      1: "#092038",
      2: "#1a202c",
    },
    secondary: {
      1: "red",
      2: "#1a202c",
    },
    accent: {
      1: "#f7fafc",
      2: "#1a202c",
    },
    other: {
      1: "#f7fafc",
      2: "#1a202c",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraBaseProvider>
      <ChakraProvider theme={theme}>
        <DefaultSeo additionalLinkTags={linkTags} {...SEO} />
        <Component {...pageProps} />
        <ScrollToTop showBelow={250} />
      </ChakraProvider>
    </ChakraBaseProvider>
  );
}

export default MyApp
