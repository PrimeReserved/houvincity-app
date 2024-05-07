import React, { Suspense } from "react";
import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import Calendar from "@/public/images/blog/Icon/Calendar2.svg";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header/HeaderHome";
import FooterHome from "../Footer/FooterHome";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Property } from "@/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../Blog/Cards/RichTextComponents";
import Loading from "@/app/loading";

export const revalidate = 30;
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface PropertyDetailedProps {
  property: Property;
}

function PropertyDetailed({ property }: Readonly<PropertyDetailedProps>) {
  console.log(property.youtubeLink);
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <div className="wrapper mb-10">
        <div className="flex justify-center items-center">
          {property?.fullPropertyImage && (
            <Image src={builder
              .image(property?.fullPropertyImage?.asset?._ref)
              .width(1500)
              .height(100)
              .quality(100)
              .url()} alt="House1" width={1500} height={100} />
          )}
        </div>
        <div className="grid grid-cols-3 px-10  gap-2 justify-center items-center mt-12 mx-auto">
          {property?.leftSidePropertyImage && (
            <Image src={builder
              .image(property?.leftSidePropertyImage?.asset?._ref)
              .width(385)
              .height(300)
              .quality(100)
              .url()} alt="House2" width={385} height={300} />
          )}
          {property.middlePropertyImage && (
            <Suspense fallback={<Loading />}>
              <Image src={builder
                .image(property?.middlePropertyImage.asset._ref)
                .width(385)
                .height(300)
                .quality(100)
                .url()} alt="House3" width={385} height={300} />
            </Suspense>
          )}
          {property.rightSidePropertyImage && (
            <Image src={builder
              .image(property?.rightSidePropertyImage.asset._ref)
              .width(385)
              .height(300)
              .quality(100)
              .url()} alt="House4" width={385} height={300} />
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
            <PortableText value={property?.body} components={RichTextComponents} />
          ) : null}
        </p>

        <div className="flex justify-center my-10">
          <YoutubeEmbed source={property.youtubeLink} />
        </div>

        <div className="flex justify-center my-20">
          <button className="flex gap-2 items-center px-6 py-5 bg-primary rounded-md ">
            <Image src={Calendar} alt="Calendar" width={13} height={13} />
            <p className="text-sm font-semibold text-white">
              Contact Us For an Inspection Today
            </p>
          </button>
        </div>
      </div>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  );
}

export default PropertyDetailed;