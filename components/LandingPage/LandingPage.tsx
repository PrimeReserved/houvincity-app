import Hero from "./Hero";
import AboutProperty from "@/components/LandingPage/AboutProperty";
import BlogHomePage from "@/components/LandingPage/BlogHomePage";
import Card from "@/components/LandingPage/Card";
import Review from "@/components/LandingPage/Review";
import Newsletter from "@/components/Newsletter/Newsletter";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);

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
            <div className="flex gap-5 justify-center bg-white drop-shadow-lg py-10 w-[400px] ">
              <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
                Land
              </button>
              <button className="py-3 px-[3rem] bg-primary rounded-md text-xs text-white">
                Smart Homes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Land */}
      <Card />
      <AboutProperty />

      <BlogHomePage posts={posts} />
      <Review />
      <Newsletter />
    </main>
  );
}