"use client";

import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { Property } from "@/typings";

type PropertyContextType = {
  properties: Property[];
  setProperties: Dispatch<SetStateAction<Property[]>>;
  searchResults: Property[];
  setSearchResults: Dispatch<SetStateAction<Property[]>>;
  searchPerformed: boolean;
  setSearchPerformed: Dispatch<SetStateAction<boolean>>;
};

export const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("usePropertyContext must be used within a PropertyProvider");
  }
  return context;
};