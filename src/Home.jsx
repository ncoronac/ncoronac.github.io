import { Link } from "react-router-dom";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className="home-container">
            <div className="purpose-stmt">
                <h1>Hi 👋, I'm Noemi and I like<br />
                    <span className="special-text">
                        <TypeAnimation 
                            className="my-typewriter"
                            sequence={[
                            'creating', 1500,
                            'developing', 1500,
                            'learning', 1500
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span>
                </h1>
            </div>

            <div className="socials">
                <a
                    href="https://github.com/ncoronac"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>

                <a
                    href="https://www.linkedin.com/in/ncoronac?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                </a>

                <a
                    href="/NCORONA_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFile} className="social-icon" />
                </a>
            </div>
        </div>
    );
}