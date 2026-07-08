"use client";
import { useEquation } from "../contex/EquationContex";
import DisplaySolution from "./DisplaySolution";
function EquationInput() {
  const { equation, setEquation, runAI, solution, loading } = useEquation();
  return (
    <div className="w-full justify-center items-center flex flex-col mt-3">
      <div>
        <h2 className="text-black font-bold">Enter your math problem</h2>
      </div>
      <textarea
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        placeholder="Type your math problem here...(e.g., Solve for x: 2x + 5 = 13)"
        className="border border-gray-300 rounded-md bg-white text-black ml-3 w-[800px] h-[100px] mt-2 py-2 px-4 focus:outline-none focus:shadow-lg focus:ring-2 focus:ring-gray-200"
      ></textarea>
      <button
        onClick={() => runAI("solve", equation)}
        disabled={!equation.trim()}
        className={`text-white ${!equation.trim() ? "bg-gray-500 cursor-not-allowed mt-4 w-1/2 h-12  ml-2 text-xl  transition hover:opacity-90   rounded-xl" : "bg-linear-to-r mt-4 w-1/2 h-12  ml-2 text-xl cursor-pointer transition hover:opacity-90   rounded-xl from-blue-600 via-purple-600 to-pink-600"}`}
      >
        {loading ? "Solving..." : "Solve Problem"}
      </button>
      { solution && (
        <DisplaySolution solution={solution} />
      )}
    </div>
  );
}

export default EquationInput;
