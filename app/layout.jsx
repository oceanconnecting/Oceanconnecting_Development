"use client";
import dynamic from 'next/dynamic';
import MobileNav from "@/components/headers/MobileNav";
import "../public/assets/scss/styles.scss";
import { useEffect } from "react";
import SiteMenu from "@/components/headers/SiteMenu";

import { GoogleAnalytics } from '@next/third-parties/google'
const ScrollTop = dynamic(() => import('@/components/common/ScrollTop'), { ssr: false });
const CursorFollor = dynamic(() => import('@/components/common/CursorFollor'), { ssr: false });

import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import PopupSearch from "@/components/headers/PopupSearch";
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script';
export default function RootLayout({ children }) {
  const path = usePathname();
 
  
  
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var topPos = window.scrollY || document.documentElement.scrollTop;
      var stickyWrapper = document.querySelector(".sticky-wrapper");

      if (topPos > 500) {
        stickyWrapper.classList.add("sticky");
      } else {
        stickyWrapper.classList.remove("sticky");
      }
    });
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    const { WOW } = require("wowjs");
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en" className="bg-white">
      
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
         <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ocean Connecting - Professional development services specializing in creating websites and mobile applications tailored to your needs."
        />
        
        <meta name="keywords" content="Ocean Connecting, website development, mobile app development, web design, Agadir development services" />
        <meta name="author" content="Ocean Connecting" />
        <meta property="og:title" content="Ocean Connecting - Web & App Development Solutions" />
        <meta
          property="og:description"
          content="Expert development services from Ocean Connecting, including custom websites and mobile apps. Delivering innovative digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oceanconnecting.dev" />
        <meta property="og:image" content="https://www.oceanconnecting.dev/ocean3.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ocean Connecting - Web & App Development Solutions" />
        <meta
          name="twitter:description"
          content="Custom website and mobile app development by Ocean Connecting."
        />
        <meta name="twitter:image" content="https://www.oceanconnecting.dev/ocean3.png" />

        <title>Ocean Connecting - Web & App Development Solutions</title>
      </head>
      <body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-0TN0SPCERJ`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0TN0SPCERJ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
        <SiteMenu />
        <MobileNav />
        <PopupSearch />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Analytics/>
        {children}
        <GoogleAnalytics gaId="G-0TN0SPCER" />
        <CursorFollor />
        <ScrollTop />
      </body>
    </html>
  );
}
