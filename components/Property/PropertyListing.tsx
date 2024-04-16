"use client"

import ErrorBoundary from "@/components/ErrorBoundary";
import SearchProperty from "./SearchPropety";
import { usePropertyContext } from "@/context/PropertyContext";
import House from "./Houses";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function PropertyListing() {

  const { properties, setProperties } = usePropertyContext();
  const uniqueTypes = [...new Set(properties.map(property => property.propertyType))];
  const uniqueLocations = [...new Set(properties.map(property => property.location))];
  const uniqueSizes = [...new Set(properties.map(property => property.propertySize))];
  const uniqueBudget = [...new Set(properties.map(property => property.budget))];

  const filterProperties = (
    selectedType: string,
    selectedLocation: string,
    selectedSize: string,
    selectedBudget: string
  ) => {
    let filteredProperties = properties;
    if (selectedType) {
      filteredProperties = filteredProperties.filter(property => property.propertyType === selectedType);
    }
    if (selectedLocation) {
      filteredProperties = filteredProperties.filter(property => property.location === selectedLocation);
    }
    // Corrected filter by property size
    if (selectedSize) {
      filteredProperties = filteredProperties.filter(property => property.propertySize === selectedSize);
    }
    if (selectedBudget) {
      filteredProperties = filteredProperties.filter(property => property.budget === parseInt(selectedBudget));
    }
    setProperties(filteredProperties);
  };


  return (
    <div>
      <ErrorBoundary>
       <SearchProperty
        filterProperties={filterProperties}
        uniqueTypes={uniqueTypes}
        uniqueLocations={uniqueLocations}
        uniqueSizes={uniqueSizes}
        uniqueBudget={uniqueBudget}
      />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <House properties={properties} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
