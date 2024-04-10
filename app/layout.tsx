import type { Metadata } from 'next';
<<<<<<< HEAD
import { draftMode } from "next/headers";
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import LiveVisualEditing from "@/components/LiveVisualEditing";
import Logo from "@/public/logo.svg"


const josefinSans = Josefin_Sans({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "Houvincity Real Estate and Propety Management Website",
    template: `%s | Houvincity Real Estate and Propety Management Website`
  },
  openGraph: {
    description: "Houvincity Real Estate and Propety Management Website",
    images: [`${Logo}`]
  },
  keywords:["Houvincity Real Estate and Propety Management Website", "Houvincity", "Houvincity Real Estate", "Houvincity Property Management", "Houvincity Website"]
=======
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Houvincty',
  description: 'Houvincity Real Estate',
>>>>>>> b361d4b (I worked on the Property Listing Card)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={josefinSans.className}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
        </body>
=======
      <body className={inter.className}>{children}</body>
>>>>>>> b361d4b (I worked on the Property Listing Card)
    </html>
  );
}
