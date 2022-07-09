import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Fotter";
import { Links } from "../components/Links";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>index page</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
