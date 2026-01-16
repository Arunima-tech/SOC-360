import React from "react"; // Always import React in a component

function AlertList({ alerts, onSelect }) {
  // alerts = array of alert objects
  // onSelect = function to set which alert is selected

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h2>Alert List</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id} onClick={() => onSelect(alert)} style={{ cursor: "pointer" }}>
            {alert.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertList;
