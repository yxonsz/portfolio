import styles from "./ExpEdu.module.css";

const experiences = [
  {
    period: "2025.03 — 진행중",
    place: "전공 동아리",
    org: "교내 활동",
    role: "CPU",
    status: "active",
    desc: "부원들과 함께 프로젝트를 기획하고 개발하는 동아리 활동 중.",
    highlights: [
      "Java에 대해 수업을 듣고 직접 코드 작성",
      "HTML·CSS로 팀 소개 페이지 제작",
      "JavaScript 기초 스터디 운영 및 참여",
      "Git & GitHub를 활용한 협업 경험",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git", "협업", " 10기 차장"],
  },
  {
    period: "2025.05.14 — 2025.06.20",
    org: "교내 대회",
    role: "창업 아이템 경진대회",
    status: "done",
    desc: "노트북 진동 알림 패드를 기획하고 창업 계획서를 작성하여 교내 대회에서 은상 수상.",
    highlights: [
      "창업 개요, 아이템 소개, 창업화 추진 계획 등 보고서 작성",
      "노트북 진동 알림 패드 아이디어 기획 및 구체화",
    ],
    tags: ["기획", "🥈 은상"],
  },
  {
    period: "2025.11.22",
    org: "교외 대회",
    role: "SW동생 데모데이",
    status: "done",
    desc: "재난 발생 시 개인 맞춤형 대피 경로를 안내하는 시스템을 기획하고 자료를 조사하여 동상 수상.",
    highlights: [
      "기존 재난 문자·방송의 위치 기반 맞춤 안내 부족 문제를 분석",
      "개인 맞춤형 실시간 대피 경로 안내 시스템 기획",
      "SDGs 목표 3(건강과 웰빙), 목표 11(지속가능한 도시)과 연계",
    ],
    tags: ["기획", "협업", "🥉 동상"],
  },
  {
    period: "2025.07.14 — 2025.08.29",
    org: "교내 대회",
    role: "소프트웨어 챌린지",
    status: "done",
    desc: "야생동물 보호 학습 앱 'Ecomong' 개발.",
    highlights: [
      "위치 기반 야생동물 서식지 정보 제공 및 생태 지도 시각화",
      "친환경 활동(걷기·쓰레기 줍기 등) 실천 시 동물 캐릭터 수집 게임화 시스템 설계",
      "AI 이미지 인식 기반 동물 종 자동 판별 및 사용자 참여형 생태 데이터 구축 기획",
    ],
    tags: ["기획", "협업"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`section fade-in`}>
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-sub">활동 경험</span>
      </div>

      {experiences.map((exp, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.meta}>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.place}>{exp.place}</div>
          </div>
          <div className={styles.content}>
            <div className={styles.org}>{exp.org}</div>
            <div className={styles.role}>
              {exp.role}
              <span
                className={`status-badge ${exp.status === "active" ? "status-active" : "status-done"}`}
              >
                {exp.status === "active" ? "진행중" : "완료"}
              </span>
            </div>
            <p className={styles.desc}>{exp.desc}</p>
            <ul className={styles.highlights}>
              {exp.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {exp.tags.map((t) => (
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
