import { ReactNode } from "react";


export interface IconButtonHrefProps {
<<<<<<< HEAD
  onClick?: () => void;
  text: string;
  href?: string;
=======
  text: string;
  href: string;
>>>>>>> b361d4b (I worked on the Property Listing Card)
  icon?: ReactNode | false; // Accepts JSX or `false` for conditional rendering
}