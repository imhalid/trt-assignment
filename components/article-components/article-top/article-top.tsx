import styles from "./article-top.module.css";
import Image from "next/image";

export default function ArticleTop() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.catDate}>
        <p className={styles.category}>Americas</p>
        <p className={styles.date}>1 hour ago</p>
      </div>
      <div className={styles.about}>
        <h1 className={styles.title}>
          Early US voting numbers indicate record turnout for November election
        </h1>
        <h3 className={styles.description}>
          The early surge in voting has led to the prediction of a record
          turnout of about 150 million, representing 65 percent of eligible
          voters, the highest rate since 1908.
        </h3>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.column}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/article-page/hero-b1.jpg"
              width={1008}
              height={567}
              alt="article top image"
            />
            <div className={styles.imageInfo}>
              <p className={styles.imageSource}>REUTERS</p>
              <p className={styles.imageCaption}>
                Orange County Registrar in Santa Ana, California, US, October,
                5, 2020.
              </p>
            </div>
          </div>
          <div className={styles.articleContainer}>
            <p className={styles.paragraph}>
              Americans are rushing to cast ballots ahead of the November
              election at an unprecedented pace, early voting numbers show,
              indicating a possible record turnout for the showdown between
              President Donald Trump and Democratic rival Joe Biden.
            </p>
            <p className={styles.paragraph}>
              With four weeks to go before Election Day November 3, more than
              3.8 million Americans already have voted, far surpassing about
              75,000 at this time in 2016, according to the US Elections
              Project, which compiles early voting data.
            </p>
            <p className={styles.paragraph}>
              The shift has been driven by an expansion of early and mail-in
              voting in many states as a safe way to cast a ballot during the
              coronavirus pandemic and an eagerness to weigh in on the political
              future of Trump, said Michael McDonald of the University of
              Florida, who administers the project.
            </p>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-DUN-C2kbKU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <h2>Record Turnout?</h2>
            <p className={styles.paragraph}>
              &apos;We&apos;ve never seen this many people voting so far ahead
              of an election,&quot; McDonald said. &quot;People cast their
              ballots when they make up their minds, and we know that many
              people made up their minds long ago and already have a judgment
              about Trump.&apos;
            </p>
            <p className={styles.paragraph}>
              The early surge has led McDonald to predict a record turnout of
              about 150 million, representing 65 percent of eligible voters, the
              highest rate since 1908.
            </p>
            <p className={styles.paragraph}>
              Biden leads Trump in national opinion polls, although surveys in
              crucial battleground states indicate a tighter race.
            </p>
            <p className={styles.paragraph}>
              The numbers reported so far come from 31 states, McDonald said,
              and will grow rapidly as more states begin early in-person voting
              and report absentee mail-in totals in the next few weeks. All but
              about a half-dozen states allow some level of early in-person
              voting.
            </p>
            <p className={styles.paragraph}>
              The percentage of voters who cast their ballot at a voting machine
              on Election Day already had been in steady decline before this
              year, according to the US Election Assistance Commission.
            </p>
            <p className={styles.paragraph}>
              The total number of early or mail-in votes more than doubled from
              nearly 25 million in 2004 to 57 million in 2016, it said,
              representing an increase from one in five of all ballots cast to
              two in five of all ballots cast.
            </p>
            <div className={styles.readMore}>
              <Image
                src="/images/article-page/read-more-1.jpg"
                width={212}
                height={120}
                alt="article top image"
              />
              <div className={styles.readMoreText}>
                <p>Read More</p>
                <h3>
                  Trump urges &apos;vote by mail&apos; in Florida in reversal of
                  his earlier stance
                </h3>
              </div>
            </div>
            <p className={styles.paragraph}>
              Trump has repeatedly railed against mail-in voting, making
              unfounded accusations that it leads to fraud. Experts say fraud is
              rare.
            </p>
            <p className={styles.paragraph}>
              Those attacks by the president have shown signs of depressing
              Republican interest in voting by mail. Democrats have more than
              doubled the number of returned mail-in ballots by Republicans in
              seven states that report voter registration data by party,
              according to the Elections Project.
            </p>
            <p className={styles.paragraph}>
              In the crucial battleground state of Florida, Democrats have
              requested more than 2.4 million mail-in ballots and returned
              282,000, while Republicans have asked for nearly 1.7 million and
              returned more than 145,000.
            </p>
            <p className={styles.paragraph}>
              A national Reuters/Ipsos poll taken last week found 5 percent of
              Democrats nationwide said they had already voted compared to 2
              percent of Republicans. About 58 percent of Democrats planned to
              vote early compared to 40 percent of Republicans.
            </p>
            <div className={styles.readMore}>
              <Image
                src="/images/article-page/read-more-2.jpg"
                width={212}
                height={120}
                alt="article top image"
              />
              <div className={styles.readMoreText}>
                <p>Read More</p>
                <h3>Biden, Trump in fiery first US presidential debate</h3>
              </div>
            </div>
            <p className={styles.paragraph}>
              McDonald said early voting typically starts strong, then drops
              before surging just ahead of the election. But in some states, the
              rates of participation already have skyrocketed a month out.
            </p>
            <p className={styles.paragraph}>
              In South Dakota, early voting is nearly 23 percent of the total
              turnout in 2016. It is nearly 17 percent of total 2016 turnout in
              Virginia and nearly 15 percent of total 2016 turnout in the
              battleground state of Wisconsin.
            </p>
            <div className={styles.videoWrapper}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jLkDkkPauqk?si=Pa007Go5HmFpG2ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <p className={styles.paragraph}>
              &quot;That&apos;s just nuts,&quot; McDonald said. &quot;Every
              piece of data suggests very high turnout for this election. I
              think that&apos;s just a given.&quot;
            </p>
            <div className={styles.articleSource}>
              <span className={styles.sourceTitle}>Source:</span>
              <span className={styles.sourceName}>Reuters</span>
            </div>
						<hr className={styles.hr} />
            <div className={styles.nextArticleWrapper}>
              <span>continue reading</span>
              <div className={styles.nextArticle}>
                <Image
                  src="/images/article-page/side-1.jpg"
                  width={212}
                  height={120}
                  alt="article top image"
                />
                <div className={styles.nextArticleText}>
                  <div className={styles.catDate}>
                    <p className={styles.category}>Americas</p>
                    <p className={styles.date}>30 JAN 2020</p>
                  </div>
                  <h3>
                    Is Bernie Sanders actually revolutionary and what does he
                    stand for?
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sideWrapper}>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <p key={index} className={styles.tag}>
                {tag}
              </p>
            ))}
          </div>

          <div className={styles.relatedContainer}>
            {relatedArticles.map((article) => (
              <div key={article.id} className={styles.relatedArticle}>
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
        </div>
      </div>
    </div>
  );
}

const tags = [
  "unıted states of amerıca",
  "votes",
  "Northern America",
  "us electıons",
  "amerıcas",
];

const relatedArticles = [
  {
    id: 1,
    title:
      "Is Bernie Sanders actually revolutionary and what does he stand for?",
    imagePath: "/images/article-page/side-1.jpg",
  },
  {
    id: 2,
    title: "Trump's CIA pick vows spy agency will not engage in torture",
    imagePath: "/images/article-page/side-2.jpg",
  },
  {
    id: 3,
    title: "US vows to make North Korea rich if it gives up nukes",
    imagePath: "/images/article-page/side-3.jpg",
  },
  {
    id: 4,
    title: "Robert Mueller had authority to prosecute Paul Manafort: judge",
    imagePath: "/images/article-page/side-4.jpg",
  },
  {
    id: 5,
    title: "Robert Mueller had authority to prosecute Paul Manafort: judge",
    imagePath: "/images/article-page/side-5.jpg",
  },
];
