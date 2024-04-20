import Image from "next/image";
import CustomersImage from "@/public/images/services/image/Image.svg";
import { testimonies } from "./data/testimony"

export default function CustomerTestimony() {
  return (
    <section className="md:flex p-4">
      <figure className="m-20">
        <Image src={CustomersImage} alt="Customers" width={5000} />
      </figure>
      <div>
      <h1 className="pt-40 pb-10 text-center text-5xl text-primary font-bold border-primary underline">Customer Testimonies</h1>
      {testimonies.map((testimony) => (
        <div key={testimony.id} className="mb-6 pr-40">
          <p className="my-2 text-1xl inline-block align-middle">{`${testimony.text}`}</p>
          <p className="py-10 text-[#040A3B] font-bold">{testimony.name}</p>
          <hr className="border border-bg-[#040A3B]" />
        </div>
      ))}
      </div>
    </section>
  );
}
