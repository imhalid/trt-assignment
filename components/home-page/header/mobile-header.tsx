'use client'

import styles from "./mobile-header.module.css";
import HamburgerMenu from "@/svgs/hamburger-menu";
import {HeaderLink} from "@/lib/definitions";
import CloseIcon from "@/svgs/close";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileHeader({
  headerLinks,
  backgroundColor = "black",

}: {
  headerLinks: HeaderLink[];
  backgroundColor?: string;
}) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <nav className={styles.mobileHeader}>
      <button className={styles.mobileHeaderButton} onClick={toggleOpen}>
        <HamburgerMenu color="white" />
      </button>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
      >
        {/* <button className={styles.closeButton} onClick={toggleOpen}>
          <CloseIcon color="white" />
        </button> */}
        <ul className={styles.mobileMenuList}>
          {headerLinks.map(({ href, label }) => (
            <li key={`${label}`}>
              <Link
                href={href}
                className={`${styles.mobileMenuLink} ${styles.mobileMenuLinkSeparator}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileMenuLi}>
            <Link
              className={`${styles.mobileMenuLink} ${styles.mobileMenuLive}`}
              href="/"
            >
              Live
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}