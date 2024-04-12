import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import TruncateText from '@/components/Blog/TruncateText'


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface Category {
  description: string;
}

const RecentPostCard = ({ posts }: { posts: SanityDocument[] }) => {

  if (!posts || !Array.isArray(posts)) {
    return <h1>Something is happening, please be still..</h1>
  }

  return (
    <div className="lg:mx-12">
      <p className="text-primary font-medium text-xl">Recent Posts</p>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <figure key={post._id} className="flex  bg-white rounded-md mt-5 drop-shadow-md">
            <Image
              src={urlFor(post?.mainImage).url()}
              alt={`${post?.slug?.current}`}
              width={100}
              height={200}
            />

            <div className="flex flex-col justify-center px-4">
              <blockquote className="line-clamp-2 text-sm lg:text-[10px] xl:text-sm font-medium">
                <p>
                {post?.categories.map((category: Category, index: number) => (
                    <span key={index}>{category.description}</span>
                  ))}
                </p>
              </blockquote>
              <figcaption className="text-[16px] font-medium flex gap-3 mt-3">
                <Link className="flex space-x-2" href={`/blog/${post?.slug.current}`}>
                  <div className="text-primary lg:text-[12px] xl:text-base">Read More</div>
                    <Image
                      src={ArrowRight}
                      alt="Arrow Right"
                      width={12}
                      height={12}
                    />
                </Link>
              </figcaption>
            </div>
          </figure>
        ))
      ) : (
        <div className="p-4 text-red-500">No Recent Post</div>
      )}
    </div>
  );
};

export default RecentPostCard;
