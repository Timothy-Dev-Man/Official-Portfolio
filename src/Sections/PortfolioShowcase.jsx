import { lazy, Suspense } from "react";

import {
    FiCode,
    FiAward,
    FiLayers,
} from "react-icons/fi";

const Projects = lazy(() =>
    import("../Components/Showcase/Projects.jsx")
);

const Skills = lazy(() =>
    import("../Components/Showcase/Skills.jsx")
);

const Certificates = lazy(() =>
    import("../Components/Showcase/Certificates.jsx")
);

import "../Styles/Main/PortfolioShowcase.css";


const tabs = [
    {
        id: "projects",
        label: "Projects",
        Icon: FiCode,
    },
    {
        id: "certificates",
        label: "Certificates",
        Icon: FiAward,
    },
    {
        id: "skills",
        label: "Skills",
        Icon: FiLayers,
    },
];


function PortfolioShowcase({ activeTab, setActiveTab }) {

    const components = {
        projects: Projects,
        certificates: Certificates,
        skills: Skills,
    };

    const ActiveComponent = components[activeTab] || Projects;

    return (
        <section
            id="portfolio"
            className="portfolio-showcase"
        >
            <div className="portfolio-showcase__container">
                <header className="portfolio-showcase__header">
                    <h2 className="portfolio-showcase__title title-accent">
                        Portfolio Showcase
                    </h2>

                    <p className="portfolio-showcase__description">
                        Explore my projects, certifications, and
                        technical skills as a full-stack developer.
                    </p>
                </header>

                <div
                    className="portfolio-tabs"
                    role="tablist"
                    aria-label="Portfolio categories"
                >
                    {tabs.map(({ id, label, Icon }) => (
                        <button
                            key={id}
                            id={`portfolio-tab-${id}`}
                            className={`portfolio-tabs__button ${activeTab === id
                                ? "portfolio-tabs__button--active"
                                : ""
                                }`}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === id}
                            aria-controls={`portfolio-panel-${id}`}
                            onClick={() => setActiveTab(id)}
                        >
                            <Icon
                                className="portfolio-tabs__icon"
                                aria-hidden="true"
                            />

                            <span>{label}</span>
                        </button>
                    ))}
                </div>

                <div
                    id={`portfolio-panel-${activeTab}`}
                    className="portfolio-tab-panel"
                    role="tabpanel"
                    aria-labelledby={`portfolio-tab-${activeTab}`}
                >
                    <Suspense fallback={<p>Loading section...</p>}>
                        <ActiveComponent />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}

export default PortfolioShowcase;