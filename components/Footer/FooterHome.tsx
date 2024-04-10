"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "../Socials/SocialLink";

import Logo from "@/public/logo.svg";
import Instagram from "@/public/images/socials/path1165.svg";
import Twitter from "@/public/images/socials/path1009.svg";
import Facebook from "@/public/images/socials/Vector.svg";
import Youtube from "@/public/images/socials/youtube.png";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const FooterHome = () => {
  return (
<<<<<<< HEAD
    <footer className="relative z-10 bg-customPrimary pt-1 md:pt-20 lg:pt-24">
=======
    <footer className="relative z-10 bg-customPrimary pt-16 dark:bg-customDarkBg md:pt-20 lg:pt-24">
>>>>>>> b361d4b (I worked on the Property Listing Card)
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" ">
            {/* intro */}
            <div className=" pl-4">
              <div className="mb-12 lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src={Logo}
                    alt="logo"
<<<<<<< HEAD
                    className="block"
=======
                    className=" dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src={Logo}
                    alt="logo"
                    className="hidden  dark:block"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                    width={140}
                    height={30}
                  />
                </Link>
<<<<<<< HEAD
                <p className="mb-9 md:text-[14px] text-[14px] font-semibold leading-loose text-white px-4 w-[100%]  md:w-[100%] lg:w-[75%] mt-2">
=======
                <p className="dark:text-white-dark mb-9 md:text-[14px] text-[14px] font-light leading-loose text-white px-4 w-[100%]  md:w-[100%] lg:w-[75%] mt-2">
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  Your Trusted Partner in Real Estate Excellence. Unlock your
                  dream home with our dedicated team, offering tailored
                  solutions for every property journey. From starter homes to
                  luxury estates, we&lsquo;re committed to making your real
                  estate experience seamless and rewarding.
                </p>
              </div>
              {/* Contact Us Section */}
<<<<<<< HEAD
              <div id="contact" className="w-[100%] pl-4 mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16 -mt-4">
                <div className="mb-9 text-[14px] font-semibold leading-relaxed text-white">
                  <h1 className="text-[18px]">Contact Us:</h1>
=======
              <div className="w-[100%] pl-4 mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16 -mt-4">
                <div className="dark:text-white-dark mb-9 text-[14px] font-light leading-relaxed text-white">
                  <h1 className="text-[18px] ">Contact Us:</h1>
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  <p className="pt-3">Phone Number: +2348034652178</p>
                  <p className="py-2">
                    Address: 31C Rumuola Road by Rumuola Junction.
                  </p>
                  <p className="pt">Email: info@houvincityltd.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
<<<<<<< HEAD
            <div className="flex md:space-x-[12rem] space-x-10 justify-between md:justify-normal px-8">
=======
            <div className="flex md:space-x-[12rem] justify-between md:justify-normal px-8">
>>>>>>> b361d4b (I worked on the Property Listing Card)
              <QuickLinks />
              <Services />
            </div>

            {/* Social Media Links */}
            <div className=" md:hidden border-t-[1px] "></div>
            <div className="flex md:-mt-6 md:ml-7 my-6 items-center  md:justify-normal justify-center gap-10 md:gap-0">
              <span className="md:text-[20px] text-[14px] text-white md:mr-10">
                Follow Us
              </span>
              <div className="flex md:space-x-14">
                <SocialLink
<<<<<<< HEAD
                  href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`}
=======
                  href="https://www.linkedin.com/company/primereserved"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  image={Instagram}
                  alt="Instagram"
                />
                <SocialLink
<<<<<<< HEAD
                  href={`${process.env.NEXT_PUBLIC_TWITTER_URL}`}
=======
                  href="https://www.instagram.com/primereservedtech"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  image={Twitter}
                  alt="Twitter"
                />
                <SocialLink
<<<<<<< HEAD
                  href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`}
=======
                  href="https://www.facebook.com/groups/1554028415142497/"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  image={Facebook}
                  alt="Facebook"
                />
                <SocialLink
<<<<<<< HEAD
                  href={`${process.env.NEXT_PUBLIC_YOUTUBE_URL}`}
=======
                  href="https://www.youtube.com/@primereservedtech"
>>>>>>> b361d4b (I worked on the Property Listing Card)
                  image={Youtube}
                  alt="Youtube"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t-[1px] "></div>
<<<<<<< HEAD
        <Copyright />
=======

        <Copyright />

>>>>>>> b361d4b (I worked on the Property Listing Card)
        {/* Mobile */}
      </div>
    </footer>
  );
};

const QuickLinks = () => (
  <div className="mb-12 lg:mb-16">
<<<<<<< HEAD
    <h2 className="mb-10 text-2xl font-semibold text-white ">
=======
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
>>>>>>> b361d4b (I worked on the Property Listing Card)
      NAVIGATION
    </h2>
    <ul>
      <li>
        <Link
          href="/"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/property"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          Property
        </Link>
      </li>
      <li>
        <Link
          href="/services"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/about"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
);

const Services = () => (
  <div className="mb-12 mr-4 lg:mb-16 lg:mr-2">
<<<<<<< HEAD
    <h2 className="mb-10 text-2xl font-semibold text-white ">
=======
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
>>>>>>> b361d4b (I worked on the Property Listing Card)
      SUPPORT
    </h2>
    <ul>
      <li>
        <Link
<<<<<<< HEAD
          href="/contact#contact"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          href="/services#webDevelopment"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/faqs"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          FAQS
        </Link>
      </li>
      <li>
        <Link
          href="/privacy"
<<<<<<< HEAD
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
=======
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
        >
          Privacy Policy
        </Link>
      </li>
<<<<<<< HEAD
      <li>
        <Link
          href="/terms-and-conditions"
          className="mb-4 md:inline-block hidden text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Terms and Conditions
        </Link>
      </li>
=======
>>>>>>> b361d4b (I worked on the Property Listing Card)
    </ul>
  </div>
);

const Copyright = () => (
<<<<<<< HEAD
  <div className="items-center justify-center py-8 font-semibold flex">
    <p className=" text-[14px] md:text-base text-white ">
      Copyright © {getCurrentYear()} Hovincity. All rights reserved.
=======
  <div className="items-center justify-center py-8 font-light flex">
    <p className=" text-[14px] md:text-base text-white dark:text-white">
      Copyright © {getCurrentYear()} PrimeReserved. All rights reserved.
>>>>>>> b361d4b (I worked on the Property Listing Card)
    </p>
  </div>
);

export default FooterHome;
