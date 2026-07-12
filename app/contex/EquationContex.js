"use client";
import { createContext, useContext, useEffect, useState } from "react";

import validateAIData from "./../helper_funcs/validateAIData";
import { practiceProblems } from "../helper_funcs/practiceProblems";
const EquationContex = createContext([]);
function EquationProvider({ children }) {
  const [equation, setEquation] = useState("");
  const [error, setError] = useState("");
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState("");
  const [solution, setSolution] = useState(null);
  const [userSolution, setUserSolution] = useState(null);
  const [studentAnswer, setStudentAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  const runAI = (type, equa) => {
    if (!equa.trim()) return;

    setMode(type); // solve or check
    setQuestion(equa);
  };
  useEffect(() => {
    const getSolution = async () => {
      if (!question.trim()) return;
      setLoading(true);
      try {
        const response = await fetch("/api/solve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mode,
            question,
            studentAnswer,
          }),
        });
        const data = await response.json();
        if (data.error) setError(data.error);
        if (mode === "check") {
          const validateAIDataResult = validateAIData(data, studentAnswer);
          setUserSolution(validateAIDataResult);
        } else {
          setSolution(data);
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getSolution();
  }, [question]);

  return (
    <EquationContex.Provider
      value={{
        setStudentAnswer,
        studentAnswer,
        equation,
        setEquation,
        solution,
        setSolution,
        userSolution,
        setUserSolution,
        runAI,
        loading,
        studentAnswer,
        setStudentAnswer,
        practiceProblems,
        difficulty,
        setDifficulty,
        error,
        setError,
      }}
    >
      {children}
    </EquationContex.Provider>
  );
}

function useEquation() {
  const contx = useContext(EquationContex);
  return contx ? contx : { error: "Can not get the contex" };
}

export { useEquation, EquationProvider };
