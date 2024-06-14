import PropertyToggle from "./PropertyToggle";

export default function DiscoverProperty({ properties }: any) {
    return (
      <div className=" flex justify-center items-center my-[6rem] ">
        <div className="flex flex-col w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center  px-4 ">
          <h1 className="text-2xl font-medium">
            Effortless Property Discovery, Just For You
          </h1>
          <p className="text-sm font-medium my-5 text-customTextColor leading-loose">
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

