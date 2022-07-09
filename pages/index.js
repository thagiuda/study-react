import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Fotter";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="index" />
      <Footer />
    </div>
  );
}
