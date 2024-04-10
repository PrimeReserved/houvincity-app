import React from "react";
import SocialLink from "../Socials/SocialLink";
import Instagram from "@/public/images/blog/Icon/path1165.svg";
import Twitter from "@/public/images/blog/Icon/path1009.svg";
import Facebook from "@/public/images/blog/Icon/Vector.svg";
import LinkedIn from "@/public/images/blog/Icon/Group.svg";
import DetailedSocialLink from "../Socials/DetailedSocialLink";

function DetailedSocial() {
  return (
    <div className="mx-10 mt-10">
      <p className="text-primary font-medium text-xl">Share</p>

      <div className="flex justify-between mt-3 py-[1.3rem] px-[3rem] bg-white rounded-md drop-shadow-md">
        <DetailedSocialLink
          href="https://www.linkedin.com/company/primereserved"
          image={Instagram}
          alt="Instagram"
        />
        <DetailedSocialLink
          href="https://www.instagram.com/primereservedtech"
          image={Twitter}
          alt="Twitter"
        />
        <DetailedSocialLink
          href="https://www.facebook.com/groups/1554028415142497/"
          image={Facebook}
          alt="Facebook"
        />
        <DetailedSocialLink
          href="https://www.linkedin.com/@primereservedtech"
          image={LinkedIn}
          alt="LinkedIn"
        />
      </div>
    </div>
  );
}

export default DetailedSocial;
