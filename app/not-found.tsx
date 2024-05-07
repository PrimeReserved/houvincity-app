import Image from 'next/image';
import Link from 'next/link';
import ErrorImage from "@/public/404-error.png"

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="card bg-white text-primary p-6 rounded-lg text-center shadow-xl">
        <figure className='mb-5'>
            <Image
              src={ErrorImage}
              alt="Error"
              width={300}
              height={200}
              loading='lazy'
            />
        </figure>
        <p className="text-lg mb-4 text-customSecondary">Could not find requested resource</p>
        <Link href="/" className="text-lg font-semibold hover:underline text-customPrimary hover:text-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
