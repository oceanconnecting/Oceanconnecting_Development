import React from "react";
import Home1 from "./(homes)/home-1/page";
export const metadata = {
  title: "Home  || Ocean connecting Solution & Technology Service  ",
  description: "ocean connecting Solution & Technology Service ",
};
const MemoizedHeaderTop2 = React.memo(Home1);
export default function Page() {
  return (
    <>
      <MemoizedHeaderTop2/>
    </>
  );
}
