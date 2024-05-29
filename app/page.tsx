import LandingPage from "@/components/LandingPage/LandingPage"
import PropertyProvider from "@/context/PropertyProvider";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import Head from "next/head";


const Page: React.FC = () => {

  return (
    <>
    <Head>
      <title>ouvincity | Real Estate and Property Management </title>
      <meta name="description" content="A short description of your page's content"/>
      <meta property="og:title" content="Houvincity | Real Estate and Property Management" />
      <meta property="og:description" content="Real Estate and Property Managment" />
      <meta property="og:image" content="https://res.cloudinary.com/dzd51q99i/image/upload/v1716690156/houvincity/services/HCL_Logo_1_k5l61c.png" />
      <meta name="twitter:card" content="https://res.cloudinary.com/dzd51q99i/image/upload/v1716690096/houvincity/landing-page/Union_chih6l.png" />
    </Head>
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