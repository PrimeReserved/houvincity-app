import Image from "next/image";
import CustomersImage from "@/public/images/services/image/Image.png";
import { testimonies } from "./data/testimony"

export default function CustomerTestimony() {
  return (
    <section className="lg:flex p-4">
      <figure className="xl:m-20 lg:m-10">
        <Image src={CustomersImage} alt="Customers" width={3500} className="hidden lg:block xl:w-[3500px]  " />
        {/* <Image src={Image2} alt="Image2" width={735} className="lg:hidden md:w-[735px] w-[400px] "/> */}
      </figure>
      <div>
        <h1 className="xl:pt-40 lg:pt-[3rem] pb-10 text-center xl:text-5xl lg:text-4xl text-3xl mt-10 text-primary font-bold border-primary underline">
          Customer Testimonies
        </h1>
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="mb-6 lg:pr-10 w-[95%] mx-2">
            <p className="my-2 text-sm md:text-sm xl:text-base  inline-block text-justify">{`${testimony.text}`}</p>
            <p className="xl:py-10 lg:py-5 pt-2 pb-4 text-[#040A3B] font-bold">{testimony.name}</p>
            <hr className="border border-bg-[#040A3B]" />
          </div>
        ))}
      </div>
    </section>
  );
}
