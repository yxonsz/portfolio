import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Frontend — 배우고 있는 중",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Flutter" },
      { name: "Figma" },
    ],
  },
  {
    label: "Backend — 학습 중",
    skills: [{ name: "Python" }, { name: "Java" }, { name: "C" }],
  },
  {
    label: "Tools & Collaboration",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Notion" },
      { name: "Figma" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={`section fade-in`}>
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <span className="section-sub">기술 스택</span>
      </div>

      {skillGroups.map((group) => (
        <div key={group.label} className={styles.group}>
          <div className={styles.groupTitle}>{group.label}</div>
          <div className={styles.row}>
            {group.skills.map((s) => (
              <div key={s.name} className={styles.pill}>
                <span className={styles.icon}>{s.icon}</span>
                {s.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
