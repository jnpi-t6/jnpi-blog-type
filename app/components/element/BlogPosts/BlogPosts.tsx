import { getBlogList } from "@/lib/api";
import BlogCard from "../BlogCard/BlogCard";

export default async function BlogPosts() {
  const { contents } = await getBlogList({ limit: 4 });

  return (
    <>
      <div className="max-w-inherit mt-16 bg-white">
        <h2 className="text-4xl font-bold">Recent Blog Posts</h2>
        <BlogCard contents={contents} />
      </div>
    </>
  );
}
