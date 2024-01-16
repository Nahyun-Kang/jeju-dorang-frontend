import Image from "next/image";
import styles from "./home.module.css";

import Header from "./_component/Header";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.contents_wrapper}>
          <div></div>
          <div>
            <div>title</div>
            <p>tags</p>
          </div>
        </div>
      </div>
    </div>
  );
}
