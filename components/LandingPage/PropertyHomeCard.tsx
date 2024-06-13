import Image from "next/image";
import { HiOutlineCube } from "react-icons/hi";
import { Property } from "@/typings";
import House1 from "@/public/images/property/house1.svg";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Loading from "@/app/loading";
import { Suspense } from "react";


function PropertyHomeCard({ property }: Readonly<{ property: any }>) {
  
  return (
    <div key={property._id}>
      <div className=""
      style={{
        width: "100%",
        height: "70%",
        overflow: "hidden", // Ensures that anything outside the clipping path is hidden
      }}>
        <Suspense fallback={<Loading />}>
        <Image
          src={
            property?.propertyImage
              ? urlForImage(property.propertyImage)
              : House1
          }
          alt={property?.slug}
          width={420}
          height={496.93}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the entire container without distortion
            clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
          }}
          className=" rounded-t-lg"
          loading="lazy"
        />
        </Suspense>
      </div>
      <div className="transition duration-300 bg-white drop-shadow-xl rounded-b-md h-[13rem] ">
        <div className="card-body p-3 xl:p-4  ">
          <p className="card-title text-sm text-customSecondary font-semibold">
            {property?.title}
          </p>
          <p className="text-xs font-medium mt-4 text-customSecondary">
            {property.location}
          </p>

          <div className="flex items-center gap-2 mt-4">
            <HiOutlineCube className="h-5 w-5" />
            <p className="text-xs text-customSecondary">
              {property.propertySize} sqm
            </p>
          </div>

          <div className="my-2 flex justify-between items-center py-2">
            <p className="text-primary font-semibold ">N{property.budget}</p>
            <Link href={`/property/${property.slug?.current}`}>
              <button className="text-white bg-primary text-xs px-4 py-2 rounded-md ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyHomeCard;
