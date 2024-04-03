"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "../Socials/SocialLink";

import Logo from "@/public/logo.svg";
import Instagram from "@/public/images/socials/path1165.svg"
import Twitter from "@/public/images/socials/path1009.svg"
import Facebook from "@/public/images/socials/Vector.svg"
import Youtube from "@/public/images/socials/youtube.png"

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const FooterHome = () => {
  return (
    <footer className="relative z-10 bg-customPrimary pt-16 dark:bg-customDarkBg md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-6/12">
            <div className="mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src={Logo}
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src={Logo}
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="dark:text-white-dark mb-9 text-base font-light leading-relaxed text-white">
                Your Trusted Partner in Real Estate Excellence. Unlock your dream home with our dedicated team,
                offering tailored solutions for every property journey.
                From starter homes to luxury estates, we&lsquo;re committed to making your real estate experience seamless and rewarding.
              </p>
            </div>
          </div>

          <div className="sm:w-2/2 flex w-full flex-wrap justify-between px-4 md:w-1/2 lg:w-5/12 xl:w-5/12">
            <QuickLinks />
            <Services />
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* Contact Us Section */}
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-6/12 mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16">
            <div className="dark:text-white-dark mb-9 text-base font-light leading-relaxed text-white">
              <h1 className="text-md md:w">Contact Us:</h1>
              <p>Phone Number: +2348034652178</p>
              <p>Address: 31C Rumuola Road by Rumuola Junction.</p>
              <p>Email: info@houvincityltd.com</p>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="w-full sm:w-auto px-4 md:w-1/2 lg:w-5/12 xl:w-5/12 flex items-center">
            <span className="text-md mr-6 text-white lg:text-2xl">Follow Us</span>
            <SocialLink
              href="https://www.linkedin.com/company/primereserved"
              image={Instagram}
              alt="Instagram"
            />
            <SocialLink
              href="https://www.instagram.com/primereservedtech"
              image={Twitter}
              alt="Twitter"
            />
            <SocialLink
              href="https://www.facebook.com/groups/1554028415142497/"
              image={Facebook}
              alt="Facebook"
            />
            <SocialLink
              href="https://www.youtube.com/@primereservedtech"
              image={Youtube}
              alt="Youtube"
            />
          </div>
        </div>
        <hr className="h-px w-full bg-[#D2D8E183] xs:flex md:hidden" />


        <hr className="h-px w-full bg-[#D2D8E183]" />

        <Copyright />

        {/* Mobile */}
      </div>
    </footer>
  );
};



const QuickLinks = () => (
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
      NAVIGATION
    </h2>
    <ul>
      <li>
        <Link
          href="/"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/property"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Property
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
);

const Services = () => (
  <div className="mb-12 mr-4 lg:mb-16 lg:mr-2">
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
      SUPPORT
    </h2>
    <ul>
      <li>
        <Link
          href="/services#webDevelopment"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/faqs"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          FAQS
        </Link>
      </li>
      <li>
        <Link
          href="/privacy"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Privacy Policy
        </Link>
      </li>
    </ul>
  </div>
);

const Copyright = () => (
  <div className="items-center justify-center py-8 font-light md:flex">
    <p className="text-base text-white dark:text-white">
      Copyright © {getCurrentYear()} PrimeReserved. All rights reserved.
    </p>
  </div>

);

export default FooterHome;