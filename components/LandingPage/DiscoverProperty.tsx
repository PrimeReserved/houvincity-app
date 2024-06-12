import PropertyToggle from "./PropertyToggle";

export default function DiscoverProperty({ properties }: any) {
    return (
      <div className="wrapper flex justify-center my-[6rem] ">
        <div className="flex flex-col xl:w-[40%] md:mx-20 mx-32 text-center">
          <h1 className="text-2xl font-medium px-[3rem]">
            Effortless Property Discovery, Just For You
          </h1>
          <p className="text-sm px-[3rem] font-medium my-5 text-customTextColor leading-loose">
            Dive into a realm where walls and roofs transform into the backdrop
            of your unique story. Your next home is not just a space, it&apos;s a
            canvas inviting you to paint the chapters of your life
          </p>
          <div className="flex justify-center">
            <PropertyToggle properties={properties} />
          </div>
        </div>
      </div>
    );
};