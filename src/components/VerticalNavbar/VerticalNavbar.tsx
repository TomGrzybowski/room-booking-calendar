import Links from "@/Mock/Links";
import Link from "next/link";
import styles from "./VerticalNavbar.module.scss";

const VerticalNavbar = () => {
  return (
    <ul className={styles.sidebarList}>
      {Links.map((link) => (
        <li key={link.id} className={styles.sidebarItem}>
          <Link href={link.path}>
            <link.icon size={20} />
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default VerticalNavbar;
