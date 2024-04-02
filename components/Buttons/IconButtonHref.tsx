import React from "react";
import Link from "next/link";
import { IconButtonHrefProps } from "@/interfaces/IconButtonHrefProps";


const IconButtonHref: React.FC<IconButtonHrefProps> = ({
  text,
  href,
  icon,
}) => {
  return (
    <Link href={href}>
      <span className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80">
        <span>{text}</span>
        {/* Conditionally render icon if it exists */}
        {icon !== false && <span className="ml-2 h-4 w-4">{icon}</span>}
      </span>
    </Link>
  );
};

export default IconButtonHref;