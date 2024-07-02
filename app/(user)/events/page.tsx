"use client";

import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '@/features/events/eventSlice';
import { RootState, AppDispatch } from '@/store';

import ErrorBoundary from "@/components/ErrorBoundary";
import EventList from "@/components/Event/EventList";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import isEmptyArray from '@/utils/helper-functions/isEmptyArray';
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from 'notiflix/build/notiflix-report-aio';
import Contact from '@/components/Contact/Contact';


export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error } = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  isEmptyArray({
    events,
    loading,
    error
  });

  if (error) {
    return Report.warning('An Error Occured', error, 'close', {width: '360px',});
  }

    return (
        <>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense>
            <EventList events={events} />
            <Contact />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
            <FooterHome />
        </ErrorBoundary>
        </>
    );
}