import React, { useState } from "react";
import AlertList from "./Alertlist";
import ConfidenceMeter from "./Confidencemeter";
import Timeline from "./Timeline";
import ExplanationPanel from "./Explanationpanel";

function Dashboard() {
  // Sample alert data
  const alerts = [
    {
      id: 1,
      title: "Unauthorized Login",
      confidence: 85,
      time: "10:00 AM",
      explanation: "Detected from unknown IP",
    },
    {
      id: 2,
      title: "Malware Alert",
      confidence: 92,
      time: "11:00 AM",
      explanation: "Suspicious file detected",
    },
  ];

  // Selected alert state
  const [selectedAlert, setSelectedAlert] = useState(alerts[0]);

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">SOC</h2>
        <ul>
          <li>DASHBOARD</li>
          <li>ALERTS</li>
          <li>TIMELINE</li>
          <li>REPORTS</li>
        </ul>
      </div>

      {/* Main Area */}
      <div className="main-area">
        {/* Top Bar */}
        <div className="topbar">
          <input type="text" placeholder="Search alerts..." />
        </div>

        {/* Dashboard Heading */}
        <h1 className="dashboard-title">SOC 360 DASHBOARD</h1>

        {/* Stat Cards */}
        <div className="stats-row">
          <div className="stat-card blue">
            <p>TOTAL ALERTS</p>
            <h1>{alerts.length}</h1>
          </div>

          <div className="stat-card green">
            <p>AVG CONFIDENCE</p>
            <h1>{selectedAlert.confidence}%</h1>
          </div>

          <div className="stat-card red">
            <p>OPEN INCIDENTS</p>
            <h1>5</h1>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="content-grid">
          <div className="component-box">
            <h3>ALERT LIST</h3>
            <AlertList alerts={alerts} onSelect={setSelectedAlert} />
          </div>

          <div className="component-box">
            <h3>CONFIDENCE & EXPLANATION</h3>
            <ConfidenceMeter confidence={selectedAlert.confidence} />
            <ExplanationPanel alert={selectedAlert} />
          </div>

          {/* Timeline Section with TWO BOXES */}
          <div className="timeline-container">
            <div className="component-box">
              <h3>TIMELINE EVENTS</h3>
              <Timeline alerts={alerts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
