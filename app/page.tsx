import LandingPage from "@/components/LandingPage/LandingPage"
import PropertyProvider from "@/context/PropertyProvider";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";


const Page: React.FC = () => {

  return (
    <>
     <Header />
        <PropertyProvider>
         <Suspense fallback={<Loading />}>
          <LandingPage />
         </Suspense>
        </PropertyProvider>
        <FooterHome />
    </>
  );
};

export default Page;