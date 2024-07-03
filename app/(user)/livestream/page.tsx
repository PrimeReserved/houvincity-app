import { groq } from "next-sanity";
import { UpcomingEvent } from "@/typings";
import { Video } from "@/components/Event/Video";
import Header from "@/components/Header/HeaderHome";
import EventList from "@/components/Event/EventList";
import Contact from "@/components/Contact/Contact";
import ErrorBoundary from "@/components/ErrorBoundary";
import Newsletter from "@/components/Newsletter/Newsletter__old";
import FooterHome from "@/components/Footer/FooterHome";
import { Suspense } from "react";
import Loading from "@/app/loading";

export const revalidate = 30;

const query = groq`*[_type == 'upcomingEvent'] | order(_createdAt asc)`;

const Page = async () => {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <main className="py-28 pt-[6.3rem] md:pt-[7.5rem]">
            <Video />

          <section>
            <EventList />
            <Contact />
          </section>
        </main>
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <FooterHome />
    </div>
  );
};

export default Page;
