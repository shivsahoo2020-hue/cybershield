import { useState } from "react";
import "./ThreatScanner.css";

function ThreatScanner({ onScanComplete }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const analyzeThreat = () => {
    const text = input.trim().toLowerCase();

    if (!text) {
      setResult(null);
      return;
    }

    let score = 0;
    const indicators = [];
    let threatType = "Potentially Suspicious";

    // Urgency indicators
    const urgencyWords = [
      "urgent",
      "immediately",
      "act now",
      "within 24 hours",
      "account blocked",
      "account suspended",
      "verify now",
    ];

    urgencyWords.forEach((word) => {
      if (text.includes(word)) {
        score += 15;
        indicators.push(`Urgency language: "${word}"`);
      }
    });

    // Financial scam indicators
    const financialWords = [
      "you won",
      "winner",
      "cash prize",
      "lottery",
      "reward",
      "free money",
      "prize",
      "₹",
      "rs.",
    ];

    financialWords.forEach((word) => {
      if (text.includes(word)) {
        score += 20;
        indicators.push(`Financial lure: "${word}"`);
        threatType = "Possible Scam";
      }
    });

    // Credential / OTP indicators
    const credentialWords = [
      "password",
      "otp",
      "one time password",
      "pin",
      "cvv",
      "verify your account",
      "login details",
    ];

    credentialWords.forEach((word) => {
      if (text.includes(word)) {
        score += 20;
        indicators.push(`Credential request: "${word}"`);
        threatType = "Possible Phishing";
      }
    });

    // URL detection
    const urls = text.match(/https?:\/\/[^\s]+/gi);

    if (urls) {
      urls.forEach((url) => {
        indicators.push(`URL detected: ${url}`);

        const suspiciousPatterns = [
          "bit.ly",
          "tinyurl",
          "login-",
          "verify-",
          ".xyz",
          ".top",
          ".click",
        ];

        suspiciousPatterns.forEach((pattern) => {
          if (url.includes(pattern)) {
            score += 25;
            indicators.push(
              `Suspicious URL pattern: "${pattern}"`
            );
            threatType = "Suspicious Link";
          }
        });
      });
    }

    // Phishing indicators
    const phishingWords = [
      "click here",
      "click the link",
      "verify",
      "security alert",
      "unusual activity",
      "confirm your identity",
      "update your account",
    ];

    phishingWords.forEach((word) => {
      if (text.includes(word)) {
        score += 10;
        indicators.push(`Phishing language: "${word}"`);
      }
    });

    // Limit score to 100
    score = Math.min(score, 100);

    let riskLevel = "Low";

    if (score >= 80) {
      riskLevel = "Critical";
    } else if (score >= 60) {
      riskLevel = "High";
    } else if (score >= 30) {
      riskLevel = "Medium";
    }

    // If no suspicious indicators were found
    if (indicators.length === 0) {
      indicators.push("No obvious threat indicators detected.");
      threatType = "No Obvious Threat";
    }

    let recommendation =
      "Continue to stay cautious and avoid sharing sensitive information.";

    if (score >= 60) {
      recommendation =
        "Do not click links or share passwords, OTPs, PINs, or financial information. Verify the sender through an official source.";
    } else if (score >= 30) {
      recommendation =
        "Be careful before clicking links or providing personal information. Verify the message independently.";
    }

    const scanResult = {
      score,
      riskLevel,
      threatType,
      indicators,
      recommendation,
    };

    setResult(scanResult);
    onScanComplete(scanResult);
  };

  return (
    <section id="scanner" className="threat-scanner">
      <div className="scanner-container">
        <div className="scanner-heading">
          <span>🔍 THREAT DETECTION</span>

          <h2>
            Check Before <span>You Click.</span>
          </h2>

          <p>
            Paste a suspicious message, email, or URL below.
            CyberShield will analyze common warning signs and give
            you a simple risk assessment.
          </p>
        </div>

        <div className="scanner-box">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste a suspicious message, email, or URL here..."
            rows="7"
          />

          <button
            className="scan-button"
            onClick={analyzeThreat}
          >
            🔍 Analyze Threat
          </button>
        </div>

        {result && (
          <div className="scan-result">
            <div className="result-header">
              <div>
                <span>THREAT ANALYSIS</span>
                <h3>{result.threatType}</h3>
              </div>

              <div className="risk-score">
                <strong>{result.score}</strong>
                <small>/100</small>
              </div>
            </div>

            <div className="risk-level">
              <strong>Risk Level:</strong>{" "}
              <span>{result.riskLevel}</span>
            </div>

            <div className="indicators">
              <h4>⚠️ Detected Indicators</h4>

              <ul>
                {result.indicators.map((indicator, index) => (
                  <li key={index}>{indicator}</li>
                ))}
              </ul>
            </div>

            <div className="recommendation">
              <h4>🛡️ Recommended Action</h4>

              <p>{result.recommendation}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ThreatScanner;