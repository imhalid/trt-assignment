import Image from "next/image";
import styles from "./related-articles.module.css"; // replace with your actual styles file
import { RelatedArticlesProps } from "@/lib/definitions";

export default function RelatedArticles({ relatedArticles }: RelatedArticlesProps) {
  return (
    <div className={styles.relatedContainer}>
      {relatedArticles.map((article) => (
        <div key={article.id} className={`${styles.relatedArticle} topBorder`}>
          <Image
            src={article.imagePath}
            width={120}
            height={120}
            alt="related article image"
            style={{ objectFit: "cover" }}
          />
          <p className={styles.relatedArticleTitle}>{article.title}</p>
        </div>
      ))}
    </div>
  );
};

