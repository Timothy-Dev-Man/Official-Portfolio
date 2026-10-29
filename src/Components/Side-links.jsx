import { FaGithub, FaLinkedin, FaArrowCircleDown } from "react-icons/fa";
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { FaChevronRight } from "react-icons/fa";
import aiChatIcon from "../assets/chat-head-icon.png";

export default function SideLinks({ setActiveTab }) {
    const [toggle, setToggle] = useState(false);

    const closeMenu = () => setToggle(false);

    const scrollToSection = (id) => {
        closeMenu();

        if (id === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            return;
        }

        const portfolioTabs = [
            "projects",
            "skills",
            "certificates",
        ];

        const isPortfolioTab = portfolioTabs.includes(id);

        if (isPortfolioTab) {
            setActiveTab(id);
        }

        const element = document.getElementById(
            isPortfolioTab ? "portfolio" : id
        );

        if (!element) return;

        const offsetPosition =
            element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    return (
        <header className="side-links-container">
            <a className="side-links-title" href="#home" onClick={() => {
                scrollToSection("home")
                closeMenu
            }}>
                <h3>Timothy Williams</h3>
                <span>Full-Stack Engineer</span>
            </a>

            <div className={`toggle-menu`}>
                <Hamburger
                    color="#fff"
                    toggled={toggle}
                    toggle={setToggle}
                    label="Toggle navigation menu"
                />
            </div>

            <div className={`header-panel ${toggle ? "is-open" : ""}`}>
                <nav className="toggle-menu-nav" aria-label="Main navigation">
                    <button type="button" onClick={() => scrollToSection("home")}>Home</button>
                    <button type="button" onClick={() => scrollToSection("skills")}>Skills</button>
                    <button type="button" onClick={() => scrollToSection("projects")}>Projects</button>
                    <button type="button" onClick={() => scrollToSection("contact")}>Contact</button>
                </nav>

                <div className="side-icons-wrapper">
                    <a href="https://github.com/shwifty-man" target="_blank" rel="noreferrer" className="side-icon" title="GitHub">
                        <FaGithub size={20} />
                        <span>GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/timothy--c--williams/" target="_blank" rel="noreferrer" className="side-icon" title="LinkedIn">
                        <FaLinkedin size={20} color="#0A66C2" />
                        <span>LinkedIn</span>
                    </a>

                    <a className="side-icon download-icon" href="/Timothy_Williams_Full-Stack_Engineer_Resume.pdf" download title="Download Resume">
                        <FaArrowCircleDown size={20} />
                        <span>Resume</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
