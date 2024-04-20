import Image, { StaticImageData } from "next/image";
import Founder_one from "@/public/images/about/founders/Frame 1000002841.svg"
import Founder_two from "@/public/images/about/founders/Frame 1000002842.svg"
import Founder_three from "@/public/images/about/founders/Frame 1000002843.svg"
import About_section from "@/public/images/about/founders/Challenges-and-Opportunities-in-Civil-Engineering-Addressing-Environmental-and-Safety-Concerns 1.svg"

interface Founder {
    image: StaticImageData;
    name: string;
    position: string;
}

const founders: Founder[] = [
    {
        image: Founder_one,
        name: "Emmanuel Hope. U.",
        position: "GMD/Founder"
    },
    {
        image: Founder_two,
        name: "Barr. Woryi Micheal. Onyema",
        position: "Co-founder"
    },
    {
        image: Founder_three,
        name: "Enoma Osawemwenma .J",
        position: "CO-founder"
    }
];

export default function Founders() {
    return (
        <div className="">
            {/* Founder section  */}
            <h1 className="mt-5 text-center text-4xl text-[#040A3B] font-bold">Founders</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 space-x-10">
                {founders.map((founder, index) => (
                    <div className="card bg-base-100 shadow-xl" key={index}>
                        <figure>
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                width={500}
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title space-y-4 text-[#040A3B]">{founder.name}</h2>
                            <p className="text-1xl text-[#79747E]  font-extralight">({founder.position})</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* About Section  */}
            <div className="md:p-10 flex flex-col md:flex-row ">
                <section className="md:px-10 md:py-5 text-white bg-[#090A0C] md:w-6/12">
                    <section className="p-5">
                        <h2 className="mb-5 text-2xl">Discover our work ethics</h2>
                        <h1 className="text-4xl mb-5">About Our Company</h1>
                        <p>We are a group of real estate engineers with the core value of satisfying our clients needs and desires. We set out principles and work towards the improvements, both for us as a company and to our clients, their satisfaction is our utmost priority
                        </p>
                    </section>

                    <section className="mb-5 p-5">
                        <h3 className="mb-5 text-2xl">Mission</h3>
                        <p>To be the leading real estate company that promotes the safety of clients’ investments through an automated property insurance system.
                        </p>
                    </section>
                    <section className="mb-5 p-5">
                        <h3 className="mb-5 text-2xl">Vision</h3>
                        <p>LTo revolutionize the real estate system of operation by introducing a viable system that eliminates fraud, property theft, or land grabbing through adequate safety measures, and building smart cities that meet international standards, in real estate and housing.
                        </p>
                    </section>
                    <section className="mb-5 p-5">
                        <h3 className="mb-5 text-2xl">Value</h3>
                        <p>Viability, Innovativeness, Credibility and Excellence (VICE)
                        </p>
                    </section>
                </section>
                <section className="md:relative top-40 h-16">
                    <Image
                    className=""
                        src={About_section}
                        alt="About section"
                    />
                </section>
            </div>

            {/* Overview on our career  */}
            <div className="">
                <section className="text-center m-10 uppercase">
                    <h3 className="text-3xl text-primary font pb-2">Overview on our career</h3>
                    <h1 className="text text-5xl text-[#040A3B]">Discover quick facts</h1>
                </section>
                <hr className="border-solid border-1 border-primary" />
                <div className="flex flex-col md:flex-row  justify-evenly items-center p-10">
                    <section className="text-center">
                        <div className="text-primary text-3xl font-semibold">1</div>
                        <div className="text-[#040A3B] font-semibold">Years of Experience</div>
                    </section>
                    <section className="text-center">
                        <div className="text-primary text-3xl font-semibold">12</div>
                        <div className="text-[#040A3B] font-semibold">Services</div>
                    </section>
                    <section className="text-center">
                        <div className="text-primary text-3xl font-semibold">80%</div>
                        <div className="text-[#040A3B] font-semibold">Happy Clients</div>
                    </section>
                    <section className="text-center">
                        <div className="text-primary text-3xl font-semibold">3</div>
                        <div className="text-[#040A3B] font-semibold">Skilled Agents</div>
                    </section>
                </div>
                <hr className="border-solid border-1 border-primary" />
            </div>

            {/* Buttons  */}
            <div className="flex justify-center gap-1 mb-20 relative bottom-5">
                <button className="btn rounded-md bg-primary text-white py-4 px-5">Have a Question</button>
                <button className="btn rounded-md bg-[#040A3B] text-white py-4 px-6">Find Property</button>
            </div>
        </div>
    );
};
