import React from "react";
import { QuizContext } from "../store/QuizHolder";

const Quiz = () => {
  const { start, setStart } = React.useContext(QuizContext);
  console.log(start, "start");
  return (
    <div>
      <p className=" relative top-80 text-violet-400">{start}</p>
    </div>
  );
};

export default Quiz;
