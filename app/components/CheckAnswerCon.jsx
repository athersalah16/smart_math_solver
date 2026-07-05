"use client";
import { useEquation } from "../contex/EquationContex";
import CorrectAnswer from "./CorrectAnswer";
import FalseAnswer from "./FalseAnswer";
function CheckAnswerCon() {
  const { userSolution, setStudentAnswer, setDifficulty, setUserSolution } =
    useEquation();
  const handleNextQuestion = () => {
    if (userSolution.correct) {
      setDifficulty((prev) => (prev >= 3 ? 2 : prev + 1));
    } else {
      setDifficulty((prev) => (prev <= 0 ? 0 : prev - 1));
    }
    setUserSolution(null);
    setStudentAnswer("");
  };
  const nextBtnStyle = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md mt-4  transition duration-300 outline-none focus:outline-none `;
  return (
    <div>
      {userSolution ? (
        userSolution.correct ? (
          <CorrectAnswer solution={userSolution}>
            <button className={nextBtnStyle} onClick={handleNextQuestion}>
              Next Question
            </button>
          </CorrectAnswer>
        ) : (
          <FalseAnswer solution={userSolution}>
            <button className={nextBtnStyle} onClick={handleNextQuestion}>
              Next Question
            </button>
          </FalseAnswer>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default CheckAnswerCon;
