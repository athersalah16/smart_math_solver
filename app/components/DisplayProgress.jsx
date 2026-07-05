"use client";

import { Progress } from "@/components/ui/progress";
import { useEquation } from "../contex/EquationContex";
function DisplayProgress({}) {
  const { questionIndex, practiceProblems } = useEquation();
  return (
    <div className=" w-[800px]  h-12 bg-white  rounded-lg  flex flex-col mt-3">
      <div className="w-full px-3 flex justify-between">
        <p>Progress </p>
        <p>
          Question {questionIndex + 1} of {practiceProblems.length}
        </p>
      </div>
      <></>
      <Progress
        value={((questionIndex + 1) / practiceProblems.length) * 100}
        className="w-[780px] ml-3 h-2 rounded-full overflow-hidden [&>div]:bg-linear-to-r [&>div]:from-blue-600 [&>div]:via-purple-600 [&>div]:to-pink-600 [&>div]:transition-all [&>div]:duration-500"
      />
    </div>
  );
}

export default DisplayProgress;
