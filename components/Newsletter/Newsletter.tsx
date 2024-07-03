import React from 'react';
interface MailchimpNewsletterProps {
  id?: string;
}

const Newsletter = ({ id }: MailchimpNewsletterProps) => {
  return (
    <div id="mailchimpNewsletter" className="newsletter-section">
      <div>
        <div className="hero min-h-[30rem] bg-[#FAFAFA] ">
          <div className="z-0 flex flex-col items-center mt-[5rem] justify-center w-full gap-4 p-4 text-center ">
            <div className="md:max-w-[38rem] mt-[4rem]">
              <h1 className="text-[28px] md:text-[50px] text-[#040A3B] font-medium md:font-semibold">
                Never Miss A Beat
              </h1>
              <p className="py-6 text-[#79747E]">
                Stay In the Loop with our newsletter! Subscribe now for
                exclusive updates, real estate insights and exciting offers
                delivered to your inbox
              </p>
            </div>

            <div className="md:w-[60%] w-[100%]">
              <form
                action="https://houvincity.us17.list-manage.com/subscribe/post?u=d476363a6b7ded778221d119b&amp;id=7a5dec7eac&amp;f_id=0086c2e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  name="EMAIL"
                  className="p-4 bg-white rounded-full w-full border-[1px] h-[4rem] md:h-[5rem] relative shadow-md text-[14px] "
                  required
                />
                <button
                  type="submit"
                  className="absolute -ml-[8rem] md:-ml-[10rem] mt-3 md:mt-5 text-[12px] w-[7rem] md:w-[8rem] h-[2.5rem] bg-[#6DBA3A] text-white rounded-md focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;