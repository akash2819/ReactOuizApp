import { collection } from "firebase/firestore";
import React from "react";
import { db } from "../store/firebase";
import { QuizContext } from "../store/QuizHolder";

const QuizForm = () => {
  const { quizName, setQuizName } = React.useContext(QuizContext);

  const handleSubmit = (e: any) => {
    const QuizName = collection(db, quizName);
    console.log(QuizName);
    console.log(quizName);
  };
  return (
    <div className="flex justify-center">
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Quiz Name
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  "
          placeholder="Quiz Name"
          value={quizName}
          onChange={(e) => {
            setQuizName(e.target.value);
          }}
          required
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default QuizForm;
