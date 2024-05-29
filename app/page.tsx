import LandingPage from "@/components/LandingPage/LandingPage"
import PropertyProvider from "@/context/PropertyProvider";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import Head from "next/head";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Houvincity Real Estate and Property Management',
    default: 'Houvincity | Real Estate and Property Management',
  },
  description: 'Real Estate and Property Managment',
  openGraph: {
    title: 'Houvincity Real Estate and Property Management',
    description: 'Real Estate and Property Managment',
    url: 'https://houvincity-app.vercel.app/',
    siteName: 'Houvincity.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dzd51q99i/image/upload/v1716690156/houvincity/services/HCL_Logo_1_k5l61c.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://res.cloudinary.com/dzd51q99i/image/upload/v1716690096/houvincity/landing-page/Union_chih6l.png',
        width: 1800,
        height: 1600,
        alt: 'Houvincity Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


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