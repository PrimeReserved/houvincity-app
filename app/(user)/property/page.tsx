import React, { Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import Hero from "@/components/Hero/Hero";
import ContactUsBtn from "@/components/Property/ContactUsBtn";
import PropertyListing from "@/components/Property/PropertyListing";
import PropertyProvider from "@/context/PropertyProvider";

function page() {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero
          image={`./images/property/property.png`}
          title="Property Listing"
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<p>Loading screen...</p>}>
          <PropertyProvider>
            <PropertyListing />
          </PropertyProvider>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <ContactUsBtn />
      </ErrorBoundary>

      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  );
}

export default page;