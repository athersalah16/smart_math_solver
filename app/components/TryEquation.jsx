"use client";
import { useEquation } from "../contex/EquationContex";
function TryEquation() {
  const { setEquation } = useEquation();
  const equations = [
    { equa: "Solve for x: 2x + 5 = 13" },
    { equa: "Find the derivative of f(x) = 3x² + 2x - 1" },
    { equa: "Calculate the area of a circle with radius 5cm" },
    { equa: "Simplify: (x² - 4) / (x - 2)" },
    { equa: "Solve the quadratic equation: x² - 5x + 6 = 0" },
    { equa: "What is the integral of 2x?" },
  ];
  return (
    <div className="w-full mt-10 ">
      <h1 className="text-2xl font-semibold text-black">
        Try these example problems
      </h1>
      <div className=" w-full flex flex-col   md:grid md:grid-cols-2 gap-4  mr-3 mt-4">
      {equations.map((eq, index) => (
        <div
            onClick={() => setEquation(eq.equa)}
          className=" flex hover:bg-linear-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600   duration-300 transition-colors mt-4 cursor-pointer items-center flex-row bg-linear-to-br from-blue-100 to-purple-100 w-full h-12 text-black  rounded-xl "
          key={index}
        >
          <div className=" ml-4 w-8 h-8  
          
          text-center text-xl bg-white text-black rounded-xl">{index + 1}</div>
          <span className=" ml-5 text-black ">{eq.equa}</span>
        </div>
      ))}</div>
    </div>
  );
}

export default TryEquation;
