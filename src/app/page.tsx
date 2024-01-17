import Image from "next/image";
import styles from "./home.module.css";
import { inherits } from "util";

const DUMMY_DATA = {
  name: "바당의물질",
  tags: "특산물,착한가격 업소",
  imageUrl:
    "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/98be55f3-fd3f-418b-b1ca-fcd3b0630170.jpg",
};

export default function Home() {
  const imgUrl = DUMMY_DATA.imageUrl;
  const imageStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.contents_wrapper}>
          <div className={styles.image} style={imageStyle}></div>
          <div className={styles.text_container}>
            <div className={styles.title}>{DUMMY_DATA.name}</div>
            <span className={styles.tags}>{DUMMY_DATA.tags}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
