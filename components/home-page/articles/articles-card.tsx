import styles from "./articles-card.module.css";
import Image from "next/image";
import { Content } from "@/lib/definitions";

export default function ArticlesCard({ data }: { data: Content }) {
  const newImageUrl = data.mainImageUrl.replace(
    "trtworld/",
    "trtworld/w480/q80/"
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
      <Image width={406} height={234} src={newImageUrl} alt={data.title} />
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
