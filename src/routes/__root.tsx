import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { LenisProvider } from "@/components/effects/LenisProvider";
import { AosInit } from "@/components/effects/AosInit";
import { SITE } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="h-display text-gradient-gold">Page Not Found</h1>
        <p className="font-luxury mt-4 text-lg italic text-muted-foreground">
          The page you're searching for has slipped away.
        </p>
        <a href="/" className="mt-8 inline-block rounded-full bg-gradient-gold px-7 py-3 text-xs uppercase tracking-[0.25em] text-background">
          Return Home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="h-display text-gradient-gold">Something went wrong</h1>
        <p className="font-luxury mt-4 text-lg italic text-muted-foreground">
          A small hiccup interrupted the experience.
        </p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-gradient-gold px-7 py-3 text-xs uppercase tracking-[0.25em] text-background"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "theme-color", content: "#050505" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE.name} — Luxury Salon & Beauty Studio` },
      { property: "og:description", content: SITE.description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: SITE.name,
          description: SITE.description,
          telephone: SITE.phonesRaw,
          openingHours: "Mo-Su 10:00-21:00",
          priceRange: "$$$",
          image: "/og-image.jpg",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Preloader /> */}
      <LenisProvider />
      <AosInit />
      {/* <TopBar /> */}
      <Navbar />
      <SocialSidebar />
      <FloatingContact />
      <main className="relative pt-[68px] md:pt-[76px]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
