import PropertyDetailed from '@/components/Property/PropertyDetailed';
import { client } from "@/sanity/client";
import { Property } from '@/typings';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { getProperties, getProperty } from '@/lib/action';

interface Props {
  params: {
    slug: string;
  }
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const slugs: Property[] = await getProperties();
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
 
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

 const page = async ({ params: { slug } }: Readonly<Props>) => {

  const property = await getProperty(slug);

  return (
    <div>
        <Suspense fallback={<Loading/>}>
          <PropertyDetailed property={property} />
        </Suspense>
    </div>
  )
}

export default page