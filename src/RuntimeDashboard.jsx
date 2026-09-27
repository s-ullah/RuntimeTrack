import { useState } from "react";
import "./RuntimeDashboard.css";

function RuntimeDashboard({ onBack }) {
  const [planning, setPlanning] = useState(false);
  const [planGenerated, setPlanGenerated] = useState(false);
  return (
    <div className="runtime-dashboard">

      {/* TOP BAR */}
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <span className="brand-mark">R</span>

          <div>
            <h1>RUNTIME TRACK</h1>
            <p>RAILWAY OPERATIONS INTELLIGENCE</p>
          </div>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>
        <button className="back-button" onClick={onBack}>
           ← BACK TO RUNTIME TRACK
        </button>
      </header>


      {/* MAIN CONTENT */}
      <main className="dashboard-content">

        <div className="dashboard-heading">
          <div>
            <p className="dashboard-label">OPERATIONS CENTER</p>
            <h2>Railway Operations Overview</h2>
          </div>

          <div className="live-time live-monitoring">
          <span className="live-dot"></span>
            LIVE MONITORING
          </div>
        </div>


        {/* STAT CARDS */}
        <section className="stat-grid">

          <div className="stat-card">
            <p>ACTIVE BLOCKS</p>
            <strong>04</strong>
            <span>Currently scheduled</span>
          </div>

          <div className="stat-card">
            <p>TRAINS MONITORED</p>
            <strong>27</strong>
            <span>Operational network</span>
          </div>

          <div className="stat-card">
            <p>AVAILABLE ASSETS</p>
            <strong>18</strong>
            <span>Ready for allocation</span>
          </div>

          <div className="stat-card alert-card">
            <p>PENDING REQUESTS</p>
            <strong>06</strong>
            <span>Require planning</span>
          </div>

        </section>


        {/* LOWER GRID */}
        <section className="dashboard-grid">

          {/* MAINTENANCE */}
          <div className="dashboard-panel maintenance-panel">

            <div className="panel-header">
              <div>
                <p>01 — MAINTENANCE</p>
                <h3>Pending Requests</h3>
              </div>

              <span className="panel-count">06</span>
            </div>

            <div className="maintenance-item">
              <div>
                <strong>Track T-104</strong>
                <span>Kota → Sawai Madhopur</span>
              </div>

              <div className="request-status">
                HIGH
              </div>
            </div>

            <div className="maintenance-item">
              <div>
                <strong>Track T-221</strong>
                <span>Jaipur → Bandikui</span>
              </div>

              <div className="request-status normal">
                NORMAL
              </div>
            </div>

            <button className="panel-button">
              VIEW ALL REQUESTS →
            </button>

          </div>


          {/* ASSETS */}
          <div className="dashboard-panel">

            <div className="panel-header">
              <div>
                <p>02 — ASSETS</p>
                <h3>Asset Availability</h3>
              </div>
            </div>

            <div className="asset-row">
              <span>Maintenance Crew A</span>
              <b className="available">AVAILABLE</b>
            </div>

            <div className="asset-row">
              <span>Tamping Machine</span>
              <b className="available">AVAILABLE</b>
            </div>

            <div className="asset-row">
              <span>Inspection Vehicle</span>
              <b className="busy">BUSY</b>
            </div>

            <div className="asset-row">
              <span>Crane Unit</span>
              <b className="available">AVAILABLE</b>
            </div>

            <button className="panel-button">
              MANAGE ASSETS →
            </button>

          </div>

        </section>


        {/* BLOCK PLANNING */}
        <section className="planning-banner">

          <div>
            <p>03 — INTELLIGENT PLANNING</p>
            <h3>Generate an optimized maintenance block plan.</h3>
            <span>
              Coordinate tracks, trains, maintenance activities and
              available assets in one planning workflow.
            </span>
          </div>

          <button
            className={`generate-button ${
    planning ? "planning" : ""
  } ${planGenerated ? "generated" : ""}`}
  onClick={() => {
    if (planning) return;

    setPlanning(true);
    setPlanGenerated(false);

    setTimeout(() => {
      setPlanning(false);
      setPlanGenerated(true);
    }, 2500);
  }}
>
  {planning ? (
    <>ANALYZING NETWORK...</>
  ) : planGenerated ? (
    <>✓ PLAN GENERATED</>
  ) : (
    <>
      GENERATE PLAN
      <span>↗</span>
    </>
  )}
</button>

{planning && (
  <div className="planning-steps">
    <div className="planning-step step-1">
      ✓ CHECKING TRAIN CONFLICTS
    </div>

    <div className="planning-step step-2">
      ✓ MATCHING AVAILABLE ASSETS
    </div>

    <div className="planning-step step-3">
      ✓ OPTIMIZING MAINTENANCE BLOCKS
    </div>
  </div>
)}

{planGenerated && (
  <section className="generated-plan">

    <div className="generated-plan-header">
      <div>
        <p>04 — OPTIMIZED BLOCK PLAN</p>
        <h3>Recommended Maintenance Schedule</h3>
      </div>

      <span className="plan-status">
        ✓ OPTIMIZED
      </span>
    </div>

    <div className="plan-table">

      <div className="plan-row plan-head">
        <span>BLOCK</span>
        <span>SECTION</span>
        <span>TIME</span>
        <span>ASSET</span>
        <span>STATUS</span>
      </div>

      <div className="plan-row">
        <span>BLK-01</span>
        <span>Kota → Sawai Madhopur</span>
        <span>14:30–16:00</span>
        <span>Crew A</span>
        <span className="plan-green">OPTIMIZED</span>
      </div>

      <div className="plan-row">
        <span>BLK-02</span>
        <span>Jaipur → Bandikui</span>
        <span>16:15–17:30</span>
        <span>Tamping Unit</span>
        <span className="plan-green">OPTIMIZED</span>
      </div>

      <div className="plan-row">
        <span>BLK-03</span>
        <span>Sawai Madhopur → Gangapur</span>
        <span>18:00–19:00</span>
        <span>Inspection Vehicle</span>
        <span className="plan-yellow">CONFLICT RESOLVED</span>
      </div>

    </div>

    <div className="plan-summary">
      <div>
        <strong>18</strong>
        <span>Assets Available</span>
      </div>

      <div>
        <strong>03</strong>
        <span>Blocks Scheduled</span>
      </div>

      <div>
        <strong>27</strong>
        <span>Trains Considered</span>
      </div>

      <div>
        <strong>92%</strong>
        <span>Planning Efficiency</span>
      </div>
    </div>

  </section>
)}

        </section>

      </main>

    </div>
  );
}

export default RuntimeDashboard;