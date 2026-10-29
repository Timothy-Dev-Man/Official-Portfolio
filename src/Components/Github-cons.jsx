import { Component } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";


class GitHubErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    handleRetry = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className="github-calendar-error"
                    role="alert"
                >
                    <FiAlertCircle
                        className="github-calendar-error__icon"
                        aria-hidden="true"
                    />

                    <h4>Unable to load GitHub activity</h4>

                    <p>
                        GitHub contributions are temporarily unavailable.
                        Please try again.
                    </p>

                    <button
                        className="github-calendar-error__button"
                        type="button"
                        onClick={this.handleRetry}
                    >
                        <FiRefreshCw aria-hidden="true" />
                        Try Again
                    </button>

                    <a
                        className="github-calendar-error__link"
                        href="https://github.com/shwifty-man"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub Profile
                    </a>
                </div>
            );
        }

        return this.props.children;
    }
}


function GithubSection() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="github-section">
            <div className="github-section__scroll">
                <GitHubErrorBoundary key={currentYear}>
                    <GitHubCalendar
                        username="shwifty-man"
                        year={currentYear}
                        throwOnError
                        theme={{
                            dark: [
                                "#171719",
                                "#482020",
                                "#7B2929",
                                "#B13C3C",
                                "#D74A49",
                            ],
                        }}
                        blockSize={10}
                        blockMargin={4}
                        fontSize={11}
                        showWeekdayLabels
                        showMonthLabels
                        showColorLegend
                        showTotalCount
                        ariaLabel={`GitHub activity for ${currentYear}`}
                    />
                </GitHubErrorBoundary>
            </div>
        </div>
    );
}

export default GithubSection;