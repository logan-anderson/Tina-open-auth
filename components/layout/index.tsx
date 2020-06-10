import * as React from "react";
import Head from "next/head";
import { StyledLayout, Main } from "./styles";
import Footer from "./Footer";

const Layout = ({ children, preview }: any) => {
  return (
    <>
      <Head>
        <title>{"Fun with blocks"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledLayout>
        <Main>{children}</Main>
        <Footer editMode={preview} />
      </StyledLayout>
    </>
  );
};

export default Layout;
