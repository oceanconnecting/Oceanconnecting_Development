import React from "react";
import Home1 from "./(homes)/home/page";
export const metadata = {
  title: "Home  || Ocean Connecting offers innovative web and app development services, specializing in technology solutions tailored to your business needs.  ",
  description: "Ocean Connecting offers innovative web and app development services, specializing in technology solutions tailored to your business needs. ",
};
const MemoizedHeaderTop2 = React.memo(Home1);
export default function Page() {
  return (
    <>
      <MemoizedHeaderTop2/>
    </>
  );
}
