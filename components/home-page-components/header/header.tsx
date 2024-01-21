import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import DropdownIcon from "@/svgs/dropdown";
import SearchIcon from "@/svgs/search";
import { HeaderLink } from "@/lib/definitions";
import MobileHeader from "./mobile-header";

export default function Header({
  backgroundColor = "#131414",
  searchIconBackground = "#22262a",
  divider = true
}: {
  backgroundColor?: string;
  searchIconBackground?: string;
  divider?: boolean;
}) {
  return (
    <nav
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles.header}
    >
      <div className={styles.headerContainer}>
        <div>
          <Link href="/">
            <Image src="/trtlogo.svg" alt="logo" width={132} height={16} />
          </Link>
        </div>
        <div className={styles.headerRight}>
          <ul className={styles.headerList}>
            {headerLinks.map(({ href, label }) => (
              <li
                style={{
                  borderRight: divider
                    ? `1px solid ${searchIconBackground}`
                    : "none",
                }}
                key={`${label}`}
              >
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
          <Link
            style={{
              backgroundColor: searchIconBackground,
            }}
            href="/"
            className={styles.search}
          >
            <SearchIcon width={22} height={22} color="white" />
          </Link>

          <MobileHeader
            headerLinks={headerLinks}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>
    </nav>
  );
}

const headerLinks: HeaderLink[] = [
  { href: "/", label: "News" },
  { href: "/", label: "Features" },
  { href: "/", label: "Topics" },
  { href: "/", label: "Video" },
];
