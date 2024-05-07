"use client"

import { Suspense, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import { Services, services } from "./data/service";
import { FaChevronRight } from "react-icons/fa";
import Loading from "@/app/loading";


export default function Service() {
  const [hoveredService, setHoveredService] = useState<Services | null>(null);

  return (
    <main className="bg-[#FAFAFA] pb-10">
      <h1 className="py-10 text-center text-4xl text-primary font-bold border-primary underline">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center items-center mx-6 md:mx-0 space-y-8 ">
        {services
          .reduce((rows: Services[][], service: Services, index: number) => {
            if (index % 3 === 0) {
              rows.push([service]);
            } else {
              rows[rows.length - 1].push(service);
            }
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div
              className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 "
              key={rowIndex}
            >
              {" "}
              {row.map((service, index) => (
                <div
                  className="container card shadow-x relative rounded-none"
                  key={index}
                  onMouseEnter={() => setHoveredService(service)}
                  onMouseLeave={() => setHoveredService(null)}
                  role="contentinfo"
                >
                  <figure className="relative">
                   <Suspense fallback={<Loading />}>
                   <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                    />
                   </Suspense>
                    {hoveredService === service && (
                     <div>
                      <div className="absolute inset-0 bg-white flex justify-center items-center">
                       <div className="px-4">
                       <h2 className="text-primary text-3xl pb-2 underline pr-5">{service.title}</h2>
                       <p className="text-center line-clamp-6">
                          {service.description}
                        </p>
                       </div>
                      </div>
                     </div>
                  )}
                  </figure>
                  <Link href={`/services/${service.slug}`}>
                    <div className="py-5 justify-between hover:bg-primary hover:text-white shadow shadow-primary px-4">
                      <div className="flex justify-between">
                        <p className=" text-base md:text-sm lg:text-xl">
                          {service.title}
                        </p>
                        <FaChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {[...Array(3 - row.length)].map((_, index) => (
                <div key={row.length + index}>
                  <div className="card bg-base-100 shadow-xl"></div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </main>
  );
}
