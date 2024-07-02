"use client";

import { useState } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { contact } from "@/lib/action";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import SocialLogos from "../Socials/SocialLogos";

function Contact() {
  return (
    <div className="md:my-[10rem] my-[8rem] ">
      <div className=" pb-10  md:pb-[5rem] flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-[40px] ">Contact Us</h1>
        <p className="text-anotherGray">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      Loading.standard("Loading...");
      await contact({ firstName, lastName, email, phoneNumber, message });
      setSubmitted(true);
      Loading.remove();
      Report.success(
        "Contact Form",
        "Thank you for your feeback, one of our agents would contact you shortly.",
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

  const links = [
    {
      id: "1",
      logo: BiSolidPhoneCall,
      details: "+234 803 465 2178",
    },
    {
      id: "2",
      logo: MdMail,
      details: "info@houvincityltd.com",
    },
    {
      id: "3",
      logo: FaLocationDot,
      details: "31C Rumuola Road by Rumuola Junction",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:flex-row items-center justify-between md:mx-8 shadow-md rounded-lg p-2 mx-[1rem]  ">
        <section className="md:px-10 md:py-5 text-white bg-anotherBlack  w-[100%] rounded-lg h-[647px]  ">
          <section className=" lg:mb-5 p-5 flex flex-col justify-center items-center lg:justify-normal lg:items-start pt-6">
            <h3 className=" text-[25px] md:text-[38px] ">Contact Information</h3>
            <p className="text-[14px] md:text-base pt-1 ">Say something to start a chat!</p>
          </section>
          <div className="flex flex-col  justify-start  md:justify-center md:pt-10">
            {links.map((link) => (
              <section className="mb-5 p-5" key={link.id}>
                <div className="flex flex-col md:flex-row items-center gap-3  md:gap-10 ">
                  <link.logo className="md:text-lg  text-2xl"/>
                  <p className="xl:text-base lg:text-[15px] ">{link.details}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="pt-10 md:pl-5 flex justify-center lg:justify-start  ">
            <SocialLogos />
          </div>
        </section>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="flex justify-between items-center gap-5 mt-10">
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                placeholder="Serina"
                className=" mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D] "
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
                className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="flex  justify-between items-center gap-5 mt-10">
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="serinawill-i-am@gmail.com"
                className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
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
                className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-10">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="mt-3 outline-none border-b-[1px] border-[#8D8D8D]"
              placeholder="Bio"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>

          </div>
          {error && <p className="text-red-500">{error}</p>}
          {!submitted && (
            <div className="flex justify-center mt-10">
              <button
                className="btn bg-primary text-white font-bold px-10"
                type="submit"
              >
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
  );
}
