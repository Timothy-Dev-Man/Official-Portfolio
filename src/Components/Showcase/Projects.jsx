import { useRef } from "react";
import { ProjectCard } from "../Cards/Project-card.jsx";
import { useIsVisible } from "../../helper.js";

function Projects() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    return (
        <section
            id="projects"
            className={`projects-outer-container ${isVisible ? "visible" : ""}`}
            ref={ref}
        >
            <section
                id="projects-content"
                className="projects-content"
            >
                <ProjectCard
                    url="https://github.com/Timothy-Dev-Man/Sl_Quest_Tracker"
                    string="left"
                    name="QuestFrontier"
                    description="QuestFrontier is a mobile application for managing goals, tracking progress, and enforcing penalties to help users stay accountable and motivated."
                />

                <ProjectCard
                    url="https://github.com/Timothy-Dev-Man/FeelClear-frontend"
                    string="right"
                    name="FeelClear"
                    description="FeelClear is a mobile application that helps users connect with a partner, manage their profile, and access guided conversational support for everyday emotional or relationship-related needs." />
            </section>
        </section>
    );
}

export default Projects;