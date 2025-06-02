import React, { useState } from "react";
import Box from "./Box";

export default function App3() {
  const [flag, setFlag] = useState(1);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "24px 32px",
        borderRadius: 12,
        background: "linear-gradient(135deg, #e0f7fa 60%, #b2ebf2 100%)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          color: "#00796b",
          fontSize: "2rem",
          marginBottom: "0.5rem",
          fontWeight: "bold"
        }}
      >
        App3
      </h1>
      <h2
        style={{
          color: "#d7263d",
          fontSize: "1.2rem",
          marginBottom: "1.5rem",
          fontWeight: 600
        }}
      >
        Conditional Rendering
      </h2>
      <label
        style={{
          fontSize: "1rem",
          color: "#333",
          marginBottom: "1rem",
          display: "block"
        }}
      >
        Enter flag (1 or 2):{" "}
        <input
          type="number"
          min="1"
          max="2"
          value={flag}
          onChange={e => setFlag(Number(e.target.value))}
          style={{
            marginLeft: 8,
            padding: "6px 12px",
            border: "1px solid #00a19d",
            borderRadius: 6,
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s"
          }}
        />
      </label>
      <Box flag={flag} />
    </div>
  );
}