import { groq } from "next-sanity";
import { UpcomingEvent } from "@/typings";
import { Video } from "@/components/Event/Video";
import Header from "@/components/Header/HeaderHome";
import EventList from "@/components/Event/EventList";
import Contact from "@/components/Contact/Contact";
// import MailchimpNewsletter from '../components/NewsLetter/MailchimpNewsletter';
// import UpcomingEventContent from '../components/UpcomingEventContent/UpcomingEventContent';
// import Contact from '../components/Contact/Contact';

export const revalidate = 30;

const query = groq`*[_type == 'upcomingEvent'] | order(_createdAt asc)`;

const Page = async () => {
  return (
    <div>
      <Header />
      <main className="py-28 pt-[6.3rem] md:pt-[7.5rem]">
        <Video />
        <section>
            <EventList />
            <Contact />
        </section>
      </main>
    </div>
  );
};

export default Page;
