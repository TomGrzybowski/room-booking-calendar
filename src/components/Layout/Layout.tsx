"use client";

import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import styles from "./Layout.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.layoutContainer}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={
          isSidebarOpen ? `${styles.main} ${styles.sidebarOpen}` : styles.main
        }
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
