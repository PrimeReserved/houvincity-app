import House from "./Houses";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import PostsPreview from "@/components/PostsPreview";
import { loadQuery } from "@/sanity/lib/store";
import { PROPERTY_LISTING_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial } from "@sanity/react-loader";
import ComponentError from "@/components/Error";
import ErrorBoundary from "@/components/ErrorBoundary";
import SearchProperty from "./SearchPropety";

async function PropertyListing() {
  const initial: QueryResponseInitial<SanityDocument[]> = await loadQuery<SanityDocument[]>(
    PROPERTY_LISTING_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  console.log(initial);

  const propertyData: SanityDocument[] | undefined = initial?.data;
  console.log(propertyData);

  if (!propertyData) return <ComponentError />;
  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <div>
        <ErrorBoundary>
          <SearchProperty />
        </ErrorBoundary>
      <ErrorBoundary>
        <House properties={propertyData} />
      </ErrorBoundary>
    </div>
  );
}
export default PropertyListing;
