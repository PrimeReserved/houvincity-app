"use client"

import React from 'react';

export default function Error({ error, reset }: Readonly<{ error?: Error; reset?: () => void }>) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h2 className='text-2xl md:text-3xl font-semibold '>Something went wrong!</h2>{' '}
      {error && <p className='px-5'>Error: {error.message}</p>}
      {reset && <button onClick={reset}>Try again</button>}
    </div>
  );
}