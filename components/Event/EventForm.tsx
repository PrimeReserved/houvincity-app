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
        "Newsletter Subscription",
        "Great! You have been subscribed to our newsletter.",
        "close"
      ); // Show success notification
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
      Loading.remove(); // Hide loading indicator
      Report.failure(
        "Newsletter Subscription",
        "Error! Something happened while submitting, please try again or contact our support team.",
        "close"
      );
    }
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
     
      
      <div className="card bg-base-100 shadow-xl w-96">
      <div>
        <h1>Create Email Reminder</h1>
        <button onClick={onClose}>X</button>
      </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Event</span>
              </div>
              <input
                type="text"
                placeholder="Property Showcase"
                className="input input-bordered w-full max-w-xs"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="serinawechie@gmail.com"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </form>

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
      </div>
    </div>
  );
}
