import "./Resume.css";

export default function Resume () {
    return (
        <div className="resume-container">
            <h1 className="resume-headers">About me</h1>
            {/* things i can add for a description Student, creative learner, aspiring front-end developer */}
            <div className="section">
                <div className="section-header">
                    <h2>California Polytechnic State University, San Luis Obispo</h2>
                    <h2 className="special-text">Graduation: Spring 2027</h2>
                </div>
                <p>Bachelor of Science in Computer Science</p>
                <ul>
                    <li>Related Coursework: Data Structures, Proj-Based Object-Oriented Programming</li>
                    <li>Current Coursework: Programming Languages, Intro to Software Engineering</li>
                </ul>


                <div className="section-header">
                    <h2>Fronend Developer</h2>
                    <h2 className="special-text">Current</h2>
                </div>
                <p>Group Collaboration</p>
                <ul>
                    <li>Collaborating with a small team to create a full-stack diary and emotion tracker.</li>
                    <li>Developing web application to take user accounts.</li>
                </ul>


                <div className="section-header">
                    <h2>Undergraduate Student Researcher</h2>
                    <h2 className="special-text">Current</h2>
                </div>
                <p>React, Vite, Javascript, CSS, Git</p>
                <ul>
                    <li>Conducted research studying how early programming experience influences underrespresented group's pursuit in computer science.</li>
                    <li>Currently collaborating on the development of CoBloP, adding collaborative features, multilingual support, and complex coding games.</li>
                </ul>
            </div>
        </div>
    )
}