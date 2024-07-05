"use client";

import { useState } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { eventForm } from "@/lib/action";

export default function EventForm({ event, onClose }: any) {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      Loading.standard("Loading...");
      await eventForm({ title, email });
      setSubmitted(true);
      Loading.remove(); // Hide loading indicator
      Report.success(
        "Email Reminder",
        "Great! Your request was sent.",
        "close"
      ); // Show success notification
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
      Loading.remove(); // Hide loading indicator
      Report.failure(
        "Email Reminder",
        "Error! Something happened while submitting, please try again or contact our support team.",
        "close"
      );
    }
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 overflow-auto bg-white flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl w-6/12 p-10">
        <div className="flex justify-end">
        <button onClick={onClose}>X</button>
        </div>
      <div className="p-5">
        <h1 className="text-3xl text-center">Create Email Reminder</h1>
      </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="event" className="form-control">
              <div className="label">
                <span className="label-text">Event</span>
              </div>
              <input
                type="text"
                placeholder="Property Showcase"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="event" className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="serinawechie@gmail.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center mt-10">
          {error && <p className="text-red-500">{error}</p>}
          {!submitted && (
            <button
              className="btn bg-primary text-white font-bold"
              type="submit"
            >
              Remind me
            </button>
          )}
        </div>
        </form>
      </div>
    </div>
  );
}
