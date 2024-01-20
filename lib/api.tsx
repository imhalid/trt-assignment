"use server";

import ArticlesCard from "@/components/articles/articles-card";
import BigArticlesCard from "@/components/articles/big-articles-card";
import Content from "@/types/content.ts";

export const GET_ARTICLES = async (page: number = 1) => {
  const res = await fetch(
    `http://localhost:3001/contents?_page=${page}&_per_page=16`
  );
  const { data } = await res.json();
  console.log(data.length);
  return data.map((article: Content, index: number) => {
    if ((index + 1) % 7 === 0) {
      return <BigArticlesCard key={article.id} data={article} />;
    } else {
      return <ArticlesCard key={article.id} data={article} />;
    }
  });
};
