import "./Home.css";
import { TypeAnimation } from "react-type-animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1>Projects and Achievements</h1>

            <div className="project-container">

                {/* COBLOP */}
                <div className="project">
                    <a
                        href="https://salmon-beach-0dcbc351e.3.azurestaticapps.net"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <iframe
                            src="https://salmon-beach-0dcbc351e.3.azurestaticapps.net"
                            title="4therecord-iframe"
                            className="web-iframe"
                        >
                        </iframe>
                    </a>
                    <div className="descriptions" style={{ "--bg": "rgba(153, 133, 182, 0.1)" }}>
                        <h2>4TheRecord{" "}
                            <a
                                href="https://github.com/ncoronac/4TheRecord"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithubSquare} size="lg" color="black"/>
                            </a>
                        </h2>
                        <p>For anyone who wants to take a moment each day to check in with themselves. The 4TheRecord app is a digital diary and mood tracker that helps users record their thoughts and emotions. </p>
                    </div>
                </div>

                {/* GROUP PROJECT: 4THERECORD DIARY */}
                <div className="project">
                    <a
                        href="https://main.d3ucv0i7gl4bjd.amplifyapp.com/"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <iframe
                            src="https://main.d3ucv0i7gl4bjd.amplifyapp.com/"
                            title="coblop-iframe"
                            className="web-iframe"
                        >
                        </iframe>
                    </a>
                    <div className="descriptions" style={{ "--bg": "rgba(102, 126, 234, 0.1)" }}>
                        <h2>CoBloP
                            <a
                                href="https://sigcse2026.sigcse.org/details/sigcse-ts-2026-posters/87/Building-Pathways-to-CS-Multilingual-Collaborative-Programming-for-Migrant-and-ESL-M"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFile} size="s" color="black"/>
                            </a>
                        </h2>
                        <p>The CoBloP framework was created for ESL and migrant learners because the programming community promotes invlusivity, yet Latinx students remain significantly underrepresented.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}