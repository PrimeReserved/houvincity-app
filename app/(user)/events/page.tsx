import Loading from "@/app/loading";
import ErrorBoundary from "@/components/ErrorBoundary";
import EventList from "@/components/Event/EventList";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import { getEvents } from "@/lib/action";
import Link from "next/link";
import { Suspense } from "react";


export default async function Page() {

    const events = await getEvents();
    console.log(`Events: ${events}`)

    if (!Array.isArray(events) || events.length === 0) {
      return (
        <div
          className="flex h-screen justify-center items-center"
        >
          <div
            className="bg-base-100 shadow-xl rounded-lg border w-96 h-64 border-gray-200"
          >
            <div className="">
              <p className="p-20 text-2xl text-gray-600 text-center">
                Events not available <span className="text-primary"><Link href={`/`}>Go Home</Link></span>
              </p>
            </div>
          </div>
        </div>
      );
      }

    return (
        <>
        <ErrorBoundary>
            <Header />
        </ErrorBoundary>
        <div className="h-1/2 bg-primary">
            <h1>Property Events</h1>
        </div>

        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <EventList events={events} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
            <FooterHome />
        </ErrorBoundary>
        </>
    );
}