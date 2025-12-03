'use client';

import { useState } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { contact } from '@/lib/action';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import SocialLogos from '../Socials/SocialLogos';

function Contact() {
  return (
    <div className="md:mt-[10rem] mt-[8rem] ">
      <div className="flex-col justify-center items-center text-center">
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      Loading.standard('Loading...');
      await contact({ firstName, lastName, email, phoneNumber, message });
      Loading.remove();
      clearForm(); // Clear the form after successful submission
      Report.success(
        'Contact Form',
        'Thank you for your feedback, one of our agents would contact you shortly.',
        'close'
      );
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred');
      Loading.remove();
      Report.failure(
        'Newsletter Subscription',
        'Error! Something happened while submitting, please try again or contact our support team.',
        'close'
      );
    }
  };

  const links = [
    {
      id: '1',
      logo: BiSolidPhoneCall,
      details: '07074693320, 07074693321',
    },
    {
      id: '2',
      logo: MdMail,
      details: 'info@houvincity.com',
    },
    {
      id: '3',
      logo: FaLocationDot,
      details:
        "#36b Ada-George Road, First Floor, Helen's Plaza. By Peperoni Junction, Rumepirikom, Port Harcourt.",
    },
  ];

  return (
    <div className="flex items-center justify-center shadow-md rounded-lg p-2  ">
      <form onSubmit={handleSubmit} className="p-5">
        <div className="flex justify-between items-center gap-5 mt-2">
          <label htmlFor="firstName" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              className=" mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D] "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastName" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div className="flex  justify-between items-center gap-5 mt-10">
          <label htmlFor="email" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="phoneNumber" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone number"
              className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-10">
          <label htmlFor="message" className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              id="message"
              className="mt-3 outline-none border-b-[1px] border-[#8D8D8D]"
              placeholder="Please write down your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center mt-10">
          <button
            className="bg-primary text-white font-bold px-10 py-3 rounded-lg hover:bg-primary/90 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
