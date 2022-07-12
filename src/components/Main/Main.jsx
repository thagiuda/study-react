import styles from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links/Links";
import { Headline } from "src/components/Headline/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        code={<code className={styles.code}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
