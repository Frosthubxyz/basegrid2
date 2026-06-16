"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 py-24 px-6 text-center">
        <div className="bg-zinc-900 border border-red-500/30 rounded-3xl p-12 max-w-lg w-full">
          <div className="w-16 h-16 bg-red-500/20 text-red-500 flex items-center justify-center rounded-2xl mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
          <p className="text-zinc-400 mb-8">
            An unexpected error occurred in the application. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-colors"
          >
            Try Again
          </button>
        </div>
      </main>
    </>
  );
}
