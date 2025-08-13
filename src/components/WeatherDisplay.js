import React from "react";

function WeatherDisplay({ weather }) {
  const color = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
    <p>
    Temperature: <span style={{ color }}>{weather.temperature}</span>
    </p>
  <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
