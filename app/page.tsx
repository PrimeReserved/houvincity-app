import LandingPage from "@/components/LandingPage/LandingPage"
import PropertyProvider from "@/context/PropertyProvider";


const Page: React.FC = () => {

  return (
        <PropertyProvider>
          <LandingPage />
        </PropertyProvider>
  );
};

export default Page;