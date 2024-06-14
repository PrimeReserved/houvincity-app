import { Suspense } from "react";
import Image from "next/image";
import IconButtonHref from "../Buttons/IconButtonHref";
import SearchHomePage from "./ SearchHomePage";
import Loading from "@/app/loading";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full mt-[6.5rem] overflow-hidden bg-center bg-cover py-20 md:py-28 ">
      {/* Background Image */}
      <Suspense fallback={<Loading />}>
        <Image
          src="https://res.cloudinary.com/dzd51q99i/image/upload/v1718214846/houvincity/landing-page/Rectangle_23803_hd5t7i.svg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="absolute inset-0  bg-top"
        />
      </Suspense>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-10 text-white relative z-10">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="mb-4 text-3xl font-extrabold md:text-4xl xl:text-5xl text-left">
            Unlock Your Dream
            <br />
            Home Now!
          </h1>
          {/* Paragraph */}
          <p className="mb-6 text-lg leading-relaxed md:text-xl text-left">
            Embark on a journey to discover your dream home, where aspirations
            meet architecture. To Explore possibilities and make your vision a
            reality in the perfect haven.
          </p>
          {/* Contact Button */}
          <IconButtonHref text="Find Property" href="/property" />
        </div>
      </div>
      <SearchHomePage />
    </section>
  );
};

export default Hero;
