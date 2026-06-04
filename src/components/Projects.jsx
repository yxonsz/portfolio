import styles from "./Projects.module.css";

const projects = [
  {
    num: "001",
    title: "기숙사 세탁기 예약 시스템",
    desc: "MySQL과 Java Swing GUI를 활용해 기숙사 세탁기를 예약·취소할 수 있는 프로그램. 콘솔과 GUI 두 가지 방식으로 구현.",
    tags: ["Java", "Java Swing", "MySQL"],
    period: "2025.07.08 - 2025.07.18",
    link: "https://velog.io/@ye0n_s3/Java-자바-프로젝트-기숙사-세탁기-예약",
  },
  {
    num: "002",
    title: "반려동물 관리 웹",
    desc: "Java Script와 MySQL을 활용해 반려동물을 관리하는 프로그램. 반려동물 정보 등록, 일정 등록, 메모 기능 제공.",
    tags: ["JavaScript", "MySQL"],
    period: "2025.05.12 - 2025.06.04",
    link: "https://velog.io/@ye0n_s3/DBP-DB-프로젝트-반려동물-관리-웹",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`section fade-in`}>
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <span className="section-sub">만든 것들</span>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <a
            key={p.num}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <span className={styles.arrow}>↗</span>
            <div className={styles.num}>{p.num}</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.ptag}>
                  {t}
                </span>
              ))}
            </div>
            <div className={styles.period}>{p.period}</div>
          </a>
        ))}

        {/* coming soon 카드 */}
        <div className={`${styles.card} ${styles.soon}`}>
          <div className={styles.num} style={{ opacity: 0.4 }}>
            00{projects.length + 1}
          </div>
          <h3 className={styles.title} style={{ opacity: 0.5 }}>
            다음 프로젝트
          </h3>
          <p className={styles.desc} style={{ opacity: 0.5 }}>
            지금 작업 중이거나 곧 시작할 프로젝트를 여기에 추가해보세요.
          </p>
          <div className={styles.comingSoon}>coming soon</div>
        </div>
      </div>
    </section>
  );
}
