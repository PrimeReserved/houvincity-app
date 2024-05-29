"use client"

import { useState, useMemo, useEffect } from "react";
import { PropertyContext } from "./PropertyContext";
import { getProperties } from "@/lib/action";

const PropertyProvider = ({ children }: { children: React.ReactNode }) => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const fetchInitialProperties = async () => {
      try {
        const fetchedProperties: any = await getProperties();
        if (!Array.isArray(fetchedProperties) || fetchedProperties.length === 0) {
          return null;
        }
        setProperties(fetchedProperties);
      } catch (error) {
        console.error(`Error fetching properties:`, error);
      }
    };

    fetchInitialProperties();
  }, []);

  const value = useMemo(() => ({ properties, setProperties }), [properties, setProperties]);

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;