import { ReactNode } from "react";


export interface IconButtonHrefProps {
  onClick?: () => void;
  text: string;
  href?: string;
  icon?: ReactNode | false; // Accepts JSX or `false` for conditional rendering
}