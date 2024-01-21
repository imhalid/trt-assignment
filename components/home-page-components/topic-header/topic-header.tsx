import styles from "./topic-header.module.css";
import Link from "next/link";

export default function TopicHeader() {
  return (
    <div className={styles.topics}>
      <ul>
        <li className={styles.topicsMain}>
          <Link href="/">Topics</Link>
        </li>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link href={topic.link}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Topic = {
  id: number;
  name: string;
  link: string;
};

const topics: Topic[] = [
  { id: 1, name: "Azerbaijan-Armenia Dispute", link: "/" },
  { id: 2, name: "Covid-19", link: "/" },
  { id: 3, name: "Eastern Mediterranean", link: "" },
  { id: 4, name: "My Turkey", link: "/" },
];
