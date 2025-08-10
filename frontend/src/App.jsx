import "./App.scss";
import { Element } from "react-scroll";
import { AboutMeProvider } from "./context/AboutMeContext";
import Intro from './components/Intro'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Aboutme from './components/Aboutme'
import Nav from "./components/Nav";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {

  return (
    <div>
      <Nav />
      <Element name="intro" className="section">
        <Intro />
      </Element>
      {/* 섹션 3 */}
      <AboutMeProvider>
        <Element name="aboutme" className="section">
          <Aboutme />
        </Element>
      </AboutMeProvider>


      {/* 섹션 3 */}
      <PortfolioProvider>

        <Element name="portfolio" className="section">
          <Portfolio />
        </Element>
      </PortfolioProvider>
      {/* 섹션 2 */}
      <Element name="contact" className="section">
        <Contact />
      </Element>

    </div>
  )
}

export default App
