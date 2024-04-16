"use client"

import ErrorBoundary from "@/components/ErrorBoundary";
import SearchProperty from "./SearchPropety";


export default function PropertyListing() {

  return (
    <div>
        <ErrorBoundary>
          <SearchProperty/>
        </ErrorBoundary>
    </div>
  );
}

