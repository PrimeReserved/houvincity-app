"use client"

import { useState, useEffect, useMemo, ReactNode } from "react";
import { getProperties } from "@/lib/action";
import { Property } from "@/typings";
import { PropertyContext } from "./PropertyContext";



export default function PropertyProvider({ children }: Readonly<{ children: ReactNode }>){
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  useEffect(() => {
    const fetchInitialProperties = async () => {
      try {
        const fetchedProperties = await getProperties();
        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchInitialProperties();
  }, []);

  const value = useMemo(
    () => ({ properties, setProperties, searchResults, setSearchResults, searchPerformed, setSearchPerformed }),
    [properties, searchResults, searchPerformed]
  );

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
};