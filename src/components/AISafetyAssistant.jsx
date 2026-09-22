import { useState } from "react";
import "./AISafetyAssistant.css";

function AISafetyAssistant() {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState(null);

    const analyzeQuestion = () => {
        const text = question.trim().toLowerCase();

        if (!text) {
            setResponse(null);
            return;
        }

        let risk = "Low";
        let title = "No major warning signs detected";
        let explanation =
            "The information provided does not contain enough obvious warning signs to identify a clear threat.";
        let advice =
            "Stay cautious, verify important information independently, and avoid sharing sensitive details.";

        if (
            text.includes("otp") ||
            text.includes("password") ||
            text.includes("pin") ||
            text.includes("cvv") ||
            text.includes("login")
        ) {
            risk = "High";
            title = "Possible credential theft";
            explanation =
                "The situation involves sensitive account information. Legitimate organizations generally should not ask you to share passwords, OTPs, PINs, or CVVs through messages.";
            advice =
                "Do not share the requested information. Verify the request using the organization's official website or app.";
        } else if (
            text.includes("click") ||
            text.includes("link") ||
            text.includes("verify") ||
            text.includes("account blocked") ||
            text.includes("account suspended")
        ) {
            risk = "High";
            title = "Possible phishing attempt";
            explanation =
                "The message contains patterns commonly associated with phishing, such as links, verification requests, or warnings about account access.";
            advice =
                "Do not click the link. Open the official website or app yourself and check whether there is actually an account issue.";
        } else if (
            text.includes("prize") ||
            text.includes("winner") ||
            text.includes("lottery") ||
            text.includes("reward") ||
            text.includes("free money")
        ) {
            risk = "High";
            title = "Possible scam or financial lure";
            explanation =
                "Unexpected prizes, rewards, or money offers can be used to persuade people to provide information or make payments.";
            advice =
                "Do not send money or personal information. Verify the offer through an official source.";
        } else if (
            text.includes("urgent") ||
            text.includes("immediately") ||
            text.includes("act now") ||
            text.includes("within 24 hours")
        ) {
            risk = "Medium";
            title = "Urgency is a warning sign";
            explanation =
                "The message appears to pressure you into acting quickly. Scammers may use urgency to prevent people from checking the information carefully.";
            advice =
                "Pause before responding. Verify the sender and the claim independently.";
        } else {
            risk = "Low";
            title = "No obvious threat pattern found";
            explanation =
                "The assistant did not detect common phishing or scam indicators in your description.";
            advice =
                "This does not guarantee that the situation is safe. Verify unexpected requests before taking action.";
        }

        setResponse({
            risk,
            title,
            explanation,
            advice,
        });
    };

    return (
        <section id="ai" className="ai-assistant">
            <div className="ai-container">

                <div className="ai-heading">
                    <span>🤖 AI SAFETY ASSISTANT</span>

                    <h2>
                        Not sure? <span>Ask CyberShield.</span>
                    </h2>

                    <p>
                        Describe a suspicious message, website, email, or online
                        situation and get simple safety guidance.
                    </p>
                </div>

                <div className="ai-box">

                    <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Example: I received a message saying my bank account will be blocked unless I click a link..."
                        rows="6"
                    />

                    <button
                        className="ai-button"
                        onClick={analyzeQuestion}
                    >
                        🤖 Analyze with CyberShield
                    </button>

                </div>

                {response && (
                    <div className="ai-response">

                        <div className="ai-response-header">
                            <div>
                                <span>SAFETY ANALYSIS</span>
                                <h3>{response.title}</h3>
                            </div>

                            <div className={`ai-risk ${response.risk.toLowerCase()}`}>
                                {response.risk} Risk
                            </div>
                        </div>

                        <div className="ai-section">
                            <h4>🔎 Why?</h4>
                            <p>{response.explanation}</p>
                        </div>

                        <div className="ai-section recommendation">
                            <h4>🛡️ What should you do?</h4>
                            <p>{response.advice}</p>
                        </div>

                        <div className="ai-tip">
                            <strong>💡 Safety Tip</strong>
                            <p>
                                When something feels urgent or unexpected, pause and
                                verify it through an official source before taking action.
                            </p>
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
}

export default AISafetyAssistant;