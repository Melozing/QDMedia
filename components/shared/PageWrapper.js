import React from "react";
import Footer from "./footer";
import HeaderMeta from "./headerMeta";
import HeaderNav from "./headerNav";
import LoaderComponents from "./loader";
import HeaderContent from "./headerContent";
import Script from "next/script";
import BackToTop from "./backToTop";
import { useEffect } from "react";
import FooterComponents from "./footer";

const PageWrapperUse = ({ children, pageTitle }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      const wow = new WOW.WOW();
      wow.init();
    }
  }, []);

  return (
    <>
      <HeaderMeta />
      <main>
        <LoaderComponents />
        <header className="header-area">
          <HeaderNav />
          <HeaderContent title={pageTitle} />
        </header>
        {children}
      </main>
      <FooterComponents />
      <BackToTop />
      <Script src="/js/wow.min.js" />
      <Script src="/js/bootstrap.bundle.min.js" />
      <Script src="/js/glightbox.min.js" />
      <Script src="/js/count-up.min.js" />
      <Script src="/js/particles.min.js" />
      <Script src="/js/main.js" />
    </>
  );
};

export default PageWrapperUse;
