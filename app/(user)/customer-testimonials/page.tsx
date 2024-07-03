import Loading from "@/app/loading";
import ErrorBoundary from "@/components/ErrorBoundary";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import Testimony from "@/components/LandingPage/Testimony";
import { Suspense } from "react";
import { getTestimonies } from "@/lib/action";

export default async function Page() {
  const testimonies = await getTestimonies();

  if (!Array.isArray(testimonies) || testimonies.length === 0) {
    return <p>No testimony available</p>;
  }

  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <div className="lg:wrapper mx-5">
        <h1 className="py-10 text-center mt-30 text-4xl text-primary font-bold border-primary underline">
          Customer Testimonies
        </h1>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="py-8">
        <Testimony reviews={testimonies} />
        </div>
      </Suspense>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  );
}
