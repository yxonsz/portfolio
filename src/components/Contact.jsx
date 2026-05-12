import styles from "./Contact.module.css";

const EMAIL = "yxxn_su@naver.com";

export default function Contact() {
  return (
    <section id="contact" className={`section fade-in`}>
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <span className="section-sub">연락하기</span>
      </div>

      <div className={styles.wrap}>
        <div className={styles.main}>
          <div className={styles.emailRow}>
            {EMAIL.split("").map((ch, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {ch}
              </span>
            ))}
          </div>
          <p className={styles.note}>
            메일 주시면 <strong>1–2일</strong> 내로 꼭 답장드리겠습니다.
          </p>
          <a href="mailto:yxxn_su@naver.com" className={styles.cta}>
            메일 보내기
          </a>
        </div>

        <div className={styles.side}>
          <div className={styles.footerName}>이연수</div>
          <div className={styles.tagline}>프론트엔드 개발자를 꿈꾸는 학생</div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/yxonsz"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/yx0n.s3/?__pwa=1"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              Instagram
            </a>
            <a href="https://velog.io/@ye0n_s3/posts" className={styles.social}>
              velog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
