import Image from "next/image";
import styles from "./Footer.module.css";
import footerLogo from "@/public/logo/footer_logo.png";
import visitJeju from "@/public/logo/logo_visitJeju.png";
import jejuLogo from "@/public/logo/logo_jejuCity.png";
import jejuTripLogo from "@/public/logo/logo_jejeuTripPublic.png";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <div className={styles.inner_wrapper}>
        <div className={styles.left}>
          <div className={styles.left_first}>
            <Image src={footerLogo} alt="제주도랑 로고" width={100}></Image>
            <span>개인정보처리방침</span>
          </div>
          <div className={styles.left_second}>
            <span>제주관광정보센터</span>
            <span>064)740-6000</span>
          </div>
          <div className={styles.left_third}>
            <div>Copyright ©제주도랑</div>
            <div>All rights reserved</div>
          </div>
        </div>
        <div>
          <p className={styles.description}>
            (63122)제주특별자치도 제주시 선덕로 23(면동) 제주웰컴센터
            <br />
            관광문의 제주관광공사 Tel 064-740-6000-1
            <br />
            FAX: 064-740-6090
            <br />
            사업자등록번호: 616-82-21432
            <br />
            관광불편신고: 제주안내 120콜센터(국번없이120번)
          </p>
          <div>
            <Image src={visitJeju} alt="VISIT JEJU  로고"></Image>
            <Image src={jejuTripLogo} alt="제주관광공사 로고"></Image>
            <Image src={jejuLogo} alt="제주CI"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
