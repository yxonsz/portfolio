import styles from "./ExpEdu.module.css";

const educations = [
  {
    period: "2025.03 — 2028.02",
    place: "서울",
    org: "재학 중",
    role: "미림마이스터고등학교",
    status: "active",
    desc: "뉴미디어소프트웨어과.",
    highlights: [
      "HTML, CSS, JavaScript 기반 웹 프론트엔드 개발",
      "Python, Java, C 등 다양한 프로그래밍 언어 학습",
      "팀 프로젝트를 통한 협업 및 소통 역량 개발",
    ],
    tags: ["HTML/CSS", "JavaScript", "Python", "Java", "C", "Flutter"],
  },
];

export default function Education() {
  return (
    <section id="education" className={`section fade-in`}>
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <span className="section-sub">학력 및 교육</span>
      </div>

      {educations.map((edu, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.meta}>
            <div className={styles.period}>{edu.period}</div>
            <div className={styles.place}>{edu.place}</div>
          </div>
          <div className={styles.content}>
            <div className={styles.org}>{edu.org}</div>
            <div className={styles.role}>
              {edu.role}
              <span
                className={`status-badge ${edu.status === "active" ? "status-active" : "status-done"}`}
              >
                {edu.status === "active" ? "재학중" : "수료"}
              </span>
            </div>
            <p className={styles.desc}>{edu.desc}</p>
            <ul className={styles.highlights}>
              {edu.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {edu.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
