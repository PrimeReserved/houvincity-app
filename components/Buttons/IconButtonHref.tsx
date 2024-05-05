import React from "react";
import Link from "next/link";
import { IconButtonHrefProps } from "@/interfaces/IconButtonHrefProps";


const IconButtonHref: React.FC<IconButtonHrefProps> = ({
  onClick,
  text,
  href,
  icon,
}) => {
  console.log(`The href: ${href}`)
  return (
    <Link href={href ?? `${href}`}>
      <button className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80">
        <span>{text}</span>
        {/* Conditionally render icon if it exists */}
        {icon !== false && <span className="ml-2 h-4 w-4">{icon}</span>}
      </button>
    </Link>
  );
};

export default IconButtonHref;