import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Weather from "./Weather.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return root.render(
    <StrictMode>
      <div className="App">
        <h1>Weather Search Engine</h1>
        <Weather />
      </div>
    </StrictMode>
  );
}

export default App;
