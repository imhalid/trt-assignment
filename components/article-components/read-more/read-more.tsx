import Image from "next/image";
import styles from "./read-more.module.css"; // replace with your actual styles file
import {ReadMore } from '@/lib/definitions'

function ReadMore({ imageUrl, altText, title }: ReadMore) {
  return (
    <div className={styles.readMore}>
      <Image src={imageUrl} width={212} height={120} alt={altText} />
      <div className={styles.readMoreText}>
        <p>Read More</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ReadMore;
