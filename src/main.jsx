import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Components/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
