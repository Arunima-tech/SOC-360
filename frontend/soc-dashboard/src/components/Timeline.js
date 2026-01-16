import React from "react";

function Timeline({ alerts }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h2>Timeline</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            {alert.time} - {alert.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
