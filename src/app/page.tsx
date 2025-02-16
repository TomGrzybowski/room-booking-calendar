import Link from "next/link";
import styles from "./page.module.scss";
import Links from "@/Mock/Links";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.header}>Homepage Placeholder</h1>
        {Links.slice(1).map((link) => (
          <Link key={link.id} href={link.path}>
            <div className={styles.box}>
              <link.icon size={200} />
              <span>{link.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
