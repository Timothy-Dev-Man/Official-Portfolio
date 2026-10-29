import { useEffect, useState } from "react";

import {
    FiShield,
    FiGlobe,
    FiLock,
    FiArrowUpRight,
    FiClock,
    FiAward,
    FiX,
    FiZoomIn,
} from "react-icons/fi";

import "../../Styles/Showcase/Certificates.css";


/* Your existing certificates */

const earnedCertificates = [
    {
        title: "Certificate 1",
        image: "/certificates/certificate_1.png",
    },
    {
        title: "Certificate 2",
        image: "/certificates/certificate_3.png",
    },
    {
        title: "Certificate 3",
        image: "/certificates/certificate_2.png",
    },
];


/* Certifications currently in progress */

const certifications = [
    {
        title: "Security+",
        provider: "CompTIA",
        description:
            "Studying cybersecurity fundamentals, threats, risk management, and security practices.",
        icon: FiShield,
        number: "01",
    },
    {
        title: "Network+",
        provider: "CompTIA",
        description:
            "Building knowledge of networking concepts, infrastructure, connectivity, and troubleshooting.",
        icon: FiGlobe,
        number: "02",
    },
    {
        title: "SecurityX",
        provider: "CompTIA",
        description:
            "Working toward advanced cybersecurity knowledge in security architecture and engineering.",
        icon: FiLock,
        number: "03",
    },
];


function Certificates() {
    const [selectedCertificate, setSelectedCertificate] =
        useState(null);

    // Close the image viewer with Escape.
    useEffect(() => {
        if (!selectedCertificate) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setSelectedCertificate(null);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedCertificate]);


    return (
        <section className="certificates">

            {/* Earned certificates */}

            <header className="certificates__header">
                <p className="certificates__eyebrow">
                    ACHIEVEMENTS
                </p>

                <h3 className="certificates__title">
                    My <span>Certificates</span>
                </h3>

                <p className="certificates__description">
                    A collection of my completed certificates
                    and learning achievements.
                    Click any certificate to view it in detail.
                </p>
            </header>


            {/* Clickable certificate gallery */}

            <div className="certificates-gallery">
                {earnedCertificates.map((certificate, index) => (
                    <button
                        className="certificates-gallery__item"
                        key={certificate.image}
                        type="button"
                        onClick={() =>
                            setSelectedCertificate(certificate)
                        }
                        aria-label={`View ${certificate.title}`}
                    >
                        <img
                            className="certificates-gallery__image"
                            src={certificate.image}
                            alt={certificate.title}
                            loading="lazy"
                        />

                        <span className="certificates-gallery__overlay">
                            <FiZoomIn aria-hidden="true" />
                            <span>View Certificate</span>
                        </span>

                        <span className="certificates-gallery__number">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </button>
                ))}
            </div>


            {/* Full-size certificate viewer */}

            {selectedCertificate && (
                <div
                    className="certificate-viewer"
                    role="presentation"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="certificate-viewer__content"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedCertificate.title}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="certificate-viewer__header">
                            <h4>
                                {selectedCertificate.title}
                            </h4>

                            <button
                                className="certificate-viewer__close"
                                type="button"
                                aria-label="Close certificate viewer"
                                onClick={() =>
                                    setSelectedCertificate(null)
                                }
                            >
                                <FiX aria-hidden="true" />
                            </button>
                        </div>

                        <img
                            className="certificate-viewer__image"
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                        />
                    </div>
                </div>
            )}


            {/* Certifications in progress */}

            <div className="certificates__in-progress">
                <header className="certificates__header">
                    <p className="certificates__eyebrow">
                        CONTINUOUS LEARNING
                    </p>

                    <h3 className="certificates__title">
                        Currently <span>Working On</span>
                    </h3>

                    <p className="certificates__description">
                        I'm continuing to develop my cybersecurity
                        and networking knowledge through these
                        professional certifications.
                    </p>
                </header>

                <div className="certificates__grid">
                    {certifications.map(
                        ({
                            title,
                            provider,
                            description,
                            icon: Icon,
                            number,
                        }) => (
                            <article
                                className="certificate-card"
                                key={title}
                            >
                                <div
                                    className="certificate-card__gradient"
                                    aria-hidden="true"
                                />

                                <div className="certificate-card__top">
                                    <div className="certificate-card__icon">
                                        <Icon aria-hidden="true" />
                                    </div>

                                    <span className="certificate-card__number">
                                        {number}
                                    </span>
                                </div>

                                <div className="certificate-card__content">
                                    <p className="certificate-card__provider">
                                        {provider}
                                    </p>

                                    <h4 className="certificate-card__title">
                                        {title}
                                    </h4>

                                    <p className="certificate-card__description">
                                        {description}
                                    </p>
                                </div>

                                <div className="certificate-card__footer">
                                    <span className="certificate-card__status">
                                        <FiClock aria-hidden="true" />
                                        In Progress
                                    </span>

                                    <FiArrowUpRight
                                        className="certificate-card__arrow"
                                        aria-hidden="true"
                                    />
                                </div>
                            </article>
                        )
                    )}
                </div>
            </div>

        </section>
    );
}

export default Certificates;