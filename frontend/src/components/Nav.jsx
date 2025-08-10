import '../styles/Nav.scss'
import { Link,  animateScroll as scroll } from "react-scroll";
const Nav = (params) => {
    return (
        <nav>
            <div className="in">

                <h1>
                    <Link to="intro" smooth={true} duration={500}>
                        title
                    </Link>
                </h1>
                <div className="nav-wrap">

                    <Link to="intro" smooth={true} duration={500}>Intro</Link>
                    <Link to="aboutme" smooth={true} duration={500}>aboutme</Link>
                    <Link to="portfolio" smooth={true} duration={500}>portfolio</Link>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
