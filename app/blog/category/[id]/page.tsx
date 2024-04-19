import { notFound } from "next/navigation";
import { getCategoryPosts, getCategories, getCategoryId } from "@/lib/api";
import BlogCard from "@/app/components/element/BlogCard/BlogCard";

interface CatPageProps {
  params: { id: string };
}

interface Category {
  id?: string;
  name?: string;
}

export async function generateStaticParams() {
  const categoryData = await getCategories();

  const paths = categoryData.contents.map((cat: Category) => {
    return {
      id: cat.id,
    };
  });
  return paths;
}

export default async function CategoryPage({ params: { id } }: CatPageProps) {
  const { contents } = await getCategoryPosts(id);

  const catData = await getCategoryId(id);

  const catName = catData.contents.map((cat: Category) => {
    return {
      name: cat.name,
    };
  });

  if (!contents) {
    notFound();
  }

  return (
    <>
      <div className="max-w-inherit mt-16 bg-white">
        {catName?.map((cat: Category) => (
          <h2 key={cat.id} className="text-4xl font-bold">
            {cat.name}
          </h2>
        ))}
        <BlogCard contents={contents} />
      </div>
    </>
  );
}
