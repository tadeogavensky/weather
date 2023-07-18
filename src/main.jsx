import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherContextProvider } from "./components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>
);
