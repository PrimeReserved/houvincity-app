"use client"

import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import { faqs } from "@/components/Faqs/data/Faqs"
import ServiceBox from "@/components/Services/ServiceBox";

interface FaqsProps {
  question: string;
  answer: string;
}

function Collapsible({ question, answer }: FaqsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-start mt-[3rem] border-b-[1px] pb-[2rem] px-20">
      <div className=" w-[574px]">
        <h3 className="md:font-semibold font-medium md:text-lg text-base text-customSecondary">
          {question}
        </h3>
        <div className={`transition duration-1000 ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"}`}>
          <p className="px-4 py-2">{answer}</p>
        </div>
      </div>
      {
        isOpen ? (
          <button className="p-2 rounded-full bg-primary text-white" onClick={toggleCollapse}>
            <FaArrowUp className="w-5 h-5" />
          </button>
        ) : (
          <button className="p-2 rounded-full bg-[#F2F2F2]" onClick={toggleCollapse}>
            <FaArrowDown className="w-5 h-5" />
          </button>
        )
      }
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Hero image={`./images/faqs/faqs.png`} title="FAQs" />
      <main className="pt-[6.46rem] md:pt-[7.3rem]">
        {/* Faqs Body section */}
        <section className="py-12 md:py-20 md:wrapper mx-[3rem]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-xl md:text-3xl text-customSecondary">
              Frequently Asked Questions
            </h1>
            <p className="text-sm font-medium md:my-5 my-3 text-customTextColor">
              Questions you might ask about our services
            </p>
          </div>

          {/* Render collapsible sections */}
          {
            faqs.map((faq, index) => (
              <div key={index}>
                <Collapsible
                  question={faq.question}
                  answer={faq.answer}
                />
              </div>
            ))
          }
        </section>
        <div className=" my-10 mx-[3rem] w-[327px] md:w-[570px] ">
          <h1 className="font-semibold text-2xl  text-customSecondary">
            Still Have Questions?{" "}
          </h1>
          <p className="text-sm font-medium my-3 text-customTextColor">
            Can’t Find the answer you are looking for? Please contact us.{" "}
          </p>
        </div>
        <ServiceBox />
      </main>
      <FooterHome />
    </div>
  );
}

export default Page;
