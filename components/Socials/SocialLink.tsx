import Image from "next/image";
import { SocialLinkProps } from "@/interfaces/ISocialLinkProps";
import Link from "next/link";


const SocialLink: React.FC<SocialLinkProps> = ({
    href,
    image,
    alt,
  }) => (
    <Link
      href={`${href}`}
      aria-label="social-link"
      className="mr-6 text-white duration-300 hover:text-primary"
    >
      <Image src={image} alt={alt} width={36} height={30} />
    </Link>
  );

export default SocialLink;