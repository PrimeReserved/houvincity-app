import Hero from "./Hero";
import AboutProperty from "@/components/LandingPage/AboutProperty";
import Newsletter from "@/components/Newsletter/Newsletter";
import { getPosts, getProperties, getTestimonies } from "@/lib/action";
import ErrorBoundary from "../ErrorBoundary";
import { Suspense } from "react";
import DiscoverProperty from "./DiscoverProperty";
import LandingSection from "./LandingSection";
import PropertyGrid from "./PropertyGrid";
import { ViewAllButton } from "./ViewAllButton";
import { BlogSection } from "./BlogSection";
import { TestimonialSection } from "./TestimonialSection";

export default async function Home() {
  // Fetch data
  const properties = await getProperties();
  const posts = await getPosts();
  const reviews = await getTestimonies();

  // Limit the number of items to 4
  const limitedProperties = properties.slice(0, 3);
  const limitedPosts = posts.slice(0, 6);
  const limitedReviews = reviews.slice(0, 4);

  if (!limitedProperties.length) return <p>No Property Available</p>;
  if (!limitedPosts.length) return <p>No Blog Post Available</p>;
  if (!limitedReviews.length) return <p>No Testimony Review Available</p>;

  return (
    <main>
      <Hero />
      {/* Discover Property */}
      <ErrorBoundary>
        <Suspense>
          <DiscoverProperty properties={limitedProperties} />
        </Suspense>
      </ErrorBoundary>
      {/* Land */}
      <LandingSection>
        <ErrorBoundary>
          <Suspense>
          <PropertyGrid properties={limitedProperties} />
          </Suspense>
          <ViewAllButton href="/property" />
        </ErrorBoundary>
      </LandingSection>
      <AboutProperty />
      {/* Blog section  */}
      <ErrorBoundary>
        <Suspense>
        <BlogSection posts={limitedPosts} />
        </Suspense>
      </ErrorBoundary>
      {/* Testimony section  */}
      <ErrorBoundary>
        <Suspense>
        <TestimonialSection reviews={limitedReviews} />
        </Suspense>
      </ErrorBoundary>
      {/* Newsletter section  */}
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
    </main>
  );
}
