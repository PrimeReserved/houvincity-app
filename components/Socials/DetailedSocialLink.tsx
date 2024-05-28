import Image from "next/image";
import { SocialLinkProps } from "@/interfaces/ISocialLinkProps";


const DetailedSocialLink: React.FC<SocialLinkProps> = ({
    href,
    image,
    alt,
  }) => (
    <a
      href={href}
      aria-label="social-link"
      className="mr-6 text-black duration-300 hover:text-primary"
    >
      <Image src={image} alt={alt} width={40} height={40} />
    </a>
  );

export default DetailedSocialLink;