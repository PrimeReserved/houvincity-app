import PropertyDetailed from '@/components/Property/PropertyDetailed';
import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { Property } from '@/typings';
import { PROPERTY_LISTING } from '@/sanity/lib/queries';
import { Suspense } from 'react';
import Loading from '@/app/loading';

interface Props {
  params: {
    slug: string;
  }
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'property']{
    'slug': slug.current
  }`;
  const slugs: Property[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
 
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

 const page = async ({ params: { slug } }: Readonly<Props>) => {

  const query = PROPERTY_LISTING;
  const property: Property = await client.fetch(query, { slug });

  return (
    <div>
        <Suspense fallback={<Loading/>}>
          <PropertyDetailed property={property} />
        </Suspense>
    </div>
  )
}

export default page