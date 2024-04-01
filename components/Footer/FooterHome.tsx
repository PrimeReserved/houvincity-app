"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterHome = () => {
  return (
    <footer className="relative z-10 bg-customSecondary pt-16 dark:bg-customDarkBg md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-6/12">
            <div className="mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/primereservedlogo.png"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/primereservedlogo.png"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="dark:text-white-dark mb-9 text-base font-light leading-relaxed text-white">
                The seasoned Software Development Agency specialized in building
                cutting-edge, user-focused digital solutions tailored for
                businesses of all sizes, from startups to enterprises.
              </p>

              <div className="mt-8 hidden items-center md:flex">
                <span className="text-md mr-6 text-white lg:text-2xl">
                  Follow Us
                </span>
                <SocialLink
                  href="https://www.linkedin.com/company/primereserved"
                  image="/images/icons/linkedIn-logo.svg"
                  alt="LinkedIn"
                />
                <SocialLink
                  href="https://www.youtube.com/@primereservedtech"
                  image="/images/icons/youtube-logo.svg"
                  alt="Youtube"
                />
                <SocialLink
                  href="https://www.instagram.com/primereservedtech"
                  image="/images/icons/ig-logo.svg"
                  alt="Instagram"
                />
                <SocialLink
                  href="https://www.facebook.com/groups/1554028415142497/"
                  image="/images/icons/fb-logo.svg"
                  alt="Facebook"
                />
              </div>
            </div>
          </div>

          <div className="sm:w-2/2 flex w-full flex-wrap justify-between px-4 md:w-1/2 lg:w-5/12 xl:w-5/12">
            <QuickLinks />
            <Services />
          </div>
        </div>
        <hr className="h-px w-full bg-[#D2D8E183] xs:flex md:hidden" />

        <div className="my-4 flex items-center justify-center xs:flex md:hidden">
          <span className="text-md mr-6 text-white">Follow Us</span>
          <SocialLink
            href="https://www.linkedin.com/company/primereserved"
            image="/images/icons/linkedIn-logo.svg"
            alt="LinkedIn"
          />
          <SocialLink
            href="https://www.youtube.com/@primereservedtech"
            image="/images/icons/youtube-logo.svg"
            alt="Youtube"
          />
          <SocialLink
            href="https://www.instagram.com/primereservedtech"
            image="/images/icons/ig-logo.svg"
            alt="Instagram"
          />
          <SocialLink
            href="https://www.facebook.com/groups/1554028415142497/"
            image="/images/icons/fb-logo.svg"
            alt="Facebook"
          />
        </div>
        <hr className="h-px w-full bg-[#D2D8E183]" />

        <Copyright />

        {/* Mobile */}
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; image: string; alt: string }> = ({
  href,
  image,
  alt,
}) => (
  <a
    href={href}
    aria-label="social-link"
    className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
  >
    <Image src={image} alt={alt} width={36} height={30} />
  </a>
);

const QuickLinks = () => (
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
      QUICK LINKS
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
          href="/about"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          About us
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
          href="/team"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Meet the team
        </Link>
      </li>
    </ul>
  </div>
);

const Services = () => (
  <div className="mb-12 mr-4 lg:mb-16 lg:mr-2">
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
      SERVICES
    </h2>
    <ul>
      <li>
        <Link
          href="/services#webDevelopment"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Web Development
        </Link>
      </li>
      <li>
        <Link
          href="/services#webDesign"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Web Design
        </Link>
      </li>
      <li>
        <Link
          href="/services#mobileDevelopment"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Mobile Development
        </Link>
      </li>
      <li>
        <Link
          href="/services#teamTraining"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Team Training
        </Link>
      </li>
      <li>
        <Link
          href="/services#securityAudits"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Security Audits
        </Link>
      </li>
      <li>
        <Link
          href="/services#technicalSupport"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Technical Support
        </Link>
      </li>
    </ul>
  </div>
);

const Copyright = () => (
  <div className="items-center justify-between py-8 font-light md:flex">
    <p className="text-center text-base text-white dark:text-white">
      Copyright © 2024 PrimeReserved. All rights reserved
    </p>
    <div className="flex items-center justify-center gap-8">
      <Link href="/terms" className="text-base text-white dark:text-white">
        Terms and Conditions
      </Link>
      <Link href="/privacy" className="text-base text-white dark:text-white">
        Privacy Policy
      </Link>
    </div>
  </div>
);

export default FooterHome;