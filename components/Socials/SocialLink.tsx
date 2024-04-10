import Image from "next/image";
import { SocialLinkProps } from "@/interfaces/ISocialLinkProps";


const SocialLink: React.FC<SocialLinkProps> = ({
    href,
    image,
    alt,
  }) => (
    <a
      href={href}
      aria-label="social-link"
      className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
    >
      <Image src={image} alt={alt} width={36} height={30} />
    </a>
  );

export default SocialLink;