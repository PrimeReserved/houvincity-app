import Houses1 from "@/public/images/property/house1.svg";
import { Property } from "@/typings";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}


interface HouseProps {
  properties: Property[];
}

const House: React.FC<HouseProps> = ({ properties }) => {
  const headerText = properties.some(property => property.propertyType === "House") ? "Houses" : "Land";

  if (properties.length === 0) {
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <h1 className="text-customTextColor text-4xl">There is currently no available property listing for now, kindly check back later</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className=" text-customPrimary font-bold text-4xl m-10">Houses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 xl:gap-10">
        {properties.map((property) => (
          <div
            className="bg-white rounded-lg transition duration-300 shadow-xl rounded-b-md"
            key={property._id}
          >
            <figure>
              <Image
                src={property?.propertyImage ? urlFor(property.propertyImage).url() : Houses1}
                alt={property?.title}
                width={355}
                height={285}
                layout="responsive"
                loading="lazy"
              />

            </figure>
            <div className="card-body mt-5 px-6 md:px-4 xl:px-6">
              <div className="flex justify-between ">
                <p className="card-title text-xs text-primary font-semibold">
                  {property?.title}
                </p>
                <div className="flex gap-1">
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 50 50"
                    >
                      <path d="M5 10c-1.645 0-3 1.355-3 3v15.188c.004.062.016.125.031.187v.031c-.449.707-.816 1.461-1.094 2.282C.318 32.52.051 34.62 0 37v13h7v-4c0-.832.203-1.266.469-1.531C7.734 44.203 8.168 44 9 44h32c.832 0 1.266.203 1.531.469.266.265.469.699.469 1.531v4h7V38.156c.004-.05.004-.105 0-.156 0-.344.008-.668 0-1-.05-2.379-.316-4.48-.938-6.313a10.437 10.437 0 00-1.093-2.25c.02-.082.031-.164.031-.25V13c0-1.645-1.355-3-3-3zm0 2h40c.563 0 1 .438 1 1v13.156a13.11 13.11 0 00-3-1.844V20c0-.703-.46-1.25-.969-1.594-.508-.343-1.129-.582-1.906-.781C38.57 17.227 36.387 17 33.5 17s-5.07.227-6.625.625c-.758.195-1.375.418-1.875.75-.5-.332-1.117-.555-1.875-.75C21.57 17.227 19.387 17 16.5 17s-5.07.227-6.625.625c-.777.2-1.398.438-1.906.781C7.46 18.75 7 19.296 7 20v4.313a13.11 13.11 0 00-3 1.843V13c0-.563.438-1 1-1zm11.5 7c2.781 0 4.844.234 6.125.563.64.164 1.082.363 1.281.5.082.054.086.062.094.062V22c-6.574.043-11.441.535-15 1.625v-3.5c.008 0 .012-.008.094-.063.199-.136.64-.335 1.281-.5C11.656 19.235 13.719 19 16.5 19zm17 0c2.781 0 4.844.234 6.125.563.64.164 1.082.363 1.281.5.082.054.086.062.094.062v3.5c-3.559-1.09-8.426-1.582-15-1.625v-1.875c.008 0 .012-.008.094-.063.199-.136.64-.335 1.281-.5C28.656 19.235 30.719 19 33.5 19zm-8.688 5c.106.016.208.016.313 0h.094c10.008.016 15.789 1.063 18.875 3.188 1.554 1.07 2.496 2.398 3.093 4.156.52 1.531.731 3.418.782 5.656H2.03c.051-2.238.262-4.125.781-5.656.598-1.758 1.54-3.086 3.094-4.157 3.086-2.128 8.88-3.175 18.907-3.187zM2 39h46v9h-3v-2c0-1.168-.297-2.234-1.031-2.969C43.234 42.297 42.168 42 41 42H9c-1.168 0-2.234.297-2.969 1.031C5.297 43.766 5 44.832 5 46v2H2z"></path>
                    </svg>
                    <p className="text-xs ">{property.bedrooms}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                      fill="none"
                      viewBox="0 0 12 10"
                    >
                      <path
                        fill="#040A3B"
                        d="M4.05 6c0-.275.248-.5.55-.5.303 0 .55.225.55.5s-.248.5-.55.5c-.302 0-.55-.225-.55-.5zm2.2.5c.303 0 .55-.225.55-.5s-.247-.5-.55-.5c-.303 0-.55.225-.55.5s.247.5.55.5zm1.65 0c.303 0 .55-.225.55-.5s-.247-.5-.55-.5c-.303 0-.55.225-.55.5s.248.5.55.5zM6.25 2.75c-.968 0-1.771.655-1.903 1.5h3.811a1.724 1.724 0 00-.648-1.071 2.053 2.053 0 00-1.26-.429zm0-.75C7.768 2 9 3.12 9 4.5V5H3.5v-.5C3.5 3.12 4.732 2 6.25 2zM4.6 8c.303 0 .55-.225.55-.5S4.902 7 4.6 7c-.302 0-.55.225-.55.5s.248.5.55.5zm1.65 0c.303 0 .55-.225.55-.5S6.553 7 6.25 7c-.303 0-.55.225-.55.5s.247.5.55.5zM7.9 8c.303 0 .55-.225.55-.5S8.203 7 7.9 7c-.303 0-.55.225-.55.5s.248.5.55.5zm2.75-7h-8.8v8h8.8V1zm0-1c.605 0 1.1.45 1.1 1v8c0 .55-.495 1-1.1 1h-8.8c-.605 0-1.1-.45-1.1-1V1c0-.55.495-1 1.1-1h8.8z"
                      ></path>
                    </svg>
                    <p className="text-xs ">{property.bathrooms}</p>
                    <p className="text-xs">{property.propertySize} sqm</p>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium mt-4">{property.location}</p>

              <div className="mt-2 flex justify-between">
                <p className="text-customPrimary font-semibold ">
                  &#x20A6; {property.budget}
                </p>
                <Link href={`/property/${property.slug?.current}`}>
                  <button className="text-white bg-primary text-base px-3 py-2 -mr-5 rounded-br-md">
                    View Full Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default House;
