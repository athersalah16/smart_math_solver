import React from "react";
import DisplayPractice from "../components/DisplayPractice";
import Tips from "../components/Tips";
import CheckAnswerCon from "../components/CheckAnswerCon";

function Page() {
  return (
    <div className="flex  w-full md:items-center min-h-screen flex-col pt-2  justify-center    font-sans ">
      <h1 className="font-bold mt-4  text-center text-transparent text-5xl md:text-6xl bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        Practice Problems
      </h1>
      <p className="text-center mt-4 text-xl mb-2 text-black">
        Test your skills with these practice questions
      </p>
      <DisplayPractice />

      <CheckAnswerCon />
     <Tips/>
    </div>
  );
}

export default Page;
