"use client";

import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  isWithinInterval,
} from "date-fns";
import EventForm from "./EventForm";
import YoutubeEmbed from "../Property/YoutubeEmbed";
import { UpcomingEvent } from "@/typings";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setReminders, toggleReminder } from '@/features/events/eventSlice';

// Utility functions
const isThisMonth = (event: any) => {
  const eventDate = new Date(event.date); // Use event.date
  const now = new Date();
  return isWithinInterval(eventDate, {
    start: startOfMonth(now),
    end: endOfMonth(now),
  });
};

const isNextMonth = (event: any) => {
  const eventDate = new Date(event.date); // Use event.date
  const nextMonthStart = startOfMonth(addMonths(new Date(), 1));
  const nextMonthEnd = endOfMonth(addMonths(new Date(), 1));
  return isWithinInterval(eventDate, {
    start: nextMonthStart,
    end: nextMonthEnd,
  });
};



export default function EventList({ events }: any) {
  const dispatch = useDispatch();
  const reminders = useSelector((state: RootState) => state.events.reminders);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load reminder status from localStorage
    const storedReminders = localStorage.getItem("reminders");
    if (storedReminders) {
      dispatch(setReminders(JSON.parse(storedReminders)));
    }
  }, [dispatch]);

  // Handler to open the modal and set reminder
const handleSetReminder = (event: any) => {
  setSelectedEvent(event);
  setIsModalOpen(true);
  dispatch(toggleReminder(event._id));
};

// Handler to cancel the reminder
const handleCancelReminder = (event: any) => {
  dispatch(toggleReminder(event._id));
};


  const openModal = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const setReminder = (event: any) => {
    const updatedReminders = { ...reminders, [event._id]: true };
    setReminders(updatedReminders);
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
  };

  if (!Array.isArray(events) || events.length === 0) {
    return (
      <div className="glass flex justify-center items-center h-[20rem]">
        <h1 className="text-customTextColor text-3xl px-10">
          There is no event
        </h1>
      </div>
    );
  }

  const thisMonthEvents = events.filter((event: any) => isThisMonth(event));
  const nextMonthEvents = events.filter((event: any) => isNextMonth(event));

  return (
    <>
      <div className="mt-[6rem]"></div>

      {/* This Month's Events with Livestream Handling */}
      {thisMonthEvents.length > 0 ? (
        <>
          {thisMonthEvents.find((event: any) => event.livestreamURL) ? (
            <>
              {thisMonthEvents.map((event: any) =>
                event.livestreamURL ? (
                  <div key={event._id}>
                    <YoutubeEmbed source={event.livestreamURL} />
                  </div>
                ) : (
                  <div key={event._id} className="h-40 bg-primary text-white">
                    <h1 className="md:text-4xl p-10">Upcoming Events</h1>
                  </div>
                )
              )}
              {thisMonthEvents.filter((event) => event.livestreamURL).length >
              1 ? (
                <button
                  onClick={() => {
                    const nextEvent = thisMonthEvents.find(
                      (event) => event.livestreamURL
                    );
                    if (nextEvent) {
                      setSelectedEvent(nextEvent);
                    }
                  }}
                >
                  Switch to next livestream
                </button>
              ) : null}
            </>
          ) : (
            <div className="h-40 bg-primary text-white">
              <h1 className="md:text-4xl p-10">Upcoming Events</h1>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">No events this month</div>
      )}

      {/* This Month's Events List */}
      <h1 className="text-2xl md:text-4xl pt-10 mx-5">Upcoming Events: This Month</h1>
      {thisMonthEvents?.length > 0 ? (
        thisMonthEvents?.map((event: any) => (
          <div
            className="md:flex justify-center items-center gap-10 md:my-10 md:mx-20 shadow-2xl"
            key={event._id}
          >
            <div className="p-5">
              <Suspense fallback={<Loading />}>
                <div
                  className=""
                  style={{
                    width: "358px",
                    height: "280px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={urlForImage(event.thumbnail)}
                    alt={event.name}
                    width={800}
                    height={800}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </div>
              </Suspense>
            </div>
            <div>
              <div className="text-wrap">
                <h1 className="text-4xl py-5">{event.name}</h1>
                <p className="text-justify whitespace-pre-line pr-40">
                  {event.summary}
                </p>
              </div>
              <div className="py-10 pr-40">
                <div className="md:only-of-type:flex justify-between items-center">
                <button
                  className={`btn text-white ${reminders[event._id] ? "bg-customPrimary" : "bg-primary"}`}
                  onClick={() => {
                    if (reminders[event._id]) {
                      handleCancelReminder(event);
                    } else {
                      handleSetReminder(event);
                    }
                  }}
                >
                  <FaRegBell /> {reminders[event._id] ? "Cancel Reminder" : "Remind me"}
                </button>
                  <button className="btn text-primary">
                    <IoTimeOutline />
                    {`${new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                    })}`}
                    , {event.start} - {event.end}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">No events this month</div>
      )}

      {/* Next Month's Events List */}
      <h1 className="text-center text-2xl md:text-4xl">
        Upcoming Events: Next Month
      </h1>
      {nextMonthEvents.length > 0 ? (
        nextMonthEvents.map((event: any) => (
          <div
            className="md:flex justify-center items-center gap-10 md:my-10 md:mx-20 shadow-2xl"
            key={event._id}
          >
            <div>
              <Suspense fallback={<Loading />}>
                <div
                  className=""
                  style={{
                    width: "358px",
                    height: "280px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={urlForImage(event.thumbnail)}
                    alt={event.name}
                    width={800}
                    height={800}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </div>
              </Suspense>
            </div>
            <div>
              <div className="text-wrap">
                <h1 className="text-4xl py-5">{event.name}</h1>
                <p className="text-justify whitespace-pre-line pr-40">
                  {event.summary}
                </p>
              </div>
              <div className="py-10 pr-40">
                <div className="md:flex justify-between items-center">
                  <button
                    className={`btn text-white ${reminders[event._id] ? "bg-customPrimary" : "bg-primary"}`}
                    onClick={() => {
                      openModal(event);
                      setReminder(event);
                    }}
                  >
                    <FaRegBell /> Remind me
                  </button>
                  <button className="btn text-primary">
                    <IoTimeOutline />
                    {`${new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                    })}`}
                    , {event.start} - {event.end}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">No events next month</div>
      )}

      {/* EventForm Modal */}
      {isModalOpen && <EventForm event={selectedEvent} onClose={closeModal} />}
    </>
  );
}
