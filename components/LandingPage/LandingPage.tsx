import Hero from "./Hero";
import AboutProperty from "@/components/LandingPage/AboutProperty";
import BlogHomePage from "@/components/LandingPage/BlogHomePage";
import Card from "@/components/LandingPage/Card";
import Review from "@/components/LandingPage/Review";
import Newsletter from "@/components/Newsletter/Newsletter";
import { Post } from "@/typings";
import { getPosts, getTestimony } from "@/lib/action";
import ErrorBoundary from "../ErrorBoundary";
import Loading from "@/app/loading";
import PostCard from "../Blog/Cards/PostCard";




export default async function Home() {
  const posts = await getPosts();
  const reviews = await getTestimony();

  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No posts available</p>;
  }

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <p>No reviews available</p>;
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
          <div className="flex justify-center  ">
            <div className="flex justify-center">
              <div className="flex gap-3 md:gap-5 justify-center bg-white drop-shadow-lg py-10 md:w-[400px] w-[350px] ">
                {/* <button
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Land */}
      <Card properties={[]} />
      <AboutProperty />
      <ErrorBoundary>
        {posts.map((post: any) => (
          <PostCard key={post._id} post={post} />
        ))}
      </ErrorBoundary>
      {reviews.map((review: any) => (
        <Review key={review._id} review={review} />
      ))}
      <Newsletter />
    </main>
  );
}
