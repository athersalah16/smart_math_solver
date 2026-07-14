import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CorrectAnswer({ children, solution }) {
  return (
    <div className="md:w-[800px] md:h-[200px] w-80 h-64 bg-green-100 border border-green-400 rounded-lg mt-3  px-3 flex flex-col text-lg font-bold text-green-600">
      <div className="flex flex-row mt-3">
        {" "}
        <FontAwesomeIcon icon={faCheck} className="text-2xl" />{" "}
        <h2 className="text-green-700 text-2xl font-bold">Correct!</h2>
      </div>

      <div className="mt-3  text-lg">
        Explanation:
        <br></br>
        <p className="text-gray-800 mt-1">{solution?.formula} </p>
      </div>
      {children}
    </div>
  );
}

export default CorrectAnswer;
