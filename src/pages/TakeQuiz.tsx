import React from "react";
import Button from "../componenet/Button";
import Quiz from "../componenet/Quiz";
import Result from "../componenet/Result";
import { QuizContext } from "../store/QuizHolder";

const TakeQuiz = () => {
  const { start, exit } = React.useContext(QuizContext);

  return (
    <div>
      {exit == false ? (
        <>{start == true ? <Quiz /> : <Button text="start" />}</>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default TakeQuiz;
