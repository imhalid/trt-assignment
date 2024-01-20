import styles from './big-articles-card.module.css';

import Image from "next/image";
import { Content, Category } from "@/types/content.ts";

export default function BigArticlesCard({ data }: { data: Content }) {
  const newImageUrl = data.mainImageUrl.replace(
    "trtworld/",
    "trtworld/w664/h374/q70/"
  );
  const date = new Date(data.publishedDate);
  const formattedDate = date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const lastCategory = data.categories[data.categories.length - 1];
  return (
    <div className={styles.container}>
      <Image width={920} height={400} style={{objectFit: 'cover'}} src={newImageUrl} alt={data.title} />
      <div className={styles.texts}>
        <div className={styles.articleInfo}>
          <p className={styles.category}>{lastCategory.title}</p>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <div className={styles.articleText}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}