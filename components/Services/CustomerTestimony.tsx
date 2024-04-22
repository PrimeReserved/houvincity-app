import Image from "next/image";
import CustomersImage from "@/public/images/services/image/Image.png";
import { testimonies } from "./data/testimony"

export default function CustomerTestimony() {
  return (
    <section className="mb-10 md:flex">
      <figure className="m-10">
        <Image src={CustomersImage} alt="Customers" style={{ width: "300vw", height: "220vh"}} />
      </figure>
      <div>
      <h1 className="pt-10 pb-10 text-center text-3xl text-primary font-bold border-primary underline">Customer Testimonies</h1>
      {testimonies.map((testimony) => (
        <div key={testimony.id} className="mb-6">
          <p className="my-3 mr-10 break-normal inline-block align-middle">{`${testimony.text}`}</p>
          <p className="py-5 text-[#040A3B] font-bold">{testimony.name}</p>
          <hr className="border border-bg-[#040A3B]" />
        </div>
      ))}
      </div>
    </section>
  );
}
