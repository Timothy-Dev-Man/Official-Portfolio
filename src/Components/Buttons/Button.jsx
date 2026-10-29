export function Button({ text, onClick }) {
    return (
        <button className="buttons work-button" onClick={() => onClick()} >{text}</button>
    )
}
