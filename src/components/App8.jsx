import React from "react";
import { useState } from "react";
export default function App8() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div
      style={{
        maxWidth: 350,
        margin: "2rem auto",
        padding: "32px 24px",
        borderRadius: 14,
        background: "linear-gradient(135deg, #f8ffae 60%, #43c6ac 100%)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#00796b",
          fontSize: "2rem",
          marginBottom: "0.5rem",
          fontWeight: "bold",
        }}
      >
        App8
      </h1>
      <h2
        style={{
          color: "#d7263d",
          fontSize: "1.2rem",
          marginBottom: "1.2rem",
          fontWeight: 600,
        }}
      >
        useState Revision
      </h2>
      <h3
        style={{
          fontSize: "2.5rem",
          color: "#f8b500",
          margin: "1.5rem 0",
        }}
      >
        {count}
      </h3>
      <p>
        <button
          style={{
            background: "#00a19d",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 28px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#00796b")}
          onMouseOut={(e) => (e.target.style.background = "#00a19d")}
          onClick={increment}
        >
          Click
        </button>
      </p>
    </div>
  );
}