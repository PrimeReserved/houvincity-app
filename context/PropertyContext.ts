// context/SearchContext.tsx

import { SetStateAction, useContext, createContext, Dispatch } from "react";

type PropertyContextType = {
  properties: any[];
  setProperties: Dispatch<SetStateAction<any[]>>;
}


export const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  setProperties: () => {},
});

export function usePropertyContext(){
  return useContext(PropertyContext)
}
