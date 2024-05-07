"use client"

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-primary text-primary p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
