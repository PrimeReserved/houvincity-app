"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import Calendar from "@/public/images/blog/Icon/Calendar2.svg";
import { Property } from "@/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../Blog/Cards/RichTextComponents";
import Loading from "@/app/loading";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { FiDownload } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

interface PropertyDetailedProps {
  property: Property;
}

function PropertyDetailed({ property }: Readonly<PropertyDetailedProps>) {
  const router = useRouter();

  const handleNavigateToPayment = () => {
    if (property.budget !== undefined) {
      const budget = parseFloat(property.budget.replace(/,/g, ""));
      if (!isNaN(budget)) {
        router.push(`/property-payment?amount=${property.budget}`);
      } else {
        console.error("Invalid budget value");
      }
    } else {
      console.error("Budget is undefined");
    }
  };

  if (!property) {
    return null;
  }

  return (
    <div className="wrapper mb-10">
      <div className="flex justify-center items-center px-10 mt-[10rem] ">
        {property?.fullPropertyImage && (
          <Suspense fallback={<Loading />}>
            <Image
              src={urlForImage(property?.fullPropertyImage?.asset?._ref)}
              alt="House1"
              width={1500}
              height={100}
            />
          </Suspense>
        )}
      </div>
      <div className="grid grid-cols-3 px-10  gap-2 justify-center items-center mt-12 mx-auto">
        {property?.leftSidePropertyImage && (
          <Suspense fallback={<Loading />}>
            <Image
              src={urlForImage(property?.leftSidePropertyImage?.asset?._ref)}
              alt="House2"
              width={385}
              height={300}
            />
          </Suspense>
        )}
        {property.middlePropertyImage && (
          <Suspense fallback={<Loading />}>
            <Image
              src={urlForImage(property?.middlePropertyImage.asset._ref)}
              alt="House3"
              width={385}
              height={300}
            />
          </Suspense>
        )}
        {property.rightSidePropertyImage && (
          <Suspense fallback={<Loading />}>
            <Image
              src={urlForImage(property?.rightSidePropertyImage.asset._ref)}
              alt="House4"
              width={385}
              height={300}
            />
          </Suspense>
        )}
      </div>
      <div className="mt-10 px-10">
        <p className=" text-customPrimary text-base font-semibold  lg:w-[50%] md:w-[60%] w-[75%] pb-5">
          {property.location}
        </p>
        <p className=" text-primary text-sm lg:w-[50%] md:w-[60%] w-[75%] ">
          {property.propertySize} plots
        </p>

        <p className=" text-customPrimary text-lg lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Select Plots to Purchase
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-5 lg:gap-10">
        <div className="border-2 p-4 rounded-lg border-primary cursor-pointer">
          <p className="font-medium">{property.propertySize} SQM. (AE-H 69)</p>
          <p className="text-lg">N{property.budget}</p>
          <button className="text-sm text-primary" onClick={handleNavigateToPayment}>Click to purchase</button>
        </div>
        <div
          className="border-2 p-4 rounded-lg border-red-500"
          style={{ pointerEvents: "none" }}
        >
          <p className="font-medium">{property.propertySize} SQM. (AE-H 69)</p>
          <p className="text-lg">N{property.budget}</p>
          <p className="text-sm text-red-500">Sold out</p>
        </div>
        <div className="border-2 p-4 rounded-lg border-primary cursor-pointer">
          <p className="font-medium">{property.propertySize} SQM. (AE-H 69)</p>
          <p className="text-lg">N{property.budget}</p>
          <p className="text-sm text-primary">Click to purchase</p>
        </div>
        <div className="border-2 p-4 rounded-lg border-primary cursor-pointer">
          <p className="font-medium">{property.propertySize} SQM. (AE-H 69)</p>
          <p className="text-lg">N{property.budget}</p>
          <p className="text-sm text-primary">Click to purchase</p>
        </div>
      </div>

      <div className="flex justify-center my-20">
        <Link
          href="/files/SILVER PARK_Subdivision-Model-1.pdf"
          target="_blank"
          download
        >
          <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3">
            <FiDownload />
            Download Layout
          </button>
        </Link>
      </div>

      <div className="mx-10">
        <h1 className=" text-customSecondary font-medium text-2xl">
          About Property
        </h1>
      </div> 

      <p className="text-customTextColor text-base leading-loose my-10 px-10">
        {property?.body ? (
          <PortableText
            value={property?.body}
            components={RichTextComponents}
          />
        ) : null}
      </p>

      <div className="flex justify-center my-10">
        {property.youtubeLink ? (
          <YoutubeEmbed source={property.youtubeLink} />
        ) : (
          <div>No video available</div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center mt-16 gap-5 ">
        <Link href="/contact">
          <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3">
            <FaRegCalendarAlt />
            Contact Us For an Inspection Today
          </button>
        </Link>
        <button
          className=" bg-primary hover:border-customSecondary hover:text-white text-white font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3"
          onClick={() => router.push(`${process.env.NEXT_PUBLIC_PROPERTY_PAYMENT_URL}`)}
        >
          <p className="text-sm font-semibold ">
            Continue
          </p>
        </button>
      </div>
    </div>
  );
}

export default PropertyDetailed;
