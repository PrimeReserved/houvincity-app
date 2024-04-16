"use client"
import { useState, useEffect } from "react";
import House from "./Houses";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { PROPERTY_LISTING_QUERY } from "@/sanity/lib/queries";;
import ComponentError from "@/components/Error";
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

