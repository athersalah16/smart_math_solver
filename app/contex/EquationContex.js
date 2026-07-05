"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  checkAnswerPrompt,
  solveEquationPrompt,
} from "./../helper_funcs/prompts";
import validateAIData from "./../helper_funcs/validateAIData";
import {practiceProblems} from "../helper_funcs/practiceProblems";
const EquationContex = createContext([]);
function EquationProvider({ children }) {
  const [equation, setEquation] = useState("");
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
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
            },
            body: JSON.stringify({
              model: "gpt-4.1",
              messages: [
                {
                  role: "user",
                  content:
                    mode === "check"
                      ? checkAnswerPrompt(question, studentAnswer)
                      : solveEquationPrompt(question),
                },
              ],
            }),
          },
        );
        const responseData = await response.json();

        const result = JSON.parse(responseData.choices[0].message.content);
        if (mode === "check") {
          const validateAIDataResult = validateAIData(result, studentAnswer);
          setUserSolution(validateAIDataResult);
        } else {
          setSolution(result);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
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

//
