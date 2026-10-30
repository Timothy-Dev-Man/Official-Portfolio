import left from "../../assets/left.png";
import right from "../../assets/right.png";

import { handleProjectUrl } from "../../helper.js";

import {
    SiJavascript,
    SiExpo,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiMistralai,
    SiNpm,
    SiAndroid,
} from "react-icons/si";

import {
    FiArrowUpRight,
    FiExternalLink,
} from "react-icons/fi";


const projectImages = {
    left,
    right,
};


const leftTechnologies = [
    { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { Icon: SiReact, label: "React Native", color: "#61DAFB" },
    { Icon: SiExpo, label: "Expo", color: "#FFFFFF" },
    { Icon: SiAndroid, label: "Android", color: "#3DDC84" },
    { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
    { Icon: SiExpress, label: "Express", color: "#FFFFFF" },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
    { Icon: SiGit, label: "Git", color: "#F05032" },
    { Icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
    { Icon: SiNpm, label: "NPM", color: "#CB3837" },
];


const rightTechnologies = [
    { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { Icon: SiReact, label: "React", color: "#61DAFB" },
    { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
    { Icon: SiExpress, label: "Express", color: "#FFFFFF" },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
    { Icon: SiMistralai, label: "Mistral AI", color: "#FF7000" },
    { Icon: SiGit, label: "Git", color: "#F05032" },
    { Icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
];


function ProjectCard({
    url,
    string,
    name,
    description,
    techList,
}) {
    const image = projectImages[string] ?? left;

    const technologies =
        techList?.length > 0
            ? techList
            : string === "left"
                ? leftTechnologies
                : rightTechnologies;

    return (
        <article
            className={`project-whole-wrapper ${string}-project-wrapper`}
        >
            {/* Project preview */}

            <button
                type="button"
                className={`project-card project-card--${string}`}
                onClick={handleProjectUrl(url)}
                aria-label={`Open ${name} project`}
            >
                <div className="project-card__top">
                    <span className="project-card__eyebrow">
                        FEATURED PROJECT
                    </span>

                    <FiArrowUpRight
                        className="project-card__top-icon"
                        aria-hidden="true"
                    />
                </div>

                <h2 className="project-card__title">
                    {name}
                </h2>

                <div className="project-card__image-wrapper">
                    <img
                        className="project-card__image"
                        src={image}
                        alt={`${name} project preview`}
                        loading="lazy"
                        decoding="async"

                    />

                    <span className="project-card__image-overlay">
                        <FiExternalLink aria-hidden="true" />
                        View Project
                    </span>
                </div>

                <div className="project-card__footer">
                    <span>Explore project</span>

                    <span className="project-card__footer-indicator">
                        <span />
                        Live project
                    </span>
                </div>
            </button>


            {/* Project description */}

            <div className="project-description">
                <div className="project-description__header">
                    <span className="project-description__eyebrow">
                        PROJECT OVERVIEW
                    </span>

                    <h3>About this project</h3>
                </div>

                <p className="project-description__text">
                    {description}
                </p>


                {/* Technologies */}

                <div className="skill-used-box">
                    <h4>Technologies used</h4>

                    <div className="skill-used-list">
                        {technologies.map(
                            ({ Icon, label, color }) => (
                                <div
                                    className="skill-used-wrapper"
                                    key={label}
                                    title={label}
                                >
                                    <Icon
                                        className="skill-used"
                                        size={17}
                                        color={color}
                                        aria-hidden="true"
                                    />

                                    <span className="skill-used-label">
                                        {label}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <p className="project-description__note">
                    Additional technologies and experience are
                    listed on my resume.
                </p>
            </div>
        </article>
    );
}

export { ProjectCard };