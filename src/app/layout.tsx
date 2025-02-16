import type { Metadata } from "next";

import "../styles/globals.scss";
import "../styles/variables.scss";
// import Sidebar from "../components/SideBar/Sidebar";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Room Reservation System",
  description: "Book rooms for employees",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
