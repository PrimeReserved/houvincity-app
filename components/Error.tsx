"use client"

import React from 'react';

export default function Error({ error, reset }: Readonly<{ error?: Error; reset?: () => void }>) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      {error && <p>Error: {error.message}</p>}
      {reset && <button onClick={reset}>Try again</button>}
    </div>
  );
}