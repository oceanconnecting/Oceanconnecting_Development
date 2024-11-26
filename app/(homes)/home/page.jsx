import dynamic from "next/dynamic";

export const metadata = {
  title: "Home || Ocean Connecting Solution & Technology Service",
  description: "Ocean Connecting Solution & Technology Service",
};

// Dynamic imports for components
const HeaderTop2 = dynamic(() => import("@/components/headers/HeaderTop2"));
const Header2 = dynamic(() => import("@/components/headers/Header2"));
const Hero = dynamic(() => import("@/components/homes/home-2/Hero"));
const Facts = dynamic(() => import("@/components/homes/home-2/Facts"));
const Services = dynamic(() => import("@/components/homes/home-2/Services"));
const About = dynamic(() => import("@/components/homes/home-2/About"));
const Cta2 = dynamic(() => import("@/components/homes/home-2/Cta"));
const TextSlider = dynamic(() => import("@/components/homes/home-2/TextSlider"));
const VideoBox = dynamic(() => import("@/components/homes/home-2/VideoBox"));
const Team = dynamic(() => import("@/components/homes/home-2/Team"));
const Skills = dynamic(() => import("@/components/homes/home-2/Skills"));
const Testimonials = dynamic(() => import("@/components/homes/home-2/Testimonials"));
const Contact = dynamic(() => import("@/components/homes/home-2/Contact"));
const Cta = dynamic(() => import("@/components/common/Cta"));
const Footer1 = dynamic(() => import("@/components/footers/Footer1"));

export default function Page() {
  return (
    <>
      <HeaderTop2 />
      <Header2 />
      <main className="main position-relative" id="mains">
        <Hero />
        <Facts />
        <Services />
        <About />
        <Cta2 />
        <TextSlider />
        <VideoBox />
        <Team />
        <Skills />
        <Testimonials />
        <Contact />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
