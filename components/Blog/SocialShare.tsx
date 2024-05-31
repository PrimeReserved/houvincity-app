"use client";
import Instagram from "@/public/images/socials/Instagram.png";
import Twitter from "@/public/images/socials/X.png";
import Facebook from "@/public/images/socials/Vector.png";
import Linkedin from "@/public/images/socials/mingcute_linkedin-line.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";
import DetailedSocialLink from "@/components/Socials/DetailedSocialLink";
import Image from "next/image";

export default function SocialShare() {
  return (
    <div className="flex justify-center items-center gap-x-5">
      <DetailedSocialLink
        href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`}
        image={Instagram}
        alt={"instagram"}
      />
      {/* <DetailedSocialLink
                  href={`${process.env.NEXT_PUBLIC_TWITTER_URL}`}
                  image={Twitter}
                  alt={"twitter"}
                /> */}
      <TwitterShareButton
        url={`${process.env.NEXT_PUBLIC_TWITTER_URL}`}
        title={`Share to Twitter`}
      >
        <Image src={Twitter} alt="twitter" width={50} height={50} />
      </TwitterShareButton>
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`}
        title={`Share to facebook`}
      >
        <Image src={Facebook} alt="facebook" width={50} height={50} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
        title={`Share to Linkedin`}
      >
        <Image src={Linkedin} alt="linkedin" width={50} height={50} />
      </LinkedinShareButton>
      {/* <DetailedSocialLink
                  href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`}
                  image={Facebook}
                  alt={"facebook"}
                /> */}
      {/* <DetailedSocialLink
        href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
        image={Linkedin}
        alt={"linkedlin"}
      /> */}
    </div>
  );
}
