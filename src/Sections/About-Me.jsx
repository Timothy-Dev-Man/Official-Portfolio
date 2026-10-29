import {
    FiLayers,
    FiAward,
    FiFolder,
    FiClock,
} from "react-icons/fi";
import "../Styles/About/AboutMe.css"
import MeshBackground from "../Components/Blurrs/MeshBackground.jsx"

const skills = [
    { label: "Full Stack", value: "Developer", icon: FiLayers },
    { label: "Certificates", value: "3 Earned", icon: FiAward },
    { label: "Total Projects", value: "3 Projects", icon: FiFolder },
    { label: "Years of Experience", value: "4 Years", icon: FiClock },
];

function AboutMe() {
    return (
        <section className="about-section" id="about" aria-labelledby="about-title">
            <MeshBackground />
            <div className="about-container">
                <div className="about-intro">
                    <p className="about-eyebrow">A LITTLE ABOUT ME</p>

                    <h2 className="about-title" id="about-title">
                        Building useful things with <span>code.</span>
                    </h2>

                    <p className="about-description">
                        I’m a full-stack developer who enjoys turning ideas into practical,
                        user-friendly applications. I work across the frontend and backend,
                        building interfaces, APIs, and database-backed features that work
                        together as one product.
                    </p>

                    <p className="about-description">
                        My experience includes React, JavaScript, Node.js, Express, and
                        PostgreSQL. I’m also interested in bringing AI into real products,
                        including my work integrating Mistral AI into FeelClear.
                    </p>

                    <a className="about-contact-link" href="#contact">
                        Let’s build something <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="about-skills" aria-label="Technologies I work with">
                    {skills.map(({ label, value, icon: Icon }) => (
                        <article className="about-skill-card" key={label}>
                            <div className="about-skill-icon" aria-hidden="true">
                                <Icon />
                            </div>

                            <div className="about-skill-content">
                                <h3 className="about-skill-label">{label}</h3>
                                <p className="about-skill-value">{value}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
