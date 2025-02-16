"use client";

import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Sidebar.module.scss";

import VerticalNavbar from "../VerticalNavbar/VerticalNavbar";

const Sidebar: React.FC<{
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}> = ({ isSidebarOpen, toggleSidebar }) => {
  console.log("Sidebar rendered");

  return (
    <div
      className={
        isSidebarOpen
          ? styles.sidebarOpen
          : `${styles.sidebarOpen} ${styles.sidebarClosed}`
      }
    >
      <div onClick={toggleSidebar} className={styles.menuIcon}>
        <FaBars size={25} />
      </div>
      <VerticalNavbar />
    </div>
  );
};

export default Sidebar;
