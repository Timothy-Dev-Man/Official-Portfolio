import {
    SiJavascript,
    SiHtml5,
    SiJson,
    SiPython,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiLinux,
    SiMistralai,
    SiNpm,
    SiVite,
    SiMysql,
    SiCloudflare,
} from "react-icons/si";

import {
    FaCss3Alt,
    FaWindows,
    FaFigma,
} from "react-icons/fa";

import { VscCode } from "react-icons/vsc";

import "../../Styles/Skills.css";


const skills = [
    { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
    { Icon: FaCss3Alt, label: "CSS3", color: "#1572B6" },
    { Icon: SiJson, label: "JSON", color: "#B08D57" },
    { Icon: SiPython, label: "Python", color: "#3776AB" },
    { Icon: SiReact, label: "React + Native", color: "#61DAFB" },
    { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
    { Icon: SiExpress, label: "Express.js", color: "#F5F2ED" },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
    { Icon: SiGit, label: "Git", color: "#F05032" },
    { Icon: SiGithub, label: "GitHub", color: "#F5F2ED" },
    { Icon: SiLinux, label: "Linux", color: "#FCC624" },
    { Icon: FaWindows, label: "Windows", color: "#0078D4" },
    { Icon: FaFigma, label: "Figma", color: "#F24E1E" },
    { Icon: SiMistralai, label: "Mistral AI", color: "#FF7000" },
    { Icon: SiNpm, label: "NPM", color: "#CB3837" },
    { Icon: SiVite, label: "Vite", color: "#646CFF" },
    { Icon: VscCode, label: "VS Code", color: "#007ACC" },
    { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
    { Icon: SiCloudflare, label: "Cloudflare", color: "#F38020" },
];


function Skills() {
    return (
        <div className="skills-grid">
            {skills.map(({ Icon, label, color }, index) => (
                <article
                    className="skill-card"
                    key={label}
                    style={{ "--skill-index": index }}
                >
                    <div className="skill-card__icon-wrapper">
                        <Icon
                            className="skill-card__icon"
                            color={color}
                            aria-hidden="true"
                        />
                    </div>

                    <h3 className="skill-card__label">
                        {label}
                    </h3>

                    <span
                        className="skill-card__indicator"
                        aria-hidden="true"
                    />
                </article>
            ))}
        </div>
    );
}

export default Skills;