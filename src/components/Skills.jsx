// Skills.jsx
import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Flutter", "React", "TypeScript"],
  },
  {
    label: "Backend",
    skills: ["Python", "Java", "C"],
  },
  {
    label: "Tools & Collaboration",
    skills: ["Git", "GitHub", "VS Code", "Notion", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={`section fade-in`}>
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <span className="section-sub">기술 스택</span>
      </div>

      <div className={styles.list}>
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.row}>
            <div className={styles.label}>{group.label}</div>
            <div className={styles.chips}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}