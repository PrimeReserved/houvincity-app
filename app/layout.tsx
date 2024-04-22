import type { Metadata } from 'next';
import { draftMode } from "next/headers";
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import LiveVisualEditing from "@/components/LiveVisualEditing";


const josefinSans = Josefin_Sans({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Houvincty',
  description: 'Houvincity Real Estate',
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
