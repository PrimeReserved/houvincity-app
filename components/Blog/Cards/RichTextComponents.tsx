import { dataset, projectId } from "@/sanity/env";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder({ projectId, dataset });

function urlFor(source: SanityImageSource) {
    return builder.image(source);
}


export const RichTextComponents = {
    types: {
        image: ({ value }: any ) => <Image src={value?.mainImage} alt={value?.title} />
      },

    list: {
        bullets: ({ children }: any) => (
            <ul className="mt-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ul className="mt-lg list-decimal">{children}</ul>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h1 className="text-4xl py-10 font-bold">{children}</h1>
        ),
        h3: ({ children }: any) => (
            <h1 className="text-3xl py-10 font-bold">{children}</h1>
        ),
        h4: ({ children }: any) => (
            <h1 className="text-2xl py-10 font-bold">{children}</h1>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-primary">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a href={value.href} rel={rel}>
                    {children}
                </a>
            )
        },
    },
};