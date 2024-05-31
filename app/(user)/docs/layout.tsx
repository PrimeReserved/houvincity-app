import SearchBar from '@/components/mdx/SearchBar';
import Sidebar from '@/components/mdx/Sidebar';
import Head from 'next/head';
import Link from 'next/link';
import { data } from '@/components/mdx/data';

export default function MdxLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Create any shared layout or styles here
  return (
    <div>
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8 ">
      <Head>
        <title>Documentation</title>
      </Head>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          <Link href="/">
            Documentation{" "}
            <div className="badge badge-outline badge-customPrimary">v1</div>
          </Link>
        </h1>
        <div className="flex items-center">
          <SearchBar data={data}/>
        </div>
      </header>
      <div className="grid grid-cols-12 gap-4">
        <Sidebar />
        <main className="col-span-9">{children}</main>
      </div>
    </div>
    <footer className="bg-primary py-8 text-sm text-customPrimary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p>
        &copy; {new Date().getFullYear()} Documentation. All rights reserved.
      </p>
    </div>
  </footer>
    </div>
);
}
