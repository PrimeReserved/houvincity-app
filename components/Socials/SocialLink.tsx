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
<<<<<<< HEAD
      className="mr-6 text-white duration-300 hover:text-primary"
=======
      className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
>>>>>>> b361d4b (I worked on the Property Listing Card)
    >
      <Image src={image} alt={alt} width={36} height={30} />
    </Link>
  );

export default SocialLink;