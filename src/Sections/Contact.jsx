import { useState } from "react";

import {
    FaUser,
    FaEnvelope,
    FaRegMessage,
    FaRegEnvelope,
} from "react-icons/fa6";

import GithubSection from "../Components/Github-cons.jsx";
import MeshBackground from "../Components/Blurrs/MeshBackground.jsx"

import "../Styles/Contact.css";

const initialFormData = {
    name: "",
    email: "",
    message: "",
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState({
        message: "",
        type: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({ message: "", type: "" });
        setIsSubmitting(true);

        try {
            const endpoint = import.meta.env.VITE_BACKEND_CONTACT_FORM;

            if (!endpoint) {
                throw new Error("Contact form endpoint is not configured.");
            }

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message.");
            }

            setStatus({
                message: "Message sent successfully!",
                type: "success",
            });

            setFormData(initialFormData);
        } catch {
            setStatus({
                message: "Could not send your message. Please try again.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="contact-outer-container"
        >
            <MeshBackground />
            <div className="contact-main">
                {/* Section heading */}

                <header className="contact-header">
                    <p className="contact-eyebrow">
                        LET'S CONNECT
                    </p>

                    <h2 className="contact-title">
                        Have a project in <span>mind?</span>
                    </h2>

                    <p className="contact-description">
                        Whether you have an idea, a question, or an
                        opportunity, I'd love to hear from you.
                    </p>
                </header>

                <div className="contact-layout">
                    {/* GitHub contributions */}

                    <section className="git-contributions">
                        <div className="contact-panel-heading">
                            <span className="contact-panel-icon">
                                <FaRegMessage aria-hidden="true" />
                            </span>

                            <div>
                                <p className="contact-panel-eyebrow">
                                    OPEN SOURCE
                                </p>

                                <h3>GitHub Activity</h3>
                            </div>
                        </div>

                        <p className="contact-panel-description">
                            A look at my coding activity and
                            contributions throughout the year.
                        </p>

                        <GithubSection />
                    </section>

                    {/* Contact form */}

                    <div className="contact-content">
                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="contact-form__header">
                                <p className="contact-panel-eyebrow">
                                    GET IN TOUCH
                                </p>

                                <h3>Send a Message</h3>

                                <p>
                                    Fill out the form below, and I'll
                                    get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="input-name"
                                >
                                    <FaUser aria-hidden="true" />
                                    YOUR NAME
                                </label>

                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    id="input-name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="contact-input"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="input-email"
                                >
                                    <FaEnvelope aria-hidden="true" />
                                    YOUR EMAIL
                                </label>

                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    id="input-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="contact-input"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="textarea-id"
                                >
                                    <FaRegMessage aria-hidden="true" />
                                    YOUR MESSAGE
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    id="textarea-id"
                                    placeholder="Tell me about your project..."
                                    className="contact-textarea"
                                    rows={5}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="contact-button"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>

                                <FaRegEnvelope aria-hidden="true" />
                            </button>

                            <p
                                className={`contact-status ${status.type
                                    ? `contact-status--${status.type}`
                                    : ""
                                    }`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;