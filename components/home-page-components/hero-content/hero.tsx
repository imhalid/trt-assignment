import styles from "./hero.module.css";
import Image from "next/image";
import FillPlayIcon from "@/svgs/fill-play";
import SmallPlayIcon from "@/svgs/small-play";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image
            src="/images/home-page/hero-b1.jpg"
            alt="Hero Image"
            width={664}
            height={373}
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className={styles.heroTitle}>
          Turkey close to producing its own Covid-19 vaccine
        </h1>

        <p className={styles.heroDescription}>
          The scientific committee has completed the animal trials phase in two
          vaccines, according to the Minister for Industry and Technology,
          Mustafa Varank, and they &quot;want to start human trials after the
          necessary evaluation and the certification of the facilities for the
          pilot production of these vaccines.&quot;
        </p>
      </div>
      <div className={styles.secondaryContainer}>
        {secondColumnData.map((item) => (
          <div className={styles.secondaryItem} key={item.id}>
            <div className={styles.secondColumnImage}>
              <Image
                src={item.imagePath}
                alt="Hero Image"
                width={120}
                height={120}
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className={styles.secondaryTitle}>{item.title}</h2>
          </div>
        ))}
        <div className={styles.dailyBrief}>
          <FillPlayIcon className={styles.fillIcon} />
          <h3 className={styles.dailyBriefText}>
            Listen to the Daily News Brief
          </h3>
        </div>
      </div>
      <div className={styles.thirtyContainer}>
        <div>
          <div className={styles.dailyVideo}>
            <Image
              src="/images/home-page/hero-s2.png"
              alt="Hero Image"
              width={296}
              height={166}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.videoInformation}>
              <SmallPlayIcon />
              <p className={styles.videoTime}>5:53</p>
            </div>
            <h3>Why do we smell things?</h3>
          </div>

          {thirdColumnData.map((item) => (
            <div className={styles.thirtyItem} key={item.id}>
              <div className={styles.thirtyImage}>
                <Image
                  src={item.imagePath}
                  alt="Hero Image"
                  width={48}
                  height={48}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.thirtyTexts}>
                <p className={styles.thirtyName}>{item.name}</p>
                <p className={styles.thirtyTitle}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const secondColumnData = [
  {
    id: 1,
    title: "There’s a second wave of Covid-19 coming, and it could be rough",
    imagePath: "/images/home-page/hero-s1.jpg",
    href: "/",
  },
  {
    id: 2,
    title: "Iran’s #MeToo opens long-overdue discussion on sexual abuse",
    imagePath: "/images/home-page/hero-s4.png",
    href: "/",
  },
  {
    id: 3,
    title:
      "Pakistan's Gilgit-Baltistan: Between the Kashmir conflict and China",
    imagePath: "/images/home-page/hero-s3.png",
  },
];

const thirdColumnData = [
  {
    id: 1,
    name: "Carel du Marchie Sarvaas",
    title: "Why an effective vaccine is just the start of disease control",
    imagePath: "/images/home-page/profile1.jpg",
  },
  {
    id: 2,
    name: "Giorgio Cafiero",
    title:
      "This African nation could be the next to normalise ties with Israel",
    imagePath: "/images/home-page/profile2.jpg",
  },
  {
    id: 3,
    name: "CJ Werleman",
    title: "The UAE's alarming reliance on mercenaries",
    imagePath: "/images/home-page/profile3.jpg",
  },
];
