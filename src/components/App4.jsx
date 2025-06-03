import React from "react";
export default function App4() {
  const handleSubmit = () => {
    alert("Hello World");
  };
  const handleSubmit1 = (name) => {
    alert(name);
  };
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "24px 32px",
        borderRadius: 12,
        background: "linear-gradient(135deg, #fceabb 60%, #f8b500 100%)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#b26a00",
          fontSize: "2rem",
          marginBottom: "0.5rem",
          fontWeight: "bold",
        }}
      >
        App4
      </h1>
      <h2
        style={{
          color: "#d7263d",
          fontSize: "1.2rem",
          marginBottom: "1.5rem",
          fontWeight: 600,
        }}
      >
        Event Handling
      </h2>
      <p>
        <button
          onClick={handleSubmit}
          style={{
            background: "#00A19D",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 18px",
            marginRight: 12,
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
        <button
          onClick={() => handleSubmit1("John")}
          style={{
           background: "#00A19D",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 18px",
            marginRight: 12,
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Submit1
        </button>
      </p>
    </div>
  );
}