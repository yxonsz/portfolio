import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.badge}>재학 중</span>
        <h1 className={styles.name}>
          기쁨과 편리를
          <br />
          코드로 담는 개발자,
          <br />
          이연수
        </h1>
        <p className={styles.desc}>
          미림마이스터고등학교에서 개발을 배우고 있습니다.
        </p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>📅 2009.03.13</span>
          <span className={styles.dot} />
          <span className={styles.metaItem}>📍 서울 강동구</span>
          <span className={styles.dot} />
          <span className={styles.metaItem}>✉️ yxxn_su@naver.com</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.sideBlock}>
          <div className={styles.sideLabel}>Currently</div>
          <div className={styles.sideValue}>
            <strong>2학년</strong>
            <br />
            @ 미림마이스터고등학교
            <br />
            뉴미디어소프트웨어과
          </div>
        </div>
        <div className={styles.sideBlock}>
          <div className={styles.sideLabel}>Focus</div>
          <div className={styles.sideTags}>
            {["HTML", "CSS", "JavaScript", "React"].map((t) => (
              <span key={t} className={styles.stag}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.sideBlock}>
          <div className={styles.sideLabel}>Goal</div>
          <div className={styles.sideValue}>
            사용자 경험을 고민하는
            <br />
            <strong>프론트엔드 개발자</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
