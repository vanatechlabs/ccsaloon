import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="h-display text-gradient-gold">Page Not Found</h1>
        <p className="font-luxury mt-4 text-lg italic text-muted-foreground">
          The page you&apos;re searching for has slipped away.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gradient-gold px-7 py-3 text-xs uppercase tracking-[0.25em] text-background"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
