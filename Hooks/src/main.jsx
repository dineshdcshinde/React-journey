import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Data } from "./context/Data.jsx";

createRoot(document.getElementById("root")).render(
  <Data>
    <App />
  </Data>
);
