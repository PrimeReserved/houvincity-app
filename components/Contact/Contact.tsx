"use client"

import { useState } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { contact } from "@/lib/action";

function Contact() {
  return (
    <div>
      <div className="py-[10rem] flex-col justify-center items-center">
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;

function ContactForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      Loading.standard('Loading...');
      await contact({ firstName, lastName, email, phoneNumber, message });
      setSubmitted(true);
      Loading.remove();
      Report.success('Contact Form', 'Thank you for your feeback, one of our agents would contact you shortly.', 'close'); // Show success notification
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred');
      Loading.remove(); // Hide loading indicator
      Report.failure('Newsletter Subscription', 'Error! Something happened while submitting, please try again or contact our support team.', 'close')
    }

  };

  return (
    <>
      <h1>Create Form</h1>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center md:mx-8">
      <section className="md:px-10 md:py-5 text-white bg-customSecondary lg:w-6/12 w-[100%]">
          <section className="p-5">
            <h2 className="mb-5 text-2xl">Discover our work ethics</h2>
            <h1 className="text-4xl mb-5">About Our Company</h1>
            <p>
              We are a group of real estate engineers with the core value of
              satisfying our clients needs and desires. We set out principles
              and work towards the improvements, both for us as a company and to
              our clients, their satisfaction is our utmost priority
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Mission</h3>
            <p>
              To be the leading real estate company that promotes the safety of
              clients’ investments through an automated property insurance
              system.
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Vision</h3>
            <p>
              LTo revolutionize the real estate system of operation by
              introducing a viable system that eliminates fraud, property theft,
              or land grabbing through adequate safety measures, and building
              smart cities that meet international standards, in real estate and
              housing.
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Value</h3>
            <p>Viability, Innovativeness, Credibility and Excellence (VICE)</p>
          </section>
        </section>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center">
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                placeholder="Serina"
                className="input input-bordered w-full max-w-xs"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                placeholder="Doe"
                className="input input-bordered w-full max-w-xs"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center items-center">
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="serinawill-i-am@gmail.com"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input
                type="text"
                placeholder="Wechie"
                className="input input-bordered w-full max-w-xs"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          {error && (
          <p className="text-red-500">{error}</p>
        )}
        {!submitted && (
          <div className="flex justify-center mt-10">
            <button className="btn bg-primary text-white font-bold" type="submit">
              submit
            </button>
          </div>
        )}
        </form>
        
      </div>
    </>
  );
}
