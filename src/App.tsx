import React from "react";
import QuizHolder, { QuizContext } from "./store/QuizHolder";
import Quiz from "./componenet/Quiz";
import Button from "./componenet/Button";
import Result from "./componenet/Result";
import { db } from "./store/firebase";
import Tempdb from "./componenet/Tempdb";
function App() {
  const { start, exit } = React.useContext(QuizContext);

  return (
    <div className="App">
      {exit == false ? (
        <>{start == true ? <Quiz /> : <Button text="start" />}</>
      ) : (
        <Result />
      )}
      <Tempdb />
    </div>
  );
}

export default App;
