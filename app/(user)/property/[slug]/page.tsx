import PropertyDetailed from '@/components/Property/PropertyDetailed';
import { Property } from '@/typings';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { getProperties, getProperty } from '@/lib/action';
import Header from '@/components/Header/HeaderHome';
import FooterHome from '@/components/Footer/FooterHome';


export const revalidate = 30;


export const generateMetadata = async ({ params }: any) => {

  const { slug } = params;
  const property = await getProperty(slug);
  
  if (!property) {
    return {
      title: "Property Not Found",
      content: "The Property you are looking for does not exist, please contact us directly via phone" 
    };
  }

  return {
    title: property.title,
    content: property.description
  };
}

 const page = async ({ params  }: any) => {

  const { slug } = params;
  const property = await getProperty(slug);

  return (
    <div>
      <Header />
        <Suspense fallback={<Loading/>}>
          <PropertyDetailed property={property} />
        </Suspense>
        <FooterHome />
    </div>
  )
}

export default page