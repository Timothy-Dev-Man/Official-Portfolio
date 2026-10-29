import { A_button } from "../Components/Buttons/A_button.jsx";
import { Button } from "../Components/Buttons/Button.jsx";
import { FaArrowDownLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="content">
      <h1>
        Full Stack{" "}
        <span className="hero-title-accent">
          Engineer
        </span>
      </h1>

      <p className="hero-description">
        Passionate about building responsive, efficient,
        and user-friendly web applications.
      </p>

      <div className="button-container">
        <Button text="View my work" onClick={() =>
          document.getElementById("portfolio")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        } />

        <A_button
          text="Resume"
          url="/Timothy_Williams_Full-Stack_Engineer_Resume.pdf"
        />
      </div>

      <FaArrowDownLong
        id="arrow-down-icon"
        aria-hidden="true"
        color='#D74A49'
      />
    </div>
  );
}

export default Hero;