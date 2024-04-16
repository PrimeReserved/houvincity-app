import React from "react";
import Image from "next/image";
import Detail1 from "@/public/images/property/Detail1.svg";
import Detail2 from "@/public/images/property/Detail2.svg";
import Detail3 from "@/public/images/property/Detail3.svg";
import Detail4 from "@/public/images/property/Detail4.svg";
import YoutubeEmbed from "./YoutubeEmbed";
import Calendar from "@/public/images/blog/Icon/Calendar2.svg";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header/HeaderHome";
import FooterHome from "../Footer/FooterHome";

function PropertyDetailed() {
  return (
    <>
    <ErrorBoundary>
      <Header/>
    </ErrorBoundary>
    <div className="wrapper mb-10">
      <div className="flex justify-center items-center">
        <Image src={Detail1} alt="House1" width={1500} height={100} />
      </div>
      <div className="grid grid-cols-3 px-10  gap-2 justify-center items-center mt-12 mx-auto">
        <Image src={Detail2} alt="House2" width={385} height={300} />
        <Image src={Detail3} alt="House3" width={385} height={300} />
        <Image src={Detail4} alt="House4" width={385} height={300} />
      </div>
      <div className="mt-10 px-10">
        <p className=" text-customPrimary text-base font-semibold border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] pb-5">
          13, North Dupe, Portharcourt
        </p>
        <p className=" text-customPrimary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Asking Price - N500,000 (Open for slight negotiation)
        </p>
        <p className=" text-customPrimary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Legal | Survey N50,000
        </p>
        <p className=" text-customPrimary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
          Plot Size - 1035sqft
        </p>
      </div>

      <p className="text-customTextColor text-base leading-loose my-10 px-10">
        Welcome to our three-bedroom luxury apartment, designed for comfort and
        style. The spacious living room, hardwood floors, and large windows
        create an inviting atmosphere. The bedrooms feature plush carpeting,
        ample storage, and the master bedroom includes an en-suite bathroom. The
        fully equipped kitchen boasts stainless steel appliances and granite
        countertops. A dedicated dining area complements the kitchen open
        layout. Modern fixtures and ample storage characterize the bathrooms.
        Enjoy private outdoor space on the balcony or patio. In-unit laundry
        facilities add convenience, and security is ensured with a secure entry
        system and surveillance cameras. Reserved parking is available.
        Residents have access to community amenities, including a fitness center
        and swimming pool. The apartment is pet-friendly, catering to a
        comfortable and luxurious lifestyle. Welcome home!
      </p>

      <div className="flex justify-center my-10">
        <YoutubeEmbed />
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
      <FooterHome/>
    </ErrorBoundary>
    </>
  );
}

export default PropertyDetailed;
