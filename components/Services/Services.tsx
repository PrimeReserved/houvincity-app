import Image from "next/image";
import Link from "next/link";
import { Services, services } from "./data/service"
import { FaChevronRight } from "react-icons/fa";



export default function Service() {
    return (
        <>
            <h1 className="py-10 text-center text-4xl text-primary font-bold border-primary underline">Our Services</h1>
            <div className="flex flex-wrap justify-center items-center gap-10 p-10 space-x-10">
                {(services.reduce((rows: Services[][], service: Services, index: number) => {
                    if (index % 3 === 0) {
                        rows.push([service]);
                    } else {
                        rows[rows.length - 1].push(service);
                    }
                    return rows;
                }, [])).map((row, rowIndex) => (
                    <div className="flex flex-col md:flex-row justify-center items-center space-x-5" key={rowIndex}>
                        {row.map((service, index) => (
                            <div className="container card bg-base-100 shadow-x" key={index}>
                                <figure>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={500}
                                    />
                                </figure>
                                <Link href={`/services/${service.slug}`}>
                                    <div className="card-body py-5 justify-between hover:bg-primary hover:text-white">
                                      <div className="flex">
                                        <p className="text-1xl">{service.title}</p>
                                        <FaChevronRight className="h-5 b" />
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
        </>
    )
}