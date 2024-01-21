"use server";

import ArticlesCard from "@/components/home-page/articles/articles-card";
import BigArticlesCard from "@/components/home-page/articles/big-articles-card";
import Journal from "@/components/home-page/journal/journal";

import { Content } from "@/lib/definitions";

export const GET_ARTICLES = async ({ start = 0, end = 16 }) => {
  console.log(start, end);
  const res = await fetch(
    `http://localhost:3001/contents?_start=${start}&_end=${end}`
  );
  const data = await res.json();
  return data.map((article: Content, index: number) => {
    if ((index + 1) % 7 === 0) {
      return <BigArticlesCard key={article.id} data={article} />;
    } else if (index === 3) {
      return <Journal key={article.id} />;
    } else {
      return <ArticlesCard key={article.id} data={article} />;
    }
  });
};
