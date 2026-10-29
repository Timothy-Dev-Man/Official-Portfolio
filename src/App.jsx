import "./App.css"
import "./Styles/Hero.css"
import "./Styles/Skills.css"
import "./Styles/Projects.css"
import "./Styles/Git.css"
import "./Styles/Side-links.css"
import "./Styles/AiChat.css"
import "./Styles/Components/MainBlurr.css"
import "./Styles/Components/Buttons.css"
import { useState } from "react";
import Hero from './Sections/Hero.jsx'
import AboutMe from './Sections/About-Me.jsx'
import Contact from './Sections/Contact.jsx'
import PortfolioShowcase from './Sections/PortfolioShowcase.jsx'
import SideLinks from './Components/Side-links.jsx'
import Footer from "./Sections/Footer.jsx";
import MainBlurr from './Components/Blurrs/MainBlurr.jsx'

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <MainBlurr />
      <SideLinks activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      <AboutMe />
      <PortfolioShowcase activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contact />
      <Footer />
    </>
  )
}

export default App