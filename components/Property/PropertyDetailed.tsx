"use client"

import { Suspense } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import Calendar from "@/public/images/blog/Icon/Calendar2.svg";
import { Property } from "@/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../Blog/Cards/RichTextComponents";
import Loading from "@/app/loading";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface PropertyDetailedProps {
  property: Property;
}

function PropertyDetailed({ property }: Readonly<PropertyDetailedProps>) {
  const router = useRouter();

  if (!property) {
    return null;
  }

  return (
    <div className="wrapper mb-10">
      <div className="flex justify-center items-center px-10">
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
        <p className=" text-customPrimary text-base font-semibold border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] pb-5">
          {property.location}
        </p>
        <p className=" text-customPrimary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Asking Price - N{property.budget} (Open for slight negotiation)
        </p>
        <p className=" text-customPrimary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Legal | Survey N{property.legalSurvey}
        </p>
        <p className=" text-customPrimary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Plot Size - {property.propertySize} sqft
        </p>
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

      <div className="flex justify-center my-20 gap-10">
        <Link href="#contact">
          <button className="flex gap-2 items-center px-6 py-5 bg-primary rounded-md ">
            <Image src={Calendar} alt="Calendar" width={13} height={13} />
            <p className="text-sm font-semibold text-white">
              Contact Us For an Inspection Today
            </p>
          </button>
        </Link>
        <button className="flex gap-2 items-center px-6 py-5 bg-primary rounded-md"
          onClick={() => router.push(`${process.env.NEXT_PUBLIC_PAYSTACK_URL}`)}
        >
          <Image src={Calendar} alt="Calendar" width={13} height={13} />
          <p className="text-sm font-semibold text-white">
            Buy this property
          </p>
        </button>
      </div>
    </div>
  );
}

export default PropertyDetailed;
