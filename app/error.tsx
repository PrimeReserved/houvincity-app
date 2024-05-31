'use client' // Error components must be Client Components

import { useEffect, useState } from 'react';
import Image from "next/image"
import ErrorImage from "@/public/server-rror.png"

interface ErrorProps {
  error: Error | null;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  if (!error) {
    return (
      <div className="flex justify-center items-center h-screen">
      <div className=" text-customSecondary text-center p-6 shadow-xl rounded-xl">
      <figure className='mb-5'>
            <Image
              src={ErrorImage}
              alt="Error"
              width={500}
              height={200}
              loading='lazy'
            />
        </figure>
        <h2 className="text-xl font-bold mb-4">Internal Server Error!</h2>
        <p className='pb-5'>Please check your internet connection</p>
        {notification && (
          <div>
            <p>{notification}</p>
            <button onClick={() => setNotification('')}>Dismiss</button>
          </div>
        )}
        <button
          className="bg-primary hover:bg-customPrimary hover:tex-white text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-primary text-customSecondary p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
        {notification && (
          <div>
            <p>{notification}</p>
            <button onClick={() => setNotification('')}>Dismiss</button>
          </div>
        )}
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Error;
