import React from "react";
// import Houses from "@/public/images/blog/Rectangle 23861.svg";
// import Image from "next/image";
import DetailedCard from "@/components/Blog/Cards/DetailedCard";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";

function Page() {
    return (
        <>
           <Header />
           <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
            <div className=' col-span-2'>
                <DetailedCard />
            </div>
            <div className='col-span-1'>
              <RecentPostCard/>
            </div>
        </div>
           <FooterHome />
        </>
    );
}

export default Page;
