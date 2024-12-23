import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Toggle from "./context/Toggle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toggle>
      <App />
    </Toggle>
  </StrictMode>
);
