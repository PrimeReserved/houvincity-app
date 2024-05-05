"use client"

import { useState, useMemo, useEffect } from "react"
import { PropertyContext } from "./PropertyContext"
import { getProperty } from "@/lib/data";


const PropertyProvider = ({ children }: { children: React.ReactNode}) => {
    const [properties, setProperties] = useState<any[]>([]);
 

    useEffect(() => {
      const fetchInitialProperties = async () => {
          try {
              const fetchedProperties = await getProperty();
              setProperties(fetchedProperties);
          } catch (error) {
              console.error(`Error fetching properties:`, error);
          }
      };

      fetchInitialProperties();
  }, []);
  
  const value = useMemo(() => ({ properties, setProperties }), [properties, setProperties]);


  return (
    <PropertyContext.Provider
      value={value}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;