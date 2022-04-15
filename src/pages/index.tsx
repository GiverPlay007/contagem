import Head from "next/head";
import { Calculator } from "../components/Calculator";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Contagem</title>
      </Head>
      
      <Calculator/>

    </div>
  );
}