import React from "react";
import Button from "./componenet/Button";
import QuizHolder, { QuizContext } from "./store/QuizHolder";
import Quiz from "./componenet/Quiz";

function App() {
  return (
    <div className="App">
      <QuizHolder>
        <Button text="start" />
        <Quiz />
      </QuizHolder>
    </div>
  );
}

export default App;
