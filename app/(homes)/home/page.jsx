import React from "react";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import HeaderTop2 from "@/components/headers/HeaderTop2";
import About from "@/components/homes/home-2/About";
import Contact from "@/components/homes/home-2/Contact";
import Cta2 from "@/components/homes/home-2/Cta";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
import Services from "@/components/homes/home-2/Services";
import Skills from "@/components/homes/home-2/Skills";
import Team from "@/components/homes/home-2/Team";
import Testimonials from "@/components/homes/home-2/Testimonials";
import TextSlider from "@/components/homes/home-2/TextSlider";
import VideoBox from "@/components/homes/home-2/VideoBox";
export const metadata = {
  title: "Home  || Ocean connecting Solution & Technology Service  ",
  description: "Ocean connecting Solution & Technology Service  ",
};

// Memoize each component to optimize rendering
const MemoizedHeaderTop2 = React.memo(HeaderTop2);
const MemoizedHeader2 = React.memo(Header2);
const MemoizedHero = React.memo(Hero);
const MemoizedFacts = React.memo(Facts);
const MemoizedServices = React.memo(Services);
const MemoizedAbout = React.memo(About);
const MemoizedCta2 = React.memo(Cta2);
const MemoizedTextSlider = React.memo(TextSlider);
const MemoizedVideoBox = React.memo(VideoBox);
const MemoizedTeam = React.memo(Team);
const MemoizedSkills = React.memo(Skills);
const MemoizedTestimonials = React.memo(Testimonials);
const MemoizedContact = React.memo(Contact);
const MemoizedCta = React.memo(Cta);
const MemoizedFooter1 = React.memo(Footer1);

export default function Page() {
  return (
    <>
      <MemoizedHeaderTop2 />
      <MemoizedHeader2 />
      <main className="main position-relative" id="mains">
        <MemoizedHero />
        <MemoizedFacts />
        <MemoizedServices />
        <MemoizedAbout />
        <MemoizedCta2 />
        <MemoizedTextSlider />
        <MemoizedVideoBox />
        <MemoizedTeam />
        <MemoizedSkills />
        <MemoizedTestimonials />
        <MemoizedContact />
        <MemoizedCta />
      </main>
      <MemoizedFooter1 />
    </>
  );
}
