<<<<<<< HEAD
import Link from "next/link";
import React from "react";

function ContactUsBtn() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[4rem] my-[7rem] wrapper">
      <Link href="/services">
        <button className="w-[353px] h-[83px] border-[1px] rounded-lg border-primary text-primary text-base font-semibold bg-white ">
          Check out our other services
        </button>
      </Link>
      <Link href="/contact">
        <button className="w-[353px] h-[83px] border-[1px] rounded-lg border-primary text-primary text-base font-semibold bg-white ">
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default ContactUsBtn;
=======
import React from 'react'

function ContactUsBtn() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[4rem] my-[7rem] wrapper">
      <Link href="/services">
        <button className="w-[353px] h-[83px] border-[1px] rounded-lg border-primary text-primary text-base font-semibold bg-white ">
          Check out our other services
        </button>
      </Link>
      <Link href="/contact">
        <button className="w-[353px] h-[83px] border-[1px] rounded-lg border-primary text-primary text-base font-semibold bg-white ">
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default ContactUsBtn
>>>>>>> b361d4b (I worked on the Property Listing Card)
