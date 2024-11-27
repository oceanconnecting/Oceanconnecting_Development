import React from "react";
import Home1 from "./(homes)/home/page";
export const metadata = {
  title: "Home  || Ocean Connecting offers innovative web and app development services, specializing in technology solutions tailored to your business needs.  ",
  description: "Ocean Connecting offers innovative web and app development services, specializing in technology solutions tailored to your business needs. ",
};
import { GoogleAnalytics } from '@next/third-parties/google'
const MemoizedHeaderTop2 = React.memo(Home1);
export default function Page() {
  return (
    <>
      <MemoizedHeaderTop2/>
      <GoogleAnalytics gaId="G-0TN0SPCER" />
    </>
  );
}
