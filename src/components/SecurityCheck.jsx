import { useState } from "react";
import "./SecurityCheck.css";

function SecurityCheck({ onScoreChange }) {
    const questions = [
        {
            id: "twoFactor",
            title: "Is two-factor authentication (2FA) enabled?",
            description:
                "2FA adds an extra layer of protection to your important accounts.",
        },
        {
            id: "screenLock",
            title: "Do you use a screen lock on your devices?",
            description:
                "A PIN, password, or biometric lock helps protect your device.",
        },
        {
            id: "updates",
            title: "Do you regularly update your devices and apps?",
            description:
                "Updates often include important security fixes.",
        },
        {
            id: "passwordReuse",
            title: "Do you avoid reusing the same password?",
            description:
                "Using unique passwords reduces the impact of a compromised account.",
        },
        {
            id: "backup",
            title: "Do you keep backups of important data?",
            description:
                "Backups can help you recover important information after data loss.",
        },
    ];

    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleAnswer = (id, value) => {
        setAnswers((previous) => ({
            ...previous,
            [id]: value,
        }));

        setScore(null);
    };

    const calculateScore = () => {
        let total = 0;

        questions.forEach((question) => {
            if (answers[question.id] === true) {
                total += 20;
            }
        });

        setScore(total);
        onScoreChange(total);
    };

    const answeredCount = Object.keys(answers).length;
    const allAnswered = answeredCount === questions.length;

    const getScoreMessage = () => {
        if (score >= 80) {
            return "Strong security habits";
        }

        if (score >= 60) {
            return "Good protection with some improvements needed";
        }

        if (score >= 40) {
            return "Some important security improvements are needed";
        }

        return "Several security habits need attention";
    };

    return (
        <section id="security" className="security-check">
            <div className="security-container">
                {/* Heading */}
                <div className="security-heading">
                    <span>🛡️ SECURITY POSTURE CHECK</span>

                    <h2>
                        How secure are <span>you?</span>
                    </h2>

                    <p>
                        Answer five simple questions to get a quick overview of
                        your digital-security habits.
                    </p>
                </div>

                {/* Questions */}
                <div className="security-questions">
                    {questions.map((question, index) => (
                        <div className="security-question" key={question.id}>
                            <div className="question-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="question-content">
                                <h3>{question.title}</h3>

                                <p>{question.description}</p>

                                <div className="answer-buttons">
                                    <button
                                        className={
                                            answers[question.id] === true
                                                ? "answer-button selected yes"
                                                : "answer-button"
                                        }
                                        onClick={() =>
                                            handleAnswer(question.id, true)
                                        }
                                    >
                                        ✓ Yes
                                    </button>

                                    <button
                                        className={
                                            answers[question.id] === false
                                                ? "answer-button selected no"
                                                : "answer-button"
                                        }
                                        onClick={() =>
                                            handleAnswer(question.id, false)
                                        }
                                    >
                                        ✕ No
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calculate */}
                <div className="security-action">
                    <p>
                        {answeredCount} of {questions.length} questions answered
                    </p>

                    <button
                        className="security-button"
                        onClick={calculateScore}
                        disabled={!allAnswered}
                    >
                        🛡️ Calculate My Security Score
                    </button>
                </div>

                {/* Result */}
                {score !== null && (
                    <div className="security-result">
                        <div className="score-display">
                            <div className="security-score-circle">
                                <strong>{score}</strong>
                                <span>/100</span>
                            </div>

                            <div className="score-message">
                                <span>YOUR SECURITY SCORE</span>
                                <h3>{getScoreMessage()}</h3>
                            </div>
                        </div>

                        <div className="security-summary">
                            <h3>🔐 Security Summary</h3>

                            {score < 100 && (
                                <p>
                                    Review the questions where you selected
                                    <strong> No </strong>
                                    and consider improving those security habits.
                                </p>
                            )}

                            {score === 100 && (
                                <p>
                                    You selected Yes for every security habit.
                                    Keep maintaining these practices.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SecurityCheck;