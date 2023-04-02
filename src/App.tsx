import Tempdb from "./componenet/Tempdb";
import QuizForm from "./pages/QuizForm";
import TakeQuiz from "./pages/TakeQuiz";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createQuiz" element={<QuizForm />} />
        <Route path="/quiz" element={<TakeQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
