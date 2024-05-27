import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import ContactUsBtn from "@/components/Property/ContactUsBtn";
import PropertyListing from "@/components/Property/PropertyListing";

function page() {
  return (
    <>
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
    </>
  );
}

export default page;
