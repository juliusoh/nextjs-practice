import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

type ComponentPropsInterface = {
  children: React.ReactNode;
};

const Layout = ({ children }: ComponentPropsInterface) => {

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
