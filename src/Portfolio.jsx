import { Link } from "react-router-dom";
import "./Home.css";

export default function Portfolio() {
    return (
        <div className="project-container">
            <h1>Projects and Achievements</h1>

            {/* COBLOP */}
            <a
                href="https://main.d3ucv0i7gl4bjd.amplifyapp.com/"
                className="coblop-description"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>CoBloP (Collaborative Block-Based Programming)</h2>
                <p>The CoBloP framework was created for ESL and migrant learners. The programming community promotes invlusivity yet Latinx students remain significantly underrepresented.</p>
            </a>
            
            {/* GROUP PROJECT: DIARY */}
            <a
                href="https://github.com/ncoronac/4TheRecord"
                className="fourtherecord-description"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>4TheRecord Web-Diary</h2>
                <p>The 4TheRecord app is a digital diary and mood tracker that helps users record their thoughts and track their emotions. Unlike traditional digital diaries on the market,
                    4TheRecord offerspersonalized writing prompts based on recorded emotions, creating a positive, judgement-free space for reflection.</p>
            </a>
        </div>
    )
}