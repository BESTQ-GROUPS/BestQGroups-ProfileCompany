'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Detail Page Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Terjadi Kesalahan!</h2>
      <p className="text-gray-600 mb-4 text-center max-w-md">
        Pesan Error: {error.message}
      </p>
      <div className="bg-gray-100 p-4 rounded-md text-xs text-left w-full max-w-2xl overflow-auto mb-6">
        <pre>{error.stack}</pre>
      </div>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-bestq-blue text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
