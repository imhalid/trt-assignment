import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import DropdownIcon from "@/svgs/dropdown";
import SearchIcon from "@/svgs/search";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Link href="/">
            <Image src="/trtlogo.svg" alt="logo" width={132} height={16} />
          </Link>
        </div>
        <div className={styles.headerRight}>
          <ul className={styles.headerList}>
            {headerLinks.map(({ href, label }) => (
              <li key={`${label}`}>
                <Link
                  href={href}
                  className={`${styles.headerLink} ${styles.headerLinkSeparator}`}
                >
                  {label}
                  <DropdownIcon />
                </Link>
              </li>
            ))}
            <li className={styles.li}>
              <Link
                className={`${styles.headerLink} ${styles.headerLive}`}
                href="/"
              >
                Live
              </Link>
            </li>
          </ul>
          <Link href="/" className={styles.search}>
            <SearchIcon width={22} height={22} color="white" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

type HeaderLink = {
  href: string;
  label: string;
};

const headerLinks: HeaderLink[] = [
  { href: "/", label: "News" },
  { href: "/", label: "Features" },
  { href: "/", label: "Topics" },
  { href: "/", label: "Video" },
];
