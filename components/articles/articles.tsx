import styles from "./articles.module.css";
import Image from "next/image";
import ArticlesCard from "./articles-card";
import EditorsPick from "../editors-pick/editors-pick";
import { GET_ARTICLES } from "@/lib/api";
// https://localhost:3001/contents --> 100 articles

export default async function Articles() {
  const results = await GET_ARTICLES(4);
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.articlesWrapper}>{results}</div>
      <EditorsPick />
    </div>
  );
}
