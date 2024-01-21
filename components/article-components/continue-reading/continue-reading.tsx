import Image from "next/image";
import styles from "./continue-reading.module.css"; // replace with your actual styles file
import { NextArticle } from '@/lib/definitions'

export default function ContinueReading({
  imageUrl,
  altText,
  category,
  date,
  title,
}: NextArticle) {
  return (
    <div className={styles.nextArticleWrapper}>
      <span>continue reading</span>
      <div className={styles.nextArticle}>
        <Image src={imageUrl} width={212} height={120} alt={altText} />
        <div className={styles.nextArticleText}>
          <div className={styles.catDate}>
            <p className={styles.category}>{category}</p>
            <p className={styles.date}>{date}</p>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
