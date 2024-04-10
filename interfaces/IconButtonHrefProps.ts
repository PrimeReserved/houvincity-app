import { ReactNode } from "react";


export interface IconButtonHrefProps {
  text: string;
  href: string;
  icon?: ReactNode | false; // Accepts JSX or `false` for conditional rendering
}