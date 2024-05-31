import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import LiveVisualEditing from "@/components/LiveVisualEditing";
import Logo from "@/public/logo.svg";


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
  openGraph: {
    description: "Houvincity Real Estate and Propety Management Website",
    images: [Logo],
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
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
