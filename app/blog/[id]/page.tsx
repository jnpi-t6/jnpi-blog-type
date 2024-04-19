import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import parse from "html-react-parser";
import { getPosts, getBlogList } from "@/lib/api";

interface PageProps {
  params: { id: string };
}

interface PostProps {
  id: string;
}

export async function generateMetadata({
  params: { id },
}: PageProps): Promise<Metadata> {
  const metadata = await getPosts(id);

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    openGraph: {
      title: metadata.title,
      images: metadata.eyecatch,
    },
  };
}

export async function generateStaticParams() {
  const { contents } = await getBlogList();

  const paths = contents.map((post: PostProps) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function PageDetail({ params: { id } }: PageProps) {
  const post = await getPosts(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div>
        <div className="flex flex-col bg-white p-4 shadow-[5px_5px_10px_#edebe9,-5px_-5px_10px_#ffffff]">
          {post.eyecatch ? (
            <div className="flex justify-center items-center w-full py-4 bg-[#eeeeee] rounded-xl">
              <Image
                src={post.eyecatch.url}
                alt={post.title}
                width={400}
                height={300}
                sizes="100vw"
                style={{ objectFit: "cover", width: "120px", height: "auto" }}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center w-full py-4 bg-[#eeeeee] rounded-xl">
              <Image
                src="/defaultImage.png"
                alt="blog-image"
                width={400}
                height={300}
                sizes="100vw"
                style={{ objectFit: "cover", width: "120px", height: "auto" }}
              />
            </div>
          )}
          <h1 className="text-3xl font-bold mt-16 mb-8 py-8 border-t-[3px] border-b-[3px] border-dotted border-gray-400">
            {post.title}
          </h1>
          <div className="flex flex-col mt-8 p-4 [&>h2]:mt-8 [&>h2]:font-bold [&>h2]:text-2xl [&>hr]:mb-8 [&>p]:text-lg font-normal [&>p]:pb-4">
            {parse(post.content)}
          </div>
        </div>
      </div>
    </>
  );
}
