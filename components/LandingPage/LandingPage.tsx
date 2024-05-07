"use client"

import { Suspense, useEffect, useState } from "react";
import Hero from "./Hero";
import AboutProperty from "@/components/LandingPage/AboutProperty";
import BlogHomePage from "@/components/LandingPage/BlogHomePage";
import Card from "@/components/LandingPage/Card";
import Review from "@/components/LandingPage/Review";
import Newsletter from "@/components/Newsletter/Newsletter";
import { usePropertyContext } from "@/context/PropertyContext";
import { Post } from "@/typings";
import { getPost } from "@/lib/data";
import ErrorBoundary from "../ErrorBoundary";
import Loading from "@/app/loading";

export const revalidate = 30;

export default function Home() {
  const [selectedPropertyType, setSelectedPropertyType] = useState('House');
  const { properties, setProperties } = usePropertyContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLandActive, setIsLandActive] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const postsData = await getPost();
        if (!postsData || !Array.isArray(postsData)) return;
        setPosts(postsData);
      } catch (error) {
        console.error(`Error Post in landing page: ${error}`)
      }
    }

    fetchPost();
  }, []);

  const filterPropertiesByType = (propertyType: string) => {
    return properties.filter(property => property.propertyType === propertyType);
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    setSelectedPropertyType(propertyType);
  };

  return (
    <main>
      <Hero />
      {/* Discover Property */}
      <div className=" wrapper flex justify-center my-[6rem] ">
        <div className="flex flex-col xl:w-[40%] md:mx-20 mx-32 text-center ">
          <h1 className="text-2xl font-medium">
            Effortless Property Dicovery, Just For You
          </h1>
          <p className="text-sm font-medium my-5 text-customTextColor leading-loose">
            Dive into a realm where walls and roofs transform into the backdrop
            of your unique story. Your next home is not just a space , it a
            canvas inviting you to paint the chapters of your life
          </p>

          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex gap-5 justify-center bg-white drop-shadow-lg py-10 w-[400px] ">
                <button
                  className={`py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ${isLandActive ? "bg-primary text-white" : "bg-white text-primary"
                    }`}
                  onClick={() => handlePropertyTypeChange('Land')}
                >
                  Land
                </button>
                <button
                  className={`py-3 px-[3rem] border-[1px] border-primary rounded-md text-xs text-primary ${!isLandActive ? "bg-primary text-white" : "bg-white text-primary"
                    }`}
                  onClick={() => handlePropertyTypeChange('House')}
                >
                  Smart Homes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Land */}
      <Suspense fallback={<Loading />}>
      <Card properties={filterPropertiesByType(selectedPropertyType)} />
      </Suspense>
      <AboutProperty />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <BlogHomePage posts={posts} />
        </Suspense>
      </ErrorBoundary>
      <Review />
      <Newsletter />
    </main>
  );
}