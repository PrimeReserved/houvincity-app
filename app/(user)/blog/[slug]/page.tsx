import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY, AUTHOR_QUERY } from "@/sanity/lib/queries";
import PostPreview from "@/components/PostPreview";
import { client } from "@/sanity/lib/client";
import DetailedCard from "@/components/Blog/Cards/DetailedCard";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";

export async function generateStaticParams() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
    return posts.map((post) => ({
        slug: post.slug.current,
    }))
}

async function Page({ params }: { params: QueryParams }) {
    const { slug } = params;
   
    const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
        perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    });

    // Fetch the author data using the reference ID
    const authorData = await loadQuery<SanityDocument>(
        AUTHOR_QUERY, 
        { slug, authorId: initial.data?.author?._ref } // Pass the authorId parameter
    );
    console.log("Author:", authorData);
    const authorProps = {
        name: authorData.data?.name,
        createdAt: authorData.data?._createdAt,
        image: authorData.data?.image
    };

      // Fetch recent posts data
    const recentPostsData = await client.fetch<SanityDocument[]>(POSTS_QUERY);

    
    return draftMode().isEnabled ? (
        <PostPreview initial={initial} params={params} />
    ) : (
        <>
            <Header />
            <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
                <div className=' col-span-2'>
                    <DetailedCard post={initial.data} />
                </div>
                <div className='col-span-1'>
                    <AuthorProfile author={authorProps} />
                    <RecentPostCard posts={recentPostsData.slice(0,3)} />
                </div>
                <div className='col-span-1'>
                </div>
            </div>
            <FooterHome />
        </>
    );
}

export default Page;

