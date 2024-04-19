import { createClient } from "microcms-js-sdk";
import type { BlogProps, CategoryDataProps } from "@/app/types/types";
import type { MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

// ブログ全一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList({
    endpoint: "blogs",
    queries,
  });

  return listData;
};

// カテゴリーを取得
export async function getCategories() {
  const categories = await client.get<CategoryDataProps>({
    endpoint: "category",
  });

  return categories;
}

// 動的なルーティングに合わせてカテゴリー（各カテゴリー名が欲しい）を取得する
export async function getCategoryId(id: string) {
  const categories = await client.get<CategoryDataProps>({
    endpoint: "category",
    queries: { filters: `id[equals]${id}` },
  });

  return categories;
}

// カテゴリーごとに作品一覧を取得
export const getCategoryPosts = async (id: string) => {
  const postsData = await client.getList({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${id}`,
    },
  });

  return postsData;
};

// 作品の本文を取得
export const getPosts = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const postsData = await client.getListDetail<BlogProps>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return postsData;
};
