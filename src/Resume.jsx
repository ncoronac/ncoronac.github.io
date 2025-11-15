import "./Resume.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGitAlt, faPython, faJava, faHtml5, faFigma } from "@fortawesome/free-brands-svg-icons";

import viteIcon from "/vite.svg";

export default function Resume () {
    return (
        <div className="resume-container">
            <h1>Experience</h1>

            <div className="skills-carousel">
                <div className="carousel-track">
                    <div className="carousel-group">
                        <FontAwesomeIcon icon={faReact} style={{color: "#61dafb"}} size="4x" />
                        <img src={viteIcon} alt="icon" className="icon" style={{width: "55px"}} />
                        <FontAwesomeIcon icon={faGitAlt} style={{color: "#F1502F"}} size="4x" />
                        <FontAwesomeIcon icon={faPython} style={{color: "#306998"}} size="4x" />
                        <FontAwesomeIcon icon={faJava} style={{color: "#5382a1"}} size="4x" />
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#f06529"}} size="4x" />
                        <FontAwesomeIcon icon={faFigma} style={{color: "#ae4dff"}} size="4x" />
                    </div>

                    <div className="carousel-group">
                        <FontAwesomeIcon icon={faReact} style={{color: "#61dafb"}} size="4x" />
                        <img src={viteIcon} alt="icon" className="icon" style={{width: "55px"}} />
                        <FontAwesomeIcon icon={faGitAlt} style={{color: "#F1502F"}} size="4x" />
                        <FontAwesomeIcon icon={faPython} style={{color: "#306998"}} size="4x" />
                        <FontAwesomeIcon icon={faJava} style={{color: "#5382a1"}} size="4x" />
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#f06529"}} size="4x" />
                        <FontAwesomeIcon icon={faFigma} style={{color: "#ae4dff"}} size="4x" />
                    </div>
                </div>
            </div>


            <hr style={{border: "none",
                height: "1px",
                marginTop: "3rem",
                background: "linear-gradient(to right, transparent, #2f2f2fff, transparent",
            }}/>

            <div className="resume-section">
                <div className="section">
                    <h2>California Polytechnic State University, San Luis Obispo</h2>
                    <h3 className="special-text">Graduation: Spring 2027</h3>
                    <p>Bachelor of Science in Computer Science</p>
                    <ul>
                        <li>Related Coursework: Data Structures, Proj-Based Object-Oriented Programming</li>
                        <li>Current Coursework: Programming Languages, Intro to Software Engineering</li>
                    </ul>
                </div>


                <div className="section">
                    <h2>Frontend Developer</h2>
                    <h3 className="special-text">October 2025 - Current</h3>
                        <p>React, Express, Vite, Javascript, CSS, Git, GitHub, MongoDB</p>
                    <ul>
                        <li>Collaborated with four teammates to design and implement a digital diary and mood tracking app using React and Express.</li>
                        <li>Created a Figma prototype for the emotion tracker interface, including personalized prompts and mood visualization, ensuring a user-friendly and engaging experience.</li>
                    </ul>
                </div>


                <div className="section">
                    <h2>Undergraduate Student Researcher</h2>
                    <h3 className="special-text">June 2025 - Current</h3>
                        <p>React, Vite, Javascript, CSS, Git</p>
                    <ul>
                        <li>Conducted research studying how early programming experience influences underrespresented group's pursuit in computer science.</li>
                        <li>Currently collaborating on the development of CoBloP, adding collaborative features, multilingual support, and complex coding games.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}