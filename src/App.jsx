import { useState } from "react";
import "./App.css";
import ThreatScanner from "./components/ThreatScanner";
import SecurityCheck from "./components/SecurityCheck";
import ThreatReport from "./components/ThreatReport";
import AISafetyAssistant from "./components/AISafetyAssistant";

function App() {
  const [securityScore, setSecurityScore] = useState(82);
  const [lastActivity, setLastActivity] = useState(
    "Security check not completed yet"
  );
  const [scanActivity, setScanActivity] = useState(
    "No threat scan performed yet"
  );
  const scrollToScanner = () => {
    document.getElementById("scanner")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToSecurity = () => {
    document.getElementById("security")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="shield">🛡️</span>
          <span>
            Cyber<span>Shield</span>
          </span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#scanner">Threat Scanner</a>
          <a href="#security">Security Check</a>
          <a href="#reports">Report Threat</a>
          <a href="#ai">AI Assistant</a>
          <a href="#features">Features</a>
        </div>

        <button className="nav-button" onClick={scrollToScanner}>
          Get Protected
        </button>
      </nav>

      {/* Hero Section */}
      <main id="home" className="hero">
        <div className="hero-content">
          <div className="badge">
            <span>●</span> AI-POWERED DIGITAL SAFETY
          </div>

          <h1>
            Don't just stay online.
            <br />
            <span>Stay protected.</span>
          </h1>

          <p>
            CyberShield helps you detect digital threats, protect your
            identity, and build safer online habits — all in one place.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={scrollToScanner}
            >
              🔍 Scan a Threat
            </button>

            <button
              className="secondary-button"
              onClick={scrollToSecurity}
            >
              🛡️ Check My Security
            </button>
          </div>

          <div className="trust">
            <div>
              <strong>AI</strong>
              <span>Threat Analysis</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Digital Protection</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Safety Focused</span>
            </div>
          </div>
        </div>

        {/* Security Dashboard Preview */}
        <div className="dashboard-preview">
          <div className="dashboard-top">
            <div>
              <span className="status-dot"></span>
              Security Center
            </div>

            <span className="online">● Protected</span>
          </div>

          <div className="security-score">
            <div className="score-circle">
              <div>
                <strong>{securityScore}</strong>
                <span>/100</span>
              </div>
            </div>

            <div className="score-info">
              <span>YOUR SECURITY SCORE</span>
              <h3>Good Protection</h3>
              <p>3 improvements recommended</p>
            </div>
          </div>

          <div className="dashboard-cards">
            <div className="mini-card">
              <span className="mini-icon">🔗</span>

              <div>
                <strong>Threat Scanner</strong>
                <small>Ready to scan</small>
              </div>
            </div>

            <div className="mini-card">
              <span className="mini-icon">🔐</span>

              <div>
                <strong>Account Safety</strong>
                <small>2FA enabled</small>
              </div>
            </div>
          </div>

          <div className="activity">
            <div className="activity-header">
              <strong>Recent Activity</strong>
              <span>View all</span>
            </div>

            <div className="activity-item">
              <span className="activity-icon safe">✓</span>

              <div>
                <strong>{lastActivity}</strong>
                <small>Just now</small>
              </div>

              <b>Safe</b>
            </div>

            <div className="activity-item">
              <span className="activity-icon warning">!</span>

              <div>
                <strong>{scanActivity}</strong>
                <small>Just now</small>
              </div>

              <b className="warning-text">Review</b>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================
          FEATURE 1 — THREAT SCANNER
      ========================================= */}
      <ThreatScanner
        onScanComplete={(result) => {
          setScanActivity(
            result.riskLevel === "Low"
              ? "Threat scan completed — Low risk"
              : `Threat detected — ${result.riskLevel} risk`
          );
        }}
      />

      {/* =========================================
          FEATURE 2 — SECURITY CHECK
      ========================================= */}
      <SecurityCheck
        onScoreChange={(score) => {
          setSecurityScore(score);
          setLastActivity("Security check completed");
        }}
      />

      {/* FEATURE 3 — THREAT REPORTING */}
      <ThreatReport />

      {/* FEATURE 4 — AI SAFETY ASSISTANT */}
      <AISafetyAssistant />

      {/* Features */}
      <section id="features" className="features-section">
        <div className="section-heading">
          <span>WHY CYBERSHIELD?</span>

          <h2>
            Your digital safety, <span>simplified.</span>
          </h2>

          <p>
            Powerful security tools designed to help everyone understand
            and respond to digital threats.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon blue">🔍</div>

            <h3>Threat Scanner</h3>

            <p>
              Analyze suspicious URLs, messages, emails and online
              content before you interact with them.
            </p>

            <a href="#scanner">Scan a threat →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">🛡️</div>

            <h3>Security Check</h3>

            <p>
              Quickly evaluate your digital-security habits and discover
              what you can improve.
            </p>

            <a href="#security">Check security →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">🤖</div>

            <h3>AI Safety Assistant</h3>

            <p>
              Get simple, contextual guidance when you encounter a
              suspicious or risky situation.
            </p>

            <a href="#ai">Ask AI →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">🚨</div>

            <h3>Threat Reporting</h3>

            <p>
              Report suspicious activity and help create a safer digital
              environment for your community.
            </p>

            <a href="#reports">Report a threat →</a>
          </div>
        </div>
      </section>

      {/* HOW CYBERSHIELD WORKS */}
      <section className="how-it-works">
        <div className="how-heading">
          <span>HOW CYBERSHIELD WORKS</span>

          <h2>
            From threat to <span>protection.</span>
          </h2>

          <p>
            CyberShield helps users understand suspicious situations
            and take safer action in four simple steps.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">🔍</div>

            <h3>Detect</h3>

            <p>
              Scan suspicious messages, URLs, emails, and online content
              for common warning signs.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🤖</div>

            <h3>Understand</h3>

            <p>
              Get simple explanations about why something may be
              suspicious or risky.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🛡️</div>

            <h3>Protect</h3>

            <p>
              Follow practical recommendations to avoid sharing
              sensitive information or interacting with risky content.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <div className="step-icon">🚨</div>

            <h3>Report</h3>

            <p>
              Report suspicious activity and contribute to a safer
              digital environment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <span>READY TO BE SAFER?</span>

          <h2>
            One scan could prevent
            <br />
            your next mistake.
          </h2>
        </div>

        <button
          className="primary-button"
          onClick={scrollToScanner}
        >
          🔍 Scan Something Suspicious
        </button>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          <span className="shield">🛡️</span>

          <span>
            Cyber<span>Shield</span>
          </span>
        </div>

        <p>AI-powered digital safety for everyone.</p>

        <span className="copyright">
          © 2026 CyberShield
        </span>
      </footer>
    </div>
  );
}

export default App;