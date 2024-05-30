import Loading from "@/app/loading";
import ErrorBoundary from "@/components/ErrorBoundary";
import EventList from "@/components/Event/EventList";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import { getEvents } from "@/lib/action";
import { Suspense } from "react";


export default async function Page() {

    const events = await getEvents();
    console.log(`Events: ${events}`)

    if (!Array.isArray(events) || events.length === 0) {
        return <p>No events available</p>;
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