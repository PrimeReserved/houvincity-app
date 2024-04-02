import { StaticImageData } from "next/image";


export interface SocialLinkProps {
    href: string;
    image: StaticImageData;
    alt: string;
}