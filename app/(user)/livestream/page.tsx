import { groq } from 'next-sanity';
import { Livestream } from '@/typings';
import { Video } from '@/components/Event/Video';
import Header from '@/components/Header/HeaderHome';
import ErrorBoundary from '@/components/ErrorBoundary';
import Newsletter from '@/components/Newsletter/Newsletter';
import FooterHome from '@/components/Footer/FooterHome';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { client } from '@/sanity/lib/client';

export const revalidate = 30;

const livestreamQuery = groq`*[_type == 'livestream' && isActive == true][0]{
  _id,
  description,
  videoUrl,
  isActive,
  scheduledDate,
  thumbnail
}`;

const Page = async () => {
  const livestream: Livestream = await client.fetch(livestreamQuery);

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <main className="py-28 pt-[6.3rem] md:pt-[7.5rem]">
          <Video livestream={livestream} />
        </main>
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <FooterHome />
    </div>
  );
};

export default Page;
