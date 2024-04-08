import BlogCard from '@/components/Blog/Cards/BlogCard';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import ComponentError from '@/components/Error';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';
import NumberCount from '@/components/NumberCount/NumberCount';

import { SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { POSTS_QUERY } from '@/sanity/lib/queries';


async function Page () {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero
          title="Welcome to Our Blog"
          description="Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
          <div className='col-span-1'>
            <RecentPostCard />
          </div>

          <div className='col-span-2'>
              <BlogCard posts={initial.data}  />
          </div>
        </div>
        {/* {data && (
          <NumberCount
            totalPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )} */}
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </div>
  );
}

export default Page;