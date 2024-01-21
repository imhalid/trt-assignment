"use server";

import ArticlesCard from "@/components/home-page-components/articles/articles-card";
import BigArticlesCard from "@/components/home-page-components/articles/big-articles-card";
import Journal from "@/components/home-page-components/journal/journal";
import db from '@/db.json'

import { Content } from "@/lib/definitions";

export const GET_ARTICLES = async ({ start = 0, end = 16 }) => {
  console.log(start, end);
  let data: Content[];
  try {
    const res = await fetch(
      `http://localhost:3001/contents?_start=${start}&_end=${end}`
    );
    data = await res.json();
  } catch (error) {
    console.error("Failed to fetch from API, using local data instead.", error);
    data = db.contents.slice(start, end).map((article) => ({
      ...article,
      id: article.id.toString(),
    }));
  }

  return data.map((article: Content, index: number) => {
    if ((index + 1) % 8 === 0) {
      return <BigArticlesCard key={article.id} data={article} />;
    } else if (index === 3) {
      return <Journal key={article.id} />;
    } else {
      return <ArticlesCard key={article.id} data={article} />;
    }
  });
};
