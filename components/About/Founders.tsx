import Image from "next/image";
import About_section from "@/public/images/about/founders/Challenges-and-Opportunities-in-Civil-Engineering-Addressing-Environmental-and-Safety-Concerns 1.png";

interface Founder {
  id: number;
  image: string;
  name: string;
  position: string;
}

const founders: Founder[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dzd51q99i/image/upload/v1716401926/houvincity/about/Frame_1000002841_pi7bwc.png",
    name: "Emmanuel Hope. U.",
    position: "GMD/Founder",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dzd51q99i/image/upload/v1716402028/houvincity/about/Frame_1000002842_2_igzrtx.png",
    name: "Barr. Woryi Onyema",
    position: "Co-founder",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dzd51q99i/image/upload/v1716401927/houvincity/about/Frame_1000002843_lqi2uf.png",
    name: "Enoma Osawemwenma .J",
    position: "CO-founder",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dzd51q99i/image/upload/v1716401927/houvincity/about/Frame_1000002843_lqi2uf.png",
    name: "Mr Jonah Ukoh",
    position: "Partner",
  },
];

export default function Founders() {
  return (
    <div className=" ">
      {" "}
      {/* Founder section  */}
      <h1 className="mt-5 text-center text-4xl text-[#040A3B] font-bold">
        Founders
      </h1>
      <div className="lg:wrapper flex flex-col md:flex-row flex-wrap justify-between items-center gap-10 md:gap-2 lg:gap-10 p-10 mb-[5rem]">
        {founders.map((founder) => (
          <div
            className="card rounded bg-base-100 shadow-xl mb-10"
            key={founder.id}
            style={{ maxWidth: "300px" }}
          >
            <figure>
              <Image
                src={founder.image}
                alt={founder.name}
                width={400}
                height={400}
              />
            </figure>

            <div className="card-body text-center py-6">
              <h2 className="card-title md:text-xs lg:text-sm xl:text-xl space-y-4 flex justify-center text-center text-[#040A3B]">
                {founder.name}
              </h2>
              <p className="text-1xl text-[#79747E] font-extralight">
                ({founder.position})
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* About Section  */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center md:mx-8">
        <section className="md:px-10 md:py-5 text-white bg-customSecondary lg:w-6/12 w-[100%]">
          <section className="p-5">
            <h2 className="mb-5 text-2xl">Discover our work ethics</h2>
            <h1 className="text-4xl mb-5">About Our Company</h1>
            <p>
              We are a group of real estate engineers with the core value of
              satisfying our clients needs and desires. We set out principles
              and work towards the improvements, both for us as a company and to
              our clients, their satisfaction is our utmost priority
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Mission</h3>
            <p>
              To be the leading real estate company that promotes the safety of
              clients’ investments through an automated property insurance
              system.
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Vision</h3>
            <p>
              LTo revolutionize the real estate system of operation by
              introducing a viable system that eliminates fraud, property theft,
              or land grabbing through adequate safety measures, and building
              smart cities that meet international standards, in real estate and
              housing.
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Value</h3>
            <p>Viability, Innovativeness, Credibility and Excellence (VICE)</p>
          </section>
        </section>
        <figure className="">
          <Image
            src={`https://res.cloudinary.com/dzd51q99i/image/upload/v1716401930/houvincity/about/Challenges-and-Opportunities-in-Civil-Engineering-Addressing-Environmental-and-Safety-Concerns_1_ds4c33.png`}
            alt="About figure"
            width={500}
            height={500}
          />
        </figure>
      </div>{" "}
      <div className="">
        <section className="text-center m-10 uppercase">
          <h3 className=" text-xl md:text-3xl text-primary font pb-2">
            Overview on our career
          </h3>
          <h1 className="text-[27px] md:text-5xl text-[#040A3B]">
            Discover quick facts
          </h1>
        </section>
        <hr className="border-solid border-1 border-primary" />
        <div className="flex flex-row md:items-center justify-evenly p-10 gap-5 md:gap-0">
          <section className="text-center">
            <div className="text-primary md:text-3xl text-lg  font-semibold">
              1
            </div>
            <div className="text-[#040A3B] text-sm md:text-base font-semibold">
              Years of Experience
            </div>
          </section>
          <section className="text-center">
            <div className="text-primary md:text-3xl text-lg font-semibold">
              12
            </div>
            <div className="text-[#040A3B] text-sm md:text-base font-semibold mt-3 md:mt-0">
              Services
            </div>
          </section>
          <section className="text-center">
            <div className="text-primary md:text-3xl text-lg font-semibold">
              80%
            </div>
            <div className="text-[#040A3B] text-sm md:text-base font-semibold">
              Happy Clients
            </div>
          </section>
          <section className="text-center">
            <div className="text-primary md:text-3xl text-lg font-semibold">
              3
            </div>
            <div className="text-[#040A3B] text-sm md:text-base font-semibold">
              Skilled Agents
            </div>
          </section>
        </div>
        <hr className="border-solid border-1 border-primary" />
      </div>{" "}
      {/* Buttons  */}
      <div className="flex flex-col md:flex-row mt-10 md:mt-0 mx-8 justify-center gap-3 mb-20 relative md:bottom-5">
        <button className="btn rounded-md bg-primary text-white py-4 px-5">
          Have a Question
        </button>
        <button className="btn rounded-md bg-[#040A3B] text-white py-4 px-6">
          Find Property
        </button>
      </div>
    </div>
  );
}
