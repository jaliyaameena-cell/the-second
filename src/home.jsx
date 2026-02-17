import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Project from "./project";
import "./home.css";
export default function Home() {
    const [hasIDE, setHasIDE] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="home-title">Do you have the Arduino IDE installed?</h1>

            <button className="home-button"
                onClick={() => setHasIDE(true)} style={{ margin: "0.5rem" }}>
                Yes
            </button>

            <button className="home-button" onClick={() => setHasIDE(false)} style={{ margin: "0.5rem" }}>
                No
            </button>

            {hasIDE === false && (
                <div className="download-section" style={{ marginTop: "1rem" }}>
                    <p>You need to install Arduino IDE first.</p>
                    <a
                        href="https://www.arduino.cc/en/software"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Arduino IDE
                    </a>
                </div>
            )}

            {hasIDE === true && (
                <div style={{ marginTop: "1rem" }}>
                    <button className="home-button" onClick={() => navigate("/project")}>Proceed to Project</button>
                </div>
            )}
        </div>
    );
}

