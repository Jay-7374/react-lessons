import { useState, useEffect } from "react";
import axios from "axios";
import "./App22.css"; // Import the CSS file

export default function App22() {
  const [temp, setTemp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/weather")
      .then((response) => {
        setTemp(response.data);
      })
      .catch(() => {
        setError("Failed to fetch weather data");
      });
  }, []);

  return (
    <div className="weather-container">
      <h2>Weather</h2>
      {error && <p className="weather-error">{error}</p>}
      <div className="weather-data">
        {temp !== null ? JSON.stringify(temp, null, 2) : "Loading..."}
      </div>
    </div>
  );
}