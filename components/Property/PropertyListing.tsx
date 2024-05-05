"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import SearchProperty from "./SearchPropety";
import { usePropertyContext } from "@/context/PropertyContext";
import House from "./Houses";

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
    console.log("Selected Values:", selectedType, selectedLocation, selectedSize, selectedBudget);
    if (selectedType) {
      filteredProperties = filteredProperties.filter(property => property.propertyType === selectedType);
      console.log("After Type Filter:", filteredProperties);
    }
    if (selectedLocation) {
      filteredProperties = filteredProperties.filter(property => property.location === selectedLocation);
      console.log("After Location Filter:", filteredProperties);
    }
    // Corrected filter by property size
    if (selectedSize) {
      filteredProperties = filteredProperties.filter(property => property.propertySize === selectedSize);
      console.log("After Size Filter:", filteredProperties);
    }
    if (selectedBudget) {
      filteredProperties = filteredProperties.filter(property => property.budget === parseInt(selectedBudget));
      console.log("After Budget Filter:", filteredProperties);
    }
    console.log(`Filtered Properties:`, filteredProperties);
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
        <House properties={properties} />
      </ErrorBoundary>
    </div>
  );
}
