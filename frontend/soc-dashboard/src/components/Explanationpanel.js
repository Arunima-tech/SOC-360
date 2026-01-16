import React from "react";

function ExplanationPanel({ alert }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h2>Explanation</h2>
      <p>{alert.explanation}</p>
    </div>
  );
}

export default ExplanationPanel;
