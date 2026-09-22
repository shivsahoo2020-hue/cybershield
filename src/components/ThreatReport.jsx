import { useState } from "react";
import "./ThreatReport.css";

function ThreatReport() {
    const [type, setType] = useState("Phishing");
    const [source, setSource] = useState("Website");
    const [content, setContent] = useState("");
    const [reason, setReason] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const submitReport = () => {
        if (!content.trim() || !reason.trim()) {
            return;
        }

        setSubmitted(true);
    };

    return (
        <section id="reports" className="threat-report">
            <div className="report-container">

                <div className="report-heading">
                    <span>🚨 THREAT REPORTING</span>

                    <h2>
                        Report a <span>Suspicious Threat.</span>
                    </h2>

                    <p>
                        Help create a safer digital environment by reporting
                        suspicious messages, websites, emails, or online activity.
                    </p>
                </div>

                {!submitted ? (
                    <div className="report-box">

                        <div className="report-row">

                            <div className="report-field">
                                <label>What are you reporting?</label>

                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option>Phishing</option>
                                    <option>Scam</option>
                                    <option>Suspicious Website</option>
                                    <option>Fake Account</option>
                                    <option>Malware</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="report-field">
                                <label>Where did you encounter it?</label>

                                <select
                                    value={source}
                                    onChange={(e) => setSource(e.target.value)}
                                >
                                    <option>Website</option>
                                    <option>SMS</option>
                                    <option>Email</option>
                                    <option>Social Media</option>
                                    <option>Messaging App</option>
                                    <option>Other</option>
                                </select>
                            </div>

                        </div>

                        <div className="report-field">
                            <label>Suspicious content</label>

                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Paste the suspicious message, URL, email, or other content here..."
                                rows="6"
                            />
                        </div>

                        <div className="report-field">
                            <label>Why does it seem suspicious?</label>

                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="Describe what made you suspicious..."
                                rows="4"
                            />
                        </div>

                        <button
                            className="report-button"
                            onClick={submitReport}
                        >
                            🚨 Submit Report
                        </button>

                    </div>
                ) : (
                    <div className="report-success">

                        <div className="success-icon">✓</div>

                        <span>REPORT SUBMITTED</span>

                        <h3>Thank you for helping improve digital safety.</h3>

                        <p>
                            Your report has been received and recorded for review.
                        </p>

                        <div className="report-status">

                            <div>
                                <small>REPORT ID</small>
                                <strong>CS-001</strong>
                            </div>

                            <div>
                                <small>TYPE</small>
                                <strong>{type}</strong>
                            </div>

                            <div>
                                <small>STATUS</small>
                                <strong>Received</strong>
                            </div>

                        </div>

                        <button
                            className="new-report-button"
                            onClick={() => {
                                setSubmitted(false);
                                setContent("");
                                setReason("");
                            }}
                        >
                            + Report Another Threat
                        </button>

                    </div>
                )}

            </div>
        </section>
    );
}

export default ThreatReport;