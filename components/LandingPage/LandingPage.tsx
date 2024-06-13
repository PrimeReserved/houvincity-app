import Hero from "./Hero";
import AboutProperty from "@/components/LandingPage/AboutProperty";
import PropertyHomeCard from "@/components/LandingPage/PropertyHomeCard";
import Review from "@/components/LandingPage/Review";
import Newsletter from "@/components/Newsletter/Newsletter";
import { getPosts, getProperties, getTestimonies } from "@/lib/action";
import ErrorBoundary from "../ErrorBoundary";
import PostCard from "../Blog/Cards/PostCard";
import Link from "next/link";
import PropertyToggle from "./PropertyToggle";
import Loading from "@/app/loading";
import { Suspense } from "react";
import Testimony from "./Testimony";

export default async function Home() {
  // Fetch data
  const properties = await getProperties();
  const posts = await getPosts();
  const reviews = await getTestimonies();

  // Limit the number of items to 4
  const limitedProperties = properties.slice(0, 3);
  const limitedPosts = posts.slice(0, 6);
  const limitedReviews = reviews.slice(0, 4);

  if (!Array.isArray(limitedProperties) || limitedProperties.length === 0) {
    return <p>No Property Available</p>;
  }

  if (!Array.isArray(limitedPosts) || limitedPosts.length === 0) {
    return <p>No Blog Post Available</p>;
  }

  if (!Array.isArray(limitedReviews) || limitedReviews.length === 0) {
    return <p>No Yestimony Review Available</p>;
  }

  const testimonies = await getTestimonies();

  if (!Array.isArray(testimonies) || testimonies.length === 0) {
    return <p>No testimony available</p>;
  }

  return (
    <main>
      <Hero />
      {/* Discover Property */}
      <div className=" mx- flex justify-center my-[6rem] ">
        <div className="flex flex-col w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center px-4 ">
          <h1 className="text-2xl font-medium">
            Effortless Property Dicovery, Just For You
          </h1>
          <p className="text-sm font-medium my-5 text-customTextColor leading-loose">
            Dive into a realm where walls and roofs transform into the backdrop
            of your unique story. Your next home is not just a space , it a
            canvas inviting you to paint the chapters of your life
          </p>

          <div className="flex justify-center">
            <div className="flex gap-5 justify-center bg-white drop-shadow-lg px-5 py-5 md:py-10 md:px-5">
              <button className=" w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
                Land
              </button>
              <button className="w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] bg-primary rounded-md text-xs text-white">
                Smart Homes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Land */}
      <div className="">
        <div className="mx-7 md:mx-10  mt-[3rem] mb-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6rem] lg:gap-5 xl:gap-10 mt-[5rem] ">
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
                {limitedProperties.map((property: any) => (
                  <PropertyHomeCard key={property._id} property={property} />
                ))}
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className="flex justify-center mt-[10rem] ">
            <Link href="/property">
              <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AboutProperty />
      {/* Blog section  */}
      <div className="wrapper flex justify-center items-center  mb-[5rem] px-10">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-customSecondary text-2xl md:text-3xl font-semibold">
            Stay Updated from Our Blog
          </h1>
          <p className="font-medium w-[300px] md:w-[100%] text-base text-customTextColor mt-3 mb-[3rem] text-center">
            Gather Infromation From Our Blog and Stay Updated
          </p>
          <div className=" flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  {limitedPosts.map((post: any) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link href={`/blog`}>
              <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Blog section  */}

      {/* Testimony section  */}
      <div className="lg:wrapper mx-5  ">
        <h1 className="text-customSecondary text-3xl font-semibold my-[7rem] flex justify-center">
          Our Happy Homeowners
        </h1>
      </div>

      <div className="mt-[5rem]">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Testimony reviews={testimonies} />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Testimony section  */}
      <Newsletter />
    </main>
  );
}
