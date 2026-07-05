import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FalseAnswer({ children, solution }) {
  return (
    <div className="w-[800px] h-[300px] bg-red-100 border border-red-400 rounded-lg mt-3  px-3 flex flex-col text-lg font-bold text-red-600">
      <div className="flex flex-row mt-3">
        {" "}
        <FontAwesomeIcon icon={faX} className="text-2xl " />
        <h2 className="text-red-700 text-2xl font-bold">Not quite right</h2>
      </div>
      <div className="mt-3  text-xl">
        <p className="text-red-600 font-semibold mt-2">
          The correct answer is: {solution?.correct_answer}
        </p>
      </div>

      <div className="mt-1  text-lg">
        Explanation:
        <br></br>
        <p className="text-gray-800 mt-4">{solution?.formula} </p>
      </div>
      {children}
    </div>
  );
}

export default FalseAnswer;
