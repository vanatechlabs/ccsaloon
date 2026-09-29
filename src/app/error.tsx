"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="h-display text-gradient-gold">Something went wrong</h1>
        <p className="font-luxury mt-4 text-lg italic text-muted-foreground">
          A small hiccup interrupted the experience.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-gradient-gold px-7 py-3 text-xs uppercase tracking-[0.25em] text-background"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
