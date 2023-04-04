import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div clasName="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by Priscilla Soto and is{" "}
          <a href="https://github.com/pmsoto/weather.react" target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
