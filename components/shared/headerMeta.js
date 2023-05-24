import React from "react";
import Head from "next/head";

function HeaderMeta() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>QD Media</title>
        <meta name="description" content="QD Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export default HeaderMeta;
