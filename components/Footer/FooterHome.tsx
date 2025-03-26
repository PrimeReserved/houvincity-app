'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialLink from '../Socials/SocialLink';
import Logo from '@/public/HCL Logo.png';
import Instagram from '@/public/images/socials/path1165.svg';
import Twitter from '@/public/images/socials/path1009.svg';
import Facebook from '@/public/images/socials/Vector.svg';
import Youtube from '@/public/images/socials/youtube.png';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const FooterHome = () => {
  return (
    <footer className="relative z-10 bg-customPrimary pt-1 md:pt-20 lg:pt-24">
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
                    className="block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 md:text-[14px] text-[14px] font-semibold leading-loose text-white px-4 w-[100%]  md:w-[100%] lg:w-[75%] mt-2">
                  Your Trusted Partner in Real Estate Excellence. Unlock your
                  dream home with our dedicated team, offering tailored
                  solutions for every property journey. From starter homes to
                  luxury estates, we&lsquo;re committed to making your real
                  estate experience seamless and rewarding.
                </p>
              </div>
              {/* Contact Us Section */}
              <div
                id="contact"
                className="w-[100%] pl-4 mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16 -mt-4"
              >
                <div className="mb-9 text-[14px] font-semibold leading-relaxed text-white">
                  <h1 className="text-[18px]">Contact Us:</h1>
                  <p className="pt-3">
                    Phone Number: +2347074693320, +2347074693321
                  </p>
                  <p className="py-2">
                    Address: #36b Ada-George Road, First Floor, Helen&apos;s
                    Plaza. By Peperoni Junction, Rumepirikom, Port Harcourt.
                  </p>
                  <p className="pt">Email: info@houvincty.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex md:space-x-[12rem] space-x-10 justify-between md:justify-normal px-8">
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
                  href="https://www.instagram.com/hauvincitylimited?igsh=bm80bm5yYnlyaTc3"
                  image={Instagram}
                  alt="Instagram"
                />
                <SocialLink
                  href={`https://www.twitter.com/`}
                  image={Twitter}
                  alt="Twitter"
                />
                <SocialLink
                  href={`https://web.facebook.com/profile.php?id=100090655972772&mibextid=ZbWKwL&_rdc=1&_rdr`}
                  image={Facebook}
                  alt="Facebook"
                />
                <SocialLink
                  href={`https://www.youtube.com/@houvincitylimited?si=qkgeXk4KUHDTzyvF`}
                  image={Youtube}
                  alt="Youtube"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t-[1px] "></div>
        <Copyright />
        {/* Mobile */}
      </div>
    </footer>
  );
};

const QuickLinks = () => (
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-2xl font-semibold text-white ">NAVIGATION</h2>
    <ul>
      <li>
        <Link
          href="/"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/property"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Property
        </Link>
      </li>
      <li>
        <Link
          href="/events"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Events
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
);

const Services = () => (
  <div className="mb-12 mr-4 lg:mb-16 lg:mr-2">
    <h2 className="mb-10 text-2xl font-semibold text-white ">SUPPORT</h2>
    <ul>
      <li>
        <Link
          href="/news"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          News
        </Link>
      </li>

      <li>
        <Link
          href="/contact"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/faqs"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          FAQS
        </Link>
      </li>
      <li>
        <Link
          href="/privacy"
          className="mb-4 inline-block text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link
          href="/terms-and-conditions"
          className="mb-4 md:inline-block hidden text-base font-semibold text-white duration-300 hover:text-primary"
        >
          Terms and Conditions
        </Link>
      </li>
    </ul>
  </div>
);

const Copyright = () => (
  <div className="items-center justify-center py-8 font-semibold flex">
    <p className=" text-[14px] md:text-base text-white ">
      Copyright © {getCurrentYear()} Hovincity. All rights reserved.
    </p>
  </div>
);

export default FooterHome;
