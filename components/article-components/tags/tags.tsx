import styles from "./tags.module.css"; // replace with your actual styles file
import { TagsProps } from "@/lib/definitions";

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={styles.sideWrapper}>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <p key={index} className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
