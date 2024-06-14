import Link from "next/link";
import { BsChatRightTextFill } from "react-icons/bs";
import { MdHouse } from "react-icons/md";

export default function ServiceBox() {
  return (
    <div className="py-[5rem] bg-[#FAFAFA] px-10">
      <div className=" flex flex-col md:flex-row  gap-[4rem] justify-center items-center">
        <Link href="/contact">
          <div className="w-[305px] md:w-[404px] h-[237px] md:h-[253px] bg-white px-6 flex flex-col justify-center items-center text-center border-[1px] border-customSecondary rounded-md shadow-lg transition duration-300 transform hover:scale-105">
            <BsChatRightTextFill className="h-10 w-10 text-primary" />
            <p className="font-medium text-lg my-4 ">Contact Us</p>
            <p className="text-sm w-[260px] ">
              Would you like to know more about our services? Let’s talk
            </p>
          </div>
        </Link>

        <Link href="/property">
          <div className="w-[305px] md:w-[404px] h-[237px] md:h-[253px] bg-white px-6 flex flex-col justify-center items-center text-center border-[1px] border-customSecondary rounded-md shadow-lg transition duration-300 transform hover:scale-105">
            <MdHouse className="h-10 w-10 text-primary" />
            <p className="font-medium text-lg my-4">Buy Propertiess</p>
            <p className="text-sm w-[260px] ">
              Would you like to search our beautiful properties? Let’s explore
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
