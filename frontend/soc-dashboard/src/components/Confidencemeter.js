import React from "react";

function ConfidenceMeter({ confidence }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h2>Confidence</h2>
      <div style={{ backgroundColor: "#ddd", width: "100%", height: "20px" }}>
        <div
          style={{
            backgroundColor: "green",
            width: `${confidence}%`,
            height: "100%"
          }}
        ></div>
      </div>
      <p>{confidence}%</p>
    </div>
  );
}

export default ConfidenceMeter;
