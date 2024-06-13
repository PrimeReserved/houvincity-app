"use client";

import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { getPosts, getProperties, getTestimonies } from "@/lib/action";
import { usePropertyContext } from "@/context/PropertyContext";
import ErrorBoundary from "../ErrorBoundary";
import PropertyProvider from "@/context/PropertyProvider";

// Lazy loading components
const Hero = lazy(() => import("./Hero"));
const AboutProperty = lazy(() => import("@/components/LandingPage/AboutProperty"));
const Newsletter = lazy(() => import("@/components/Newsletter/Newsletter"));
const DiscoverProperty = lazy(() => import("./DiscoverProperty"));
const LandingSection = lazy(() => import("./LandingSection"));
const PropertyGrid = lazy(() => import("./PropertyGrid"));
const ViewAllButton = lazy(() => import("./ViewAllButton"));
const BlogSection = lazy(() => import("./BlogSection"));
const TestimonialSection = lazy(() => import("./TestimonialSection"));

const Home: React.FC = () => {
  const { properties, searchResults, searchPerformed, setProperties, setSearchPerformed } = usePropertyContext();
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedProperties, fetchedPosts, fetchedReviews] = await Promise.all([
          getProperties(),
          getPosts(),
          getTestimonies(),
        ]);

        setProperties(fetchedProperties);
        setPosts(fetchedPosts);
        setReviews(fetchedReviews);
        setIsLoading(false);

        // Updated state management for searchPerformed
        if (searchQuery) {
          setSearchPerformed(true);
        } else {
          setSearchPerformed(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setProperties, searchQuery, setSearchPerformed]);

  const limitedProperties = useMemo(() => properties.slice(0, 3), [properties]);
  const limitedPosts = useMemo(() => posts.slice(0, 6), [posts]);
  const limitedReviews = useMemo(() => reviews.slice(0, 4), [reviews]);

  if (isLoading) return <p>Loading...</p>;
  if (!limitedProperties.length) return <p>No Property Available</p>;
  if (!limitedPosts.length) return <p>No Blog Post Available</p>;
  if (!limitedReviews.length) return <p>No Testimony Review Available</p>;


  return (
    <main>
      {searchPerformed && searchResults.length > 0 ? (
        <PropertyGrid properties={searchResults} />
      ) : (
        <>
          <Suspense fallback={<p>Loading...</p>}>
            <Hero />
          </Suspense>
          {/* Discover Property */}
          <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
              <DiscoverProperty properties={limitedProperties} />
            </Suspense>
          </ErrorBoundary>
          {/* Land */}
          <LandingSection>
            <ErrorBoundary>
              <Suspense fallback={<p>Loading...</p>}>
                <PropertyGrid properties={limitedProperties} />
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <ViewAllButton href="/property" />
              </Suspense>
            </ErrorBoundary>
          </LandingSection>
          <Suspense fallback={<p>Loading...</p>}>
            <AboutProperty />
          </Suspense>
          {/* Blog section */}
          <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
              <BlogSection posts={limitedPosts} />
            </Suspense>
          </ErrorBoundary>
          {/* Testimony section */}
          <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
              <TestimonialSection reviews={limitedReviews} />
            </Suspense>
          </ErrorBoundary>
          {/* Newsletter section */}
          <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
              <Newsletter />
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </main>
  );
};

// Wrap Home component with PropertyProvider
export default function HomeWrapper() {
  return (
    <PropertyProvider>
      <Home />
    </PropertyProvider>
  );
}