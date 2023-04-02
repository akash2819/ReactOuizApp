import React from "react";
import { QuizContext } from "../store/QuizHolder";

const Button = (props: any) => {
  const { start, setStart } = React.useContext(QuizContext);
  console.log(typeof props.action, "--", start);
  return (
    <button
      onClick={() => setStart(true)}
      className={` text-2xl bg-orange-400 px-2 py-5`}
    >
      {props.text}
    </button>
  );
};

export default Button;
