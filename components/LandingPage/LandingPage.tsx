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

  return (
    <main>
      <Hero />
      {/* Discover Property */}
      <div className=" wrapper flex justify-center my-[6rem] ">
        <div className="flex flex-col xl:w-[40%] md:mx-20 mx-32  text-center ">
          <h1 className="text-2xl font-medium px-[3rem]">
            Effortless Property Dicovery, Just For You
          </h1>
          <p className="text-sm px-[3rem] font-medium my-5 text-customTextColor leading-loose">
            Dive into a realm where walls and roofs transform into the backdrop
            of your unique story. Your next home is not just a space , it a
            canvas inviting you to paint the chapters of your life
          </p>
         
          <div className="flex justify-center">
              <PropertyToggle properties={limitedProperties} />
          </div>
        </div>
      </div>
      {/* Land */}
      <div className="px-10">
        <div className="wrapper mt-[3rem] mb-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5rem] ">
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
                {limitedProperties.map((property: any) => (
                  <PropertyHomeCard key={property._id} property={property} />
                ))}
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className="flex justify-center mt-10">
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
          <h1 className="text-customSecondary text-4xl font-semibold">
            Stay Updated from Our Blog
          </h1>
          <p className="text-base text-customTextColor mt-3 mb-[3rem] ">
            Gather Infromation From Our Blog and Stay Updated
          </p>
          <div className="mb-10 flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:space-y-0">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[5rem] gap-14 mt-[5rem] m-10">
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              {limitedReviews.map((review: any) => (
                <Review key={review._id} review={review} />
              ))}
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="flex justify-center mt-[5rem] ">
          <Link href="/customer-testimonials">
          <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
            Read More
          </button>
          </Link>
        </div>

      {/* Testimony section  */}
      <Newsletter />
    </main>
  );
}
