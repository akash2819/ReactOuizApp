import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import QuizHolder from "./store/QuizHolder";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizHolder>
        <App />
      </QuizHolder>
    </BrowserRouter>
  </React.StrictMode>
);
