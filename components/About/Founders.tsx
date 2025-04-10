import Image from 'next/image';
import About_section from '@/public/images/about/founders/Challenges-and-Opportunities-in-Civil-Engineering-Addressing-Environmental-and-Safety-Concerns 1.png';
import Loading from '@/app/loading';
import { Suspense } from 'react';
import Link from 'next/link';

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
      'https://res.cloudinary.com/dzd51q99i/image/upload/v1718318625/houvincity/about/Untitled_design_ljqbij.png',
    name: 'Emmanuel Hope. U.',
    position: 'GMD/Founder',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dzd51q99i/image/upload/v1716402028/houvincity/about/Frame_1000002842_2_igzrtx.png',
    name: 'Barr. Woryi Onyema',
    position: 'Partner',
  },
  // {
  //   id: 3,
  //   image:
  //     "https://res.cloudinary.com/dzd51q99i/image/upload/v1716401927/houvincity/about/Frame_1000002843_lqi2uf.png",
  //   name: "Enoma Osawemwenma",
  //   position: "CO-founder",
  // },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dzd51q99i/image/upload/v1718318757/houvincity/about/Untitled_design_hwdfs6.png',
    name: 'Mr Jonah Ukoh',
    position: 'Partner',
  },
];

export default function Founders() {
  return (
    <div className=" ">
      {' '}
      {/* Founder section  */}
      <h1 className="mt-5 text-center text-4xl text-[#040A3B] font-bold">
        Founders
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 xl:mx-[20rem] lg:mx-[10rem] md:mx-[5rem] mx-[0.3rem] gap-10 md:gap-2 lg:gap-10 p-10 mb-[5rem]">
          {founders.map((founder) => (
            <div
              className="card rounded bg-base-100 shadow-xl mb-10"
              key={founder.id}
              style={{ maxWidth: '300px' }}
            >
              <figure>
                <Suspense fallback={<Loading />}>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={400}
                    height={400}
                  />
                </Suspense>
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
              Through an automated property insurance system promote the safety
              of clients investments.
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Vision</h3>
            <p>
              To revolutionize the real estate sector with veritable tools that
              eliminates fraud, property theft, or land grabbing.
            </p>
          </section>
          <section className="mb-5 p-5">
            <h3 className="mb-5 text-2xl">Core Value</h3>
            <p>Innovativeness, Credibility, Viability, & Excellence</p>
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
      </div>{' '}
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
      </div>{' '}
      {/* Buttons  */}
      <div className="flex flex-col md:flex-row mt-10 md:mt-0 mx-8 justify-center gap-3 mb-20 relative md:bottom-5">
        <Link
          href="/faqs"
          className="btn rounded-md bg-primary hover:bg-primary/80 text-white py-4 px-5"
        >
          <button>Have a Question</button>
        </Link>

        <Link
          href="/property"
          className="btn rounded-md bg-[#040A3B] hover:bg-[#040A3B] text-white py-4 px-6"
        >
          <button>Find Property</button>
        </Link>
      </div>
    </div>
  );
}
