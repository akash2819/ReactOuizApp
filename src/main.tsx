import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import QuizHolder from "./store/QuizHolder";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuizHolder>
      <App />
    </QuizHolder>
  </React.StrictMode>
);
