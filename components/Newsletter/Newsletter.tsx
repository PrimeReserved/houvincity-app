"use client"

import { useState } from "react";
import { subscribe } from "@/lib/action";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';


function Newsletter() {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      Loading.standard('Loading...');
      await subscribe(email);
      setSubmitted(true);
      Loading.remove(); // Hide loading indicator
      Report.success('Newsletter Subscription', 'Great! You have been subscribed to our newsletter.', 'close'); // Show success notification
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred');
      Loading.remove(); // Hide loading indicator
      Report.failure('Newsletter Subscription', 'Error! Something happened while submitting, please try again or contact our support team.', 'close')
    }
  };


  
  return (
    <div>
      <div className="hero min-h-[30rem] bg-white">
        <div className="z-0 flex flex-col items-center justify-center w-full gap-4 p-4 text-center">
          <div className=" md:max-w-[38rem]">
            <h1 className=" text-[28px] md:text-[50px] text-[#040A3B] font-medium md:font-semibold">
              Never Miss A Beat
            </h1>
            <p className="py-3 text-[#79747E] ">
              Stay In the Loop with our newsletter! Subscribe now for exclusive
              your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="md:w-[60%] w-[100%]">
            <input
              type="email"
              placeholder="Enter your email Address"
              className="p-4 focus-within:border-2 focus-within:border-primary bg-white rounded-full w-full border-[1px] h-[4rem] md:h-[5rem] relative shadow-md text-[14px] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           {error && (
              <p className="text-red-500">{error}</p>
            )}
            {!submitted && (
              <button className="btn border-none absolute text-white -ml-[8rem] md:-ml-[10rem] mt-2 md:mt-5 text-[12px] w-[7rem] md:w-[8rem]  h-[2.5rem] bg-[#6DBA3A] rounded-md hover:border-primary hover:bg-white hover:text-primary hover:outline hover:outline-primary hover:border-2"
                type="submit"
              >
                Subscribe
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )};

export default Newsletter;


