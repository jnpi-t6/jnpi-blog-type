import Link from "next/link";
import Image from "next/image";
import type { BlogProps } from "@/app/types/types";

interface BlogCardProps {
  contents: BlogProps[];
}

export default function BlogCard({ contents }: BlogCardProps) {
  return (
    <>
      <div className="relative bg-inherit w-full mt-8 mb-4 mx-auto grid grid-cols-1 grid-rows-1 items-stretch md:grid-cols-2 md:grid-rows-2 md:gap-4">
        {contents?.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="flex flex-col justify-center w-full mx-auto mt-8 mb-8 relative bg-white rounded-xl shadow-[5px_5px_10px_#edebe9,-5px_-5px_10px_#ffffff]"
          >
            {post.eyecatch ? (
              <div className="flex justify-center items-center p-4 mb-4 bg-[#eeeeee] rounded-t-xl">
                <Image
                  src={post.eyecatch.url}
                  alt={post.title}
                  width={400}
                  height={300}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100px",
                    height: "auto",
                  }}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center p-4 mb-4 bg-[#eeeeee] rounded-t-xl">
                <Image
                  src="/defaultImage.png"
                  alt="blog-image"
                  width={400}
                  height={300}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: "100px",
                    height: "auto",
                  }}
                />
              </div>
            )}
            <p className="flex-grow mx-2 my-2 text-xl font-semibold">
              {post.title}
            </p>

            <div className="absolute rounded-xl top-0 left-0 right-0 bottom-0 z-10 opacity-20 transition-colors duration-300 hover:bg-[#666666]"></div>
          </Link>
        ))}
      </div>
    </>
  );
}
