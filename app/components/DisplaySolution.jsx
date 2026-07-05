function DisplaySolution({ solution }) {
  return (
    <div className="w-full grid grid-cols-1 mt-6 gap-4">
     <h2 className="text-black font-bold">Solution Steps:</h2>
      <div>
        {solution?.steps?.map((step, index) => (
          <div key={index} className="p-4 rounded-xl mt-1 border bg-gray-50 space-y-2">
            <p className="font-bold text-blue-600">Step {index + 1}</p>
            <p className="text-lg font-mono">{step.step}</p>
            <p className="text-sm text-gray-500">{step.explanation}</p>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-green-100 text-center mt-4">
        <p className="text-sm text-gray-600">Final Answer</p>
        <p className="text-3xl font-bold text-green-700">
          {solution?.final_answer}
        </p>
      </div>
    </div>
  );
}

export default DisplaySolution;
