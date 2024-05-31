import ErrorBoundary from "@/components/ErrorBoundary";
import SearchProperty from "./SearchPropety";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { getProperties } from "@/lib/action";

export default async function PropertyListing() {
  const properties = await getProperties()
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <SearchProperty properties={properties}/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
