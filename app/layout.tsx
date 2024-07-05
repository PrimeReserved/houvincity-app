import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import LiveVisualEditing from "@/components/LiveVisualEditing";
import Logo from "@/public/logo.svg";
import Providers from "@/context/Providers";
import LiveChat from "@/components/LiveChat/LiveChat";


export const revalidate = 30;

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Houvincity Real Estate and Propety Management Website",
    template: `%s | Houvincity Real Estate and Propety Management Website`,
  },
  description: 'Real Estate and Property Managment',
  openGraph: {
    title: 'Houvincity Real Estate and Property Management',
    description: 'Real Estate and Property Managment',
    url: 'https://houvincity-app.vercel.app/',
    siteName: 'Houvincity.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dzd51q99i/image/upload/v1716690156/houvincity/services/HCL_Logo_1_k5l61c.png',
        width: 40,
        height: 40,
      },
      {
        url: 'https://res.cloudinary.com/dzd51q99i/image/upload/v1716690096/houvincity/landing-page/Union_chih6l.png',
        width: 40,
        height: 40,
        alt: 'Houvincity Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  keywords: [
    "Houvincity Real Estate and Propety Management Website",
    "Houvincity",
    "Houvincity Real Estate",
    "Houvincity Property Management",
    "Houvincity Website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Providers>
          {children}
        </Providers>
        <LiveChat />
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
