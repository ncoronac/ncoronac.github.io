import { Link } from "react-router-dom";
import "./Home.css";

export default function Portfolio() {
    return (
        <div className="project-container">
            <h1>PROJECTS</h1>

            <a
                href="https://main.d3ucv0i7gl4bjd.amplifyapp.com/"
                className="coblop-description"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>CoBloP (Collaborative Block-Based Programming)</h2>
                <p>The CoBloP framework was created for ESL and migrant learners. The programming community promotes invlusivity yet Latinx students remain significantly underrepresented.</p>
            </a>
        </div>
    )
}