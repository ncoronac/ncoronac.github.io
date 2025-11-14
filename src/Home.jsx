import { Link } from "react-router-dom";
import "./Home.css";
import tempImage from "./tempImage.jpeg";

export default function Home() {
    return (
        <div className="home-container">
            <div className="personal-container">
                <img className="temp-image" src={tempImage} alt="temporary image"/>
                <h1 className="name-header">Noemi Corona Calvario</h1>
                <p>Computer Science<br />
                    Third-Year<br />
                    @Cal Poly SLO<br />
                    <span className="special-text">(Open to Work)</span>
                </p>
            </div>

            <div className="other-pages">
                <div className="purpose-stmt"><h1>Hi 👋, I'm Noemi and I like <span className="special-text">creating</span>!</h1></div>

                <div className="row">
                    <Link to="/portfolio" className="projects-description">
                        <h2>Projects</h2>
                    </Link>

                    <Link to="/resume" className="resume-description">
                        <h2>Resume</h2>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}