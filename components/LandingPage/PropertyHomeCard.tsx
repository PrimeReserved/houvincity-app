'use client';

import Image from 'next/image';
import { HiOutlineCube } from 'react-icons/hi';
import House1 from '@/public/images/property/house1.svg';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import Loading from '@/app/loading';
import React, { Suspense } from 'react';

function PropertyHomeCard({ property }: Readonly<{ property: any }>) {
  const isSoldOut = property?.soldOut;

  return (
    <div
      key={property._id}
      className={`relative ${isSoldOut ? 'pointer-events-none' : ''}`}
    >
      {/* Sold Out Overlay */}
      {isSoldOut && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="text-center">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-12">
              <p className="text-xl font-bold uppercase tracking-wider">
                SOLD OUT
              </p>
            </div>
            <p className="text-white text-sm mt-2 font-medium">
              This property is no longer available
            </p>
          </div>
        </div>
      )}

      <div
        className={`${isSoldOut ? 'opacity-75' : ''}`}
        style={{
          width: '100%',
          height: '70%',
          overflow: 'hidden',
        }}
      >
        <Suspense fallback={<Loading />}>
          <Image
            src={
              property?.propertyImage
                ? urlForImage(property?.propertyImage?.asset?._ref)
                : House1
            }
            alt={property?.slug}
            width={420}
            height={496.93}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath: 'polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)',
              filter: isSoldOut ? 'grayscale(50%)' : 'none',
            }}
            className="rounded-t-lg"
            loading="lazy"
          />
        </Suspense>

        {/* Sold Out Badge on Image */}
        {isSoldOut && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Sold
            </div>
          </div>
        )}
      </div>

      <div
        className={`transition duration-300 bg-white drop-shadow-xl rounded-b-md h-[13rem] ${isSoldOut ? 'opacity-75' : ''}`}
      >
        <div className="card-body p-3 xl:p-4">
          <p
            className={`card-title text-sm font-semibold ${isSoldOut ? 'text-gray-500' : 'text-customSecondary'}`}
          >
            {property?.title}
          </p>
          <p
            className={`text-xs font-medium mt-4 ${isSoldOut ? 'text-gray-500' : 'text-customSecondary'}`}
          >
            {property.location}
          </p>

          <div className="flex items-center gap-2 mt-4">
            <HiOutlineCube
              className={`h-5 w-5 ${isSoldOut ? 'text-gray-500' : ''}`}
            />
            <p
              className={`text-xs ${isSoldOut ? 'text-gray-500' : 'text-customSecondary'}`}
            >
              {property.propertySize} sqm
            </p>
          </div>

          <div className="my-2 flex justify-between items-center py-2">
            <p
              className={`font-semibold ${isSoldOut ? 'text-gray-500 line-through' : 'text-primary'}`}
            >
              N{property.budget}
            </p>

            {/* Conditional Button */}
            {isSoldOut ? (
              <button
                className="text-gray-500 bg-gray-200 text-xs px-4 py-2 rounded-md cursor-not-allowed opacity-60"
                disabled
                title="This property is sold out"
              >
                Sold Out
              </button>
            ) : (
              <Link href={`/property/${property.slug?.current}`}>
                <button className="text-white bg-primary text-xs px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Buy Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PropertyHomeCard);
