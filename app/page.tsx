import LandingPage from "@/components/LandingPage/LandingPage";
import { Suspense } from "react";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <LandingPage />
      </Suspense>
      <FooterHome />
    </>
  );
};

export default Page;
