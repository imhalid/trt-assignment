import styles from "./articles.module.css";;
import EditorsPick from "../editors-pick/editors-pick";
import { GET_ARTICLES } from "@/lib/api";

export default async function Articles() {
  const results = await GET_ARTICLES({ start: 0, end: 16 });
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.articlesWrapper}>{results}</div>
      <EditorsPick />
    </div>
  );
}
