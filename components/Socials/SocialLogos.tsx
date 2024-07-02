import React from "react";
import SocialLink from "../Socials/SocialLink";
import Instagram from "@/public/images/socials/path1165.svg";
import Twitter from "@/public/images/socials/path1009.svg";
import Facebook from "@/public/images/socials/Vector.svg";
import Youtube from "@/public/images/socials/youtube.png";

function SocialLogos() {
  return (
    <div>
      <div className="flex md:space-x-14">
        <SocialLink
          href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`}
          image={Instagram}
          alt="Instagram"
        />
        <SocialLink
          href={`${process.env.NEXT_PUBLIC_TWITTER_URL}`}
          image={Twitter}
          alt="Twitter"
        />
        <SocialLink
          href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`}
          image={Facebook}
          alt="Facebook"
        />
        <SocialLink
          href={`${process.env.NEXT_PUBLIC_YOUTUBE_URL}`}
          image={Youtube}
          alt="Youtube"
        />
      </div>
    </div>
  );
}

export default SocialLogos;
