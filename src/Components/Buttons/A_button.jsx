export function A_button({ text, url }) {
    return (
        <a href={url} target='_blank' rel="noopener noreferrer">
            <button className="buttons resume-button">{text}</button>
        </a>
    )
}
