import { createFileRoute } from "@tanstack/react-router";
import { BlogsList } from "@/components/blogs/BlogsList";

export const Route = createFileRoute("/blogs/")({
  component: BlogsList,
});
