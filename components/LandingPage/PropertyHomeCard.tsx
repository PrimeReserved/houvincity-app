import Image from "next/image";
import { HiOutlineCube } from "react-icons/hi";
import { Property } from "@/typings";
import House1 from "@/public/images/property/house1.svg";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const PAGE_SIZE = 3;


function PropertyHomeCard({ property }: Readonly<{ property: any }>) {
  
  return (
    <div key={property._id}>
      <div className="">
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
            clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
          }}
          className=" rounded-t-lg"
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="rounded-lg transition duration-300  bg-base-100 drop-shadow-xl rounded-b-md">
        <div className="card-body mx-5 mt-5">
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