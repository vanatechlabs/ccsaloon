import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { BlogsList } from "@/components/blogs/BlogsList/BlogsList";

export const metadata: Metadata = {
  title: `Blogs — ${SITE.name}`,
  description: "Beauty tips, hair care guides and bridal inspiration from the CityCalls Saloon team.",
};

export default function BlogsPage() {
  return <BlogsList />;
}
