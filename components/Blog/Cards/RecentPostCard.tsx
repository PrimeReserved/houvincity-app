import React from "react";
import Image from "next/image";

import KeyHolder from "@/public/images/blog/Rectangle 23858.svg";
import Link from "next/link";


const RecentPostCard = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
            <Image
                  src={KeyHolder}
                  alt="Key holder"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit</h2>
                <div className="card-actions justify-end">
                <Link
                href="#"
                >
                    <button className="btn btn-primary">Read More</button>
                </Link>
                </div>
            </div>
        </div>
    )
};


export default RecentPostCard;