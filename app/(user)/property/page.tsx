import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import ContactUsBtn from "@/components/Property/ContactUsBtn";
import PropertyListing from "@/components/Property/PropertyListing";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";

function page() {
  return (
    <>
    <Header />
      <ErrorBoundary>
        <Hero
          image={`./images/property/property.png`}
          title="Property Listing"
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <PropertyListing />
      </ErrorBoundary>

      <ErrorBoundary>
        <ContactUsBtn />
      </ErrorBoundary>
      <FooterHome />
    </>
  );
}

export default page;
