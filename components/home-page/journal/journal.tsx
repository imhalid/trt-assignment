import styles from "./journal.module.css";
import Image from "next/image";
import SmallPlayIcon from "@/svgs/small-play";
import FillPlayIcon from "@/svgs/fill-play";
export default function Journal() {
  return (
    <div className={`${styles.container} bottomBorder`}>
      <h1>Journal</h1>
      <div className={styles.journalWrapper}>
        <div className={styles.columnOne}>
          <Image
            width={468}
            height={201}
            src="/images/home-page/journal-1.jpg"
            alt="covid"
          />
          <h1>Is Covid-19 ‘herd immunity’ really working in Pakistan?</h1>
          <p>
            Surveys suggest coronavirus has infected so many people, that in
            some countries, immunity to the deadly virus has been developed. But
            experts remain sceptical.
          </p>
        </div>
        <div className={styles.columnTwo}>
          <div className={styles.columnTwoCard}>
            <div className={styles.imageWrapper}>
              <Image
                width={120}
                height={120}
                src="/images/home-page/journal-2.jpg"
                alt="covid"
              />
              <FillPlayIcon width={32} hanging={32} />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.videoInfo}>
                <SmallPlayIcon />
                <p>5:53</p>
              </div>
              <h1>Valentino chooses Milan for unusual live show, not Paris</h1>
            </div>
          </div>
          <div className={styles.columnTwoCard}>
            <div className={styles.imageWrapper}>
              <Image
                width={120}
                height={120}
                src="/images/home-page/journal-3.jpg"
                alt="valentino"
              />
            </div>
            <div className={styles.textWrapper}>
              <h1>
                Australian PM Morrison : World needs to know origins of Covid-19
              </h1>
            </div>
          </div>
          <div className={styles.story}>
            <Image
              width={48}
              height={48}
              src="/images/home-page/profile3.jpg"
              alt="covid"
            />
            <div className={styles.storyText}>
              <p>Carel du Marchie Sarvaas</p>
              <h1>
                Why an effective vaccine is just the start of disease control
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
