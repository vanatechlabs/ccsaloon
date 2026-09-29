import type { Metadata } from "next";
import { BLOGS } from "@/data/blogs";
import { SITE } from "@/data/site";
import { BlogDetail } from "@/components/blogs/BlogDetail/BlogDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);
  return { title: blog ? `${blog.title} — ${SITE.name}` : `Blog not found — ${SITE.name}` };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-[#0e0c09]">
        <p className="text-[#c9a84c] text-xl font-['Cormorant_Garamond',serif]">Blog not found.</p>
      </div>
    );
  }

  return <BlogDetail blog={blog} />;
}
