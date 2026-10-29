import "../Styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <span><p>© {new Date().getFullYear()} Timothy Williams</p></span>
            <span>Built with React & Vite</span>
        </footer>
    )
}

export default Footer;