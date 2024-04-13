import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import Hero from "@/components/Hero/Hero";
import ContactUsBtn from "@/components/Property/ContactUsBtn";
import SearchProperty from "@/components/Property/SearchPropety";
import House from "@/components/Property/Houses";
import Land from "@/components/Property/Land";
import PropertyListing from "@/components/Property/PropertyListing";

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
       
        {/* <Land /> */}
        {/* <House /> */}
        <PropertyListing />

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