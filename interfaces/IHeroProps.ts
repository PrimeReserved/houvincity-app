import React from "react";
import { StaticImageData } from "next/image";

export default interface IHeroProps {
    image?: string | StaticImageData;
    title?: string; // Optional title text
    description?: string; // Optional description text
    children?: React.ReactNode; // Optional child elements
}

