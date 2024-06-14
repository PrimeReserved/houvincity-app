import PropertyHomeCard from "./PropertyHomeCard";

export default function PropertyGrid ({ properties }: any) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6rem] lg:gap-10 mt-[5rem] ">
      {properties.map((property: any) => (
          <PropertyHomeCard key={property._id} property={property} />
        ))}
      </div>
    );
  };