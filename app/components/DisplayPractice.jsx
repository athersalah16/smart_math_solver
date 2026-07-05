"use client";
import { useEffect ,useState} from "react";
import { useEquation } from "../contex/EquationContex";
import { getTheQuestion } from "../helper_funcs/getTheQuestion";

function DisplayPractice() {
  const {
    practiceProblems,
    studentAnswer,
    setStudentAnswer,
    loading,
    difficulty,
    runAI,
  } = useEquation();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const question = getTheQuestion(practiceProblems, difficulty);
    setQuestion(question);
  }, [difficulty]);
  return (
    <div className=" w-[800px] h-[250px] bg-white  rounded-lg  flex flex-col mt-3">
      <p className="text-xl ml-4 cursor-text">Question</p>
      <div className="w-[600px] h-12 ml-4 mt-2  bg-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
        {question}
      </div>
      <p className="text-xl ml-4 mt-4 cursor-text">Answer</p>
      <input
        type="text"
        value={studentAnswer}
        onChange={(e) => setStudentAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="w-[600px] focus:shadow-md ml-4 focus:outline-none rounded-md h-8 p-3 bg-gray-200"
      />
      <button
        disabled={!studentAnswer.trim()}
        onClick={() => runAI("check", question)}
        className={`
        
        ${studentAnswer.trim() ? "w-[600px] ml-4  h-10 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg mt-4 hover:opacity-90" : "bg-gray-400 mt-4 h-12 rounded-lg  cursor-not-allowed w-[600px] ml-4"}`}
      >
        {loading ? "Checking..." : "Check Answer"}
      </button>
    </div>
  );
}

export default DisplayPractice;
