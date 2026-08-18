import { createFileRoute } from "@tanstack/react-router";
import { BlogDetail } from "@/components/blogs/details/BlogDetail";
import { BLOGS } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogPageComponent,
});

function BlogPageComponent() {
  const { slug } = Route.useParams();
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
