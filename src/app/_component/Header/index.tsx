import Image from "next/image";
import styles from "./Header.module.css";

import logo from "@/public/logo/logo.png";

export default function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <Image src={logo} alt="logo" width={100} height={100}></Image>
            <div className={styles.nav_container}>
              <div>여행</div>
              <div>커뮤니티</div>
            </div>
          </div>
          <div className={styles.right_container}>
            <div>알림</div>
            <div>로그인</div>
            <div>마이페이지</div>
            <div className={styles.logout}>로그아웃</div>
          </div>
        </div>
      </div>
    </>
  );
}
