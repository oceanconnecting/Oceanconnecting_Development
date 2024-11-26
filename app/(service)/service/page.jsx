import dynamic from "next/dynamic";
const Footer1 = dynamic(() => import("@/components/footers/Footer1"));
const Header1=  dynamic(()=> import("@/components/headers/Header1"));
 
const HeaderTop =dynamic(()=>import("@/components/headers/HeaderTop")) ;


const  Cta =dynamic(()=>import("@/components/common/Cta"))   ;
const TextSlider=dynamic(()=>import("@/components/homes/home-2/TextSlider")) ;
const  VideoBox =dynamic(()=>import("@/components/homes/home-2/VideoBox"))    ;
const Services2=dynamic (()=>import("@/components/otherPages/service/Services2"))   ;

import Link from "next/link";
export const metadata = {
  title: "Service  ||ocean connecting Solution & Technology Service Nextjs Template",
  description: "ocean connecting Solution & Technology Service Nextjs Template",
};
export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Services 
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Services </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Services2 />
        <TextSlider />
        <VideoBox />
       
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
