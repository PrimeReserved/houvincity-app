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
          href="https://www.linkedin.com/company/primereserved"
          image={Instagram}
          alt="Instagram"
        />
        <SocialLink
          href="https://www.instagram.com/primereservedtech"
          image={Twitter}
          alt="Twitter"
        />
        <SocialLink
          href="https://www.facebook.com/groups/1554028415142497/"
          image={Facebook}
          alt="Facebook"
        />
        <SocialLink
          href="https://www.youtube.com/@primereservedtech"
          image={Youtube}
          alt="Youtube"
        />
      </div>
    </div>
  );
}

export default SocialLogos;
