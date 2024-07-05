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
          href={`https://www.instagram.com/hauvincitylimited?igsh=bm80bm5yYnlyaTc3`}
          image={Instagram}
          alt="Instagram"
        />
        <SocialLink
          href={`https://www.twitter.com/`}
          image={Twitter}
          alt="Twitter"
        />
        <SocialLink
          href={`https://web.facebook.com/profile.php?id=100090655972772&mibextid=ZbWKwL&_rdc=1&_rdr`}
          image={Facebook}
          alt="Facebook"
        />
        <SocialLink
          href={`https://www.youtube.com/@houvincitylimited?si=qkgeXk4KUHDTzyvF`}
          image={Youtube}
          alt="Youtube"
        />
      </div>
    </div>
  );
}

export default SocialLogos;
