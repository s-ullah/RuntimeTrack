import { useState } from "react";
import "./App.css";
import RailwayScene from "./components/RailwayScene";
import RuntimeDashboard from "./RuntimeDashboard";

function App() {
  const [softwareInstalled, setSoftwareInstalled] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  if (showDashboard) {
  return (
    <RuntimeDashboard
      onBack={() => {
        setShowDashboard(false);
        setSoftwareInstalled(false);
        setInstalling(false);
      }}
    />
  );
}
  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="hero">

        <RailwayScene />

        {/* Dark cinematic overlay */}
        <div className="dark-overlay"></div>

        {/* ================= NAVBAR ================= */}

        <nav className="navbar">

          <a href="#home" className="logo">
            <span>RUNTIME</span>
            <span>TRACK</span>
          </a>

          <div className="nav-links">
            <a href="#home">HOME</a>
            <a href="#solution">SOLUTION</a>
            <a href="#technology">TECHNOLOGY</a>
            <a href="#team">TEAM</a>
          </div>

          <button className="menu-button">
            MENU
          </button>

        </nav>

        {/* ================= HERO CONTENT ================= */}

        <div className="hero-content" id="home">

          <p className="eyebrow">
            SMART RAILWAY OPERATIONS
          </p>

          <h1>
            RUNTIME
            <br />
            TRACK
          </h1>

          <p className="hero-description">
            Intelligent railway block planning
            for smarter and more reliable
            train operations.
          </p>

          <button
            className={`install-button ${
    installing ? "installing" : ""
  } ${softwareInstalled ? "installed" : ""}`}
  onClick={() => {
    if (softwareInstalled || installing) return;

    setInstalling(true);

    setTimeout(() => {
      setInstalling(false);
      setSoftwareInstalled(true);

      setTimeout(() => {
      window.scrollTo({
      top: 0,
      behavior: "instant"
  });
  window.scrollTo({
  top: 0,
  behavior: "instant"
});

  setShowDashboard(true);
}, 1200);
    }, 1500);
  }}
>
  {installing ? (
    <>INSTALLING...</>
  ) : softwareInstalled ? (
    <>✓ SOFTWARE INSTALLED</>
  ) : (
    <>
      INSTALL SOFTWARE
      <span>↗</span>
    </>
  )}
</button>
        </div>

        {/* Bottom information */}

        <div className="hero-info">
          <span>AI-POWERED</span>
          <span>RAILWAY MAINTENANCE</span>
          <span>SIH 2026</span>
        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main>

        {/* INTRODUCTION */}

        <section className="intro" id="solution">

          <p className="section-number">
            01 — THE SOLUTION
          </p>

          <h2>
            PLAN SMARTER.
            <br />
            KEEP TRACKS AVAILABLE.
          </h2>

          <p className="intro-text">
            Runtime Track brings railway maintenance,
            defects, corridor availability and train
            operations together to create coordinated
            maintenance block plans.
          </p>

        </section>


        {/* FEATURES */}

        <section className="features" id="technology">

          <div className="feature-card">
            <span>01</span>

            <h3>DATA</h3>

            <p>
              Maintenance and railway operation
              information brought together in one
              intelligent system.
            </p>
          </div>


          <div className="feature-card">
            <span>02</span>

            <h3>PRIORITY</h3>

            <p>
              Critical and urgent maintenance
              activities are identified and
              prioritized.
            </p>
          </div>


          <div className="feature-card">
            <span>03</span>

            <h3>OPTIMIZATION</h3>

            <p>
              Generate coordinated maintenance
              blocks while reducing conflicts
              and unnecessary downtime.
            </p>
          </div>

        </section>


        {/* SOFTWARE */}

        <section className="software">

          <p className="section-number">
            02 — THE SOFTWARE
          </p>

          <h2>
            ONE INTELLIGENT
            <br />
            RAILWAY SYSTEM.
          </h2>

          <p>
            Runtime Track is designed to transform
            decentralized railway block planning
            into a coordinated, data-driven process.
          </p>

          <button
            className="install-button"
  onClick={() => {
    if (softwareInstalled) return;

    setInstalling(true);

    setTimeout(() => {
      setInstalling(false);
      setSoftwareInstalled(true);

      setTimeout(() => {
      setShowDashboard(true);

      setTimeout(() => {
      window.scrollTo(0, 0);
      }, 100);
      }, 1200);
    }, 1500);
  }}
>
  {softwareInstalled ? (
    <>✓ SOFTWARE INSTALLED</>
  ) : installing ? (
    <>INSTALLING...</>
  ) : (
    <>
      INSTALL SOFTWARE
      <span>↗</span>
    </>
  )}
</button>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer id="team">

        <div className="footer-main">

          <div className="footer-brand">
            <span>RUNTIME</span>
            <span>TRACK</span>
          </div>


          <div className="footer-column">

            <h4>EXPLORE</h4>

            <a href="#home">Home</a>
            <a href="#solution">Solution</a>
            <a href="#technology">Technology</a>
            <a href="#team">Team</a>

          </div>


          <div className="footer-column">

            <h4>RUNTIME TRACK</h4>

            <a href="#solution">Our Solution</a>
            <a href="#technology">Technology</a>
            <a href="#">Railway Planning</a>
            <a href="#">AI Optimization</a>

          </div>


          <div className="footer-column">

            <h4>CONNECT</h4>

            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>RUNTIME TRACK</span>

          <span>SMART INDIA HACKATHON 2026</span>

          <span>© 2026</span>

        </div>

      </footer>
    </>
  );
}

export default App;