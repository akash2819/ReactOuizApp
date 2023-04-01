import React, { createContext, useState } from "react";

type QuizContextType = {
  start: boolean;
  setStart: any;
  exit: boolean;
  setExit: any;
  correct: number;
  setCorrect: any;
};

export const QuizContext = createContext<QuizContextType>({
  start: false,
  setStart: () => {},
  exit: false,
  setExit: () => {},
  correct: 0,
  setCorrect: () => {},
});

export default function QuizHolder(props: any) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);

  return (
    <QuizContext.Provider
      value={{ start, setStart, exit, setExit, correct, setCorrect }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}
